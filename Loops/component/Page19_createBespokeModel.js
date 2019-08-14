import React, { Component } from 'react';
import { Row, Col, Icon, Button,Switch,Select,Table, Radio,Divider,Input, Tooltip,DatePicker, Modal,Tag, Form, InputNumber} from 'antd';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
import {searchByType,addInstrument, allocations,deleteRecord, insertAllocation,allocationSum} from './../../actions/SubaccountActions';
import Page19_Bespoke_Popup from './Page19_Bespoke_Popup'


 class Page19_createBespokeModel extends Component {
     constructor(props){
         super(props)

         this.state = {
            size: 'default',
            buttonsize:'large',
            popupvisible: false,
            value1: '' || '#CFD',
            value2:'' || 'Sedol',
            value3:'',
            errors: '',
            allocation:'',
            allocation2: [],
            narrowSearch:[],
            value:0,
            sum:''
          };

          this.popUpButtonClick = this.popUpButtonClick.bind(this)
          this.searchForType = this.searchForType.bind(this)
          this.handleRemove = this.handleRemove.bind(this)
          this.handleAllocation = this.handleAllocation.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
         
     }
     componentDidMount(){
        this.props.searchByType();
        console.log('Page19 mounted',this.props)
    }
     
    // searchByType handle swtich button change main views select one of models or creating BespokeModel 
     searchForType(event){
        console.log(`selected searchFor TYPE ${event}`);

     }
     popUpButtonClick(){
        this.setState({ popupvisible: true })
        console.log('POPUP BUTTON CLICKED')
     }
     setModal1Visible(popupvisible){
         this.setState({popupvisible:false})
     }
     prepareSearch(value1,value2){
         console.log('throw wartosc value1', value1)

     }
     handleRemove(record){
        console.log('display record',record)
        console.log('display ID to remove',record.id)
        const id = record.id
        this.props.deleteRecord(id)
     }
     
     //HANDLE ALLOCATION
     handleAllocation(value){
        let allocation = this.state.allocation;
        this.setState({allocation: value});
    //  dzialajacy kod z Input bez value ###############
    //  handleAllocation(event){
    //     let allocation = this.state.allocation;
    //     this.setState({allocation: event.target.value});
    //#######################################################

        //this.setState({allocation: parseInt(value)});
        console.log('RECORD...',allocation);
        // let instrumentId = this.props.tableInstruments[0].id;
        // console.log('instrumentId_  ',instrumentId)
  
     }

     handleSubmit(event,record){

        let value = parseInt(this.state.allocation);
        let added =  parseInt(this.props.sum)
        console.log('added___', added)
        console.log('value to add___',value )

        if(this.props.sum + value > 100 || value > 100){
            alert('not allowed')
        }else{

             //#### works fine adds to proper intruments #######//
            console.log('record values.......',record)
            event.preventDefault();
            let instrumentId = record.id;
            console.log('instrumentId_  ',instrumentId)
            let value = this.state.allocation;
            console.log('value to pass to redux___',value)
            this.props.insertAllocation(instrumentId,value)
            // ###############################################

            //if value is submitted, then change button('CLEAR INPUT') and inputfieldReadOly or disabled


            // map allocations in redux state and add all values - display onPage as total % of allocation
            this.props.allocationSum()
            console.log('this.props.allocation_________',this.props.allocationSum)


        }

       
         
        // allocation2.push(value)
        // // let xyz = 0;
        // // let allocation2 = xyz ? xyz : this.state.allocation;
        // let reducer2 = ((accumulator, value) => accumulator + value);
        // let sumAllo2 = allocation2.reduce(reducer2);
        // console.log('sumAllo2',sumAllo2)

        // if((this.state.allocation2 + value > 100) || (value > 100)){
        // //if(this.props.sum > 100){
        //     alert('Sorry cannot add more')
        // }else{

        //     let value = parseInt(this.state.allocation);
        //     console.log('value', value)
        //     let allocation2 = this.state.allocation2;
        //     console.log('allocation2',allocation2)
        //     //push value from allocation/input field into array allocation2
        //     allocation2.push(value);

        //     let reducer = ((accumulator, value) => accumulator + value);
            
        //         let sum = allocation2.reduce(reducer);
        //         console.log('podaj sume input fields', sum)
        //         this.props.insertAllocation(sum)
        // }
     }
     
     
    render() {

        
        //data from reducer state
        const dataforTable = this.props.tableInstruments;
        console.log('dataforTable....wlasciwe dane po selekcji do glownej tabeli',dataforTable)

        //data from Parent Component
        const data = this.state.narrowSearch;

        //data from reducer
        const typeModel = this.props.search_type
        console.log('typeModel',typeModel )
        const {errors} = this.state
        
        // andt features
        const { MonthPicker, RangePicker } = DatePicker;
        const dateFormat = 'YYYY-MM-DD';
        const size = this.state.size;
        const buttonsize = this.state.buttonsize
        const { Option, OptGroup } = Select;
        const { Search } = Input;
        const columns = [
            { title:'Sedol',dataIndex:'sedol', key:'sedol'},
            { title: 'Name', dataIndex: 'name', key: 'name' },
            // { title: 'Allocation', dataIndex: 'allocation', key: 'allocation', render: (text,record) => <Input size="small" defaultValue={0} placeholder="insert a number" name='allocation' onChange={this.handleAllocation(record.allocation)} style={{width:'50%'}} /> },
            
            //######### new Solution in progress
            //{ title: 'Allocation', dataIndex: 'allocation', key: 'allocation', render: (text,record) => 
            
            //<InputNumber defaultValue={0} min={0} max={100} onChange={this.handleAllocation} onBlur={this.handleBlur}/>
            // 
           //}
        //######### end of testing new solution


            // ######### working with submit form button
            { title: 'Allocation', dataIndex: 'allocation', key: 'allocation', render: (text,record) => 
            
            <form onSubmit={event => this.handleSubmit(event,record)}>
                        <InputNumber size="small"  defaultValue={0} min={0} max={100} placeholder="insert a number" name='allocation' onChange={this.handleAllocation} style={{width:'50%'}} />
                    {/* <Input size="small" defaultValue={0} min={0} max={100} placeholder="insert a number" name='allocation' onChange={this.handleAllocation} style={{width:'50%'}} /> */}
                    {/* <InputNumber min={1} max={10} defaultValue={3}  onChange={this.onChange} /> */}
                    <input type="submit" value="Allocate" id={this.props.tableInstruments[0].id} />
                </form>
           },
        // ######### end of working with submit form button



            
            {
              title: 'Action',
              dataIndex: '',
              key: 'x',
            render: (text,record) => <Button onClick={e => this.handleRemove(record)}><Icon type="minus-circle" style={{fontSize:'15px'}}/>Remove</Button>
            },
          ];
        
        
        return (
            <div style={{maxWidth:'1100px',margin:'auto'}}>
                <Row gutter={16}>
                    <Col span={24}>
                        <Row>
                            <Col span={8}><p className='labelText'>Model Name: *</p></Col>
                            <Col span={8}><p className='labelText'>Model Date: *</p></Col>
                            <Col span={8}><p className='labelText'>Total Allocation:</p></Col>

                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Row gutter={16}>
                            <Col span={8}><Input
                                                placeholder="Model Name"
                                                prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                suffix={
                                                <Tooltip title="Enter a Descriptive Name">
                                                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                                                </Tooltip>
                                                }/>
                            </Col>
                            <Col span={8}><DatePicker size={size} placeholder='current date'/></Col>
                            <Col span={8}><h5 style={{float:'left'}}><span>{this.props.sum}</span>%</h5></Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop:'10px'}}>
                    <Col span={24}>
                        <div>
                            <Table columns={columns} dataSource={dataforTable} size="small" pagination={false} className='p19_table'/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={20}><p className='labelText'>* Required Information.</p></Col>
                    <Col span={4}>
                        <div>
                            <div>
                                <Button onClick={this.popUpButtonClick}>
                                <Icon type="plus" /> Add
                                </Button>
                                <Modal
                                title="Find Instruments"
                                visible={this.state.popupvisible}
                                width='50%'
                                footer={false}
                                onCancel={() => this.setModal1Visible(false)}
                                >
                                    < Page19_Bespoke_Popup />
                                </Modal>

                                
                            </div>
                        </div>
                    </Col>
                </Row>


                <Divider />
                
            </div>
        )
    }
}
Page19_createBespokeModel.propTypes = {
    searchByType: PropTypes.func.isRequired,
    search_type: PropTypes.array.isRequired,
    allocations: PropTypes.func.isRequired,
    addInstrument: PropTypes.func.isRequired,
    tableInstruments: PropTypes.array.isRequired,
    insertAllocation: PropTypes.func.isRequired,
    sum: PropTypes.number.isRequired,
    allocation: PropTypes.array.isRequired,
}

const mapStateToProps = state =>{
    return{
        search_type: state.subAcc.search_type,
        tableInstruments: state.subAcc.tableInstruments,
        sum: state.subAcc.sum,
        allocation: state.subAcc.tableInstruments.allocation
    }
}
export default connect(mapStateToProps,{searchByType,addInstrument,allocations,deleteRecord,insertAllocation, allocationSum}) (Page19_createBespokeModel)

