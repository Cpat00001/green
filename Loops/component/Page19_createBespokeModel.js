import React, { Component } from 'react';
import { Row, Col, Icon, Button,Switch,Select,Table, Radio,Divider,Input, Tooltip,DatePicker, Modal,Tag} from 'antd';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
import {searchByType,addInstrument, allocations,deleteRecord} from './../../actions/SubaccountActions';
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
            narrowSearch:[],
            value:0,
            allocation: []
          };

          this.popUpButtonClick = this.popUpButtonClick.bind(this)
          this.searchForType = this.searchForType.bind(this)
          this.handleRemove = this.handleRemove.bind(this)
          this.handleAllocation = this.handleAllocation.bind(this)
          this.handleBlur = this.handleBlur.bind(this)
        
     }
     componentDidMount(){
        this.props.searchByType();
        console.log('Page19 mounted',this.props)
    }
    handleAllocation(event){
        this.setState({ [event.target.name]: event.target.value });
        console.log('event.target.value',event.target.value)
        this.setState({value:event.target.value})
        //on blur zrob submit >> submit bedzie push.array >> a pozniej reduce(obecna wartosc,plus kolejna)

        // if(this.state.allocation !== 0){

        //     this.state.allocation = 0 ? event.target.value: this.state.allocation + event.target.value

        //     console.log('this.state.allocation',this.state.allocation)
        //     // let accu = this.state.allocation;
        //     // let curr = event.target.value;
            
        //     // const total = accu.reduce((accu,curr) => accu + curr,0 )
        //     // console.log(total)
        // }

     }
     handleBlur(){
        console.log('this.state.allocation',this.state.allocation)
        // this.setState({allocation:this.state.value === 0 ? this.state.value + this.state.value})
        //value: state.value == 0 ? action.payload : state.value + action.payload

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
     
    render() {

        

        //data from reducer state
        const dataforTable = this.props.tableInstruments;
        console.log('dataforTable....wlasciwe dane po selekcji do glownej tablie',dataforTable)

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
            { title: 'Allocation', dataIndex: 'allocation', key: 'allocation', render: () => <Input size="small" placeholder="insert a number" name='allocation' onChange={this.handleAllocation} style={{width:'50%'}} onBlur={this.handleBlur}/> },
            {
              title: 'Action',
              dataIndex: '',
              key: 'x',
            // render: () => <Button onClick={this.handleRemove.bind(this,id)}><Icon type="minus-circle" style={{fontSize:'15px'}}/>Remove</Button>
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
                            <Col span={8}><h5 style={{float:'left'}}><span>{this.state.allocation}</span>%</h5></Col>
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
}

const mapStateToProps = state =>{
    return{
        search_type: state.subAcc.search_type,
        tableInstruments: state.subAcc.tableInstruments,
    }
}
export default connect(mapStateToProps,{searchByType,addInstrument,allocations,deleteRecord}) (Page19_createBespokeModel)

