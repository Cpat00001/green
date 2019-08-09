import React, { Component } from 'react';
import { Row, Col, Icon, Button,Switch,Select,Table, Radio,Divider,Input, Tooltip,DatePicker, Modal,Tag} from 'antd';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
import {searchByType,addInstrument, allocations} from './../../actions/SubaccountActions';


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
            allocation:''
          };

          this.popUpButtonClick = this.popUpButtonClick.bind(this)
          this.handleDropDownList1 = this.handleDropDownList1.bind(this)
          this.searchForType = this.searchForType.bind(this)
          this.handleDropDownList2 = this.handleDropDownList2.bind(this)
          this.searchByName = this.searchByName.bind(this)
          this.AddInstrument = this.AddInstrument.bind(this)
     }
     componentDidMount(){
        this.props.searchByType();
        console.log('Page19 mounted',this.props)
    }
    AddInstrument(){
        const newInstrument = this.state.narrowSearch[0]
        console.log('ADD INSTRUMENT CLICKED and ID is: ',newInstrument )
        this.props.addInstrument(newInstrument);
    }
    // searchByType handle swtich button change main views select one of models or creating BespokeModel 
     searchForType(event){
        console.log(`selected searchFor TYPE ${event}`);

     }
     handleDropDownList1(value){
         console.log(`selected ${value}`)
         this.setState({value1: value})
         

     }
     handleDropDownList2(value){
        console.log('selected between sedol/name', value)
        this.setState({value2: value})
    }
    searchByName(value){

        if (value == "") {
                console.log('this input cannot be EMPTY')
                let message = 'To get search result this field is required'
                this.setState({ errors: { name: "Field nbr 3 is required" } });
                return;

        }
        this.setState({value3: value})
        console.log('search BY MODEL', value);

        let typeModel = this.props.search_type;
        let type = this.state.value1;
        let anything = this.state.value3;
        // let allo = typeModel.allocation
        

            if(this.state.value2 === "Sedol"){
                const search1 = typeModel.filter( result => result.type === this.state.value1 && result.sedol === this.state.value3)
                console.log('searching result by sedol', search1)
                this.setState({narrowSearch:search1})
                // this.props.allocation();
    
            }else if( this.state.value2 === 'name'){
                const search1 = typeModel.filter( result => result.type === this.state.value1 && result.name === this.state.value3)
                console.log('searching result by name',search1)
                this.setState({narrowSearch:search1})
            }
        
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
     
    render() {

        //data from Parent Component
        const data = this.state.narrowSearch;
        console.log('THROW DATA FOR POPUP',data)
        //const columns = this.props.columns;
        const id = data.map( x => x.id);
        //const id2 = id[0]
        console.log(data , id)

        //data from reducer
        const typeModel = this.props.search_type
        console.log('typeModel',typeModel )
        const {errors} = this.state
        const instruForTable = this.props.tableInstruments;
        console.log('kontruowanie tabeli modelu', instruForTable)
        //const {id} = 

        

        // andt features
        const { MonthPicker, RangePicker } = DatePicker;
        const dateFormat = 'YYYY-MM-DD';
        const size = this.state.size;
        const buttonsize = this.state.buttonsize
        const { Option, OptGroup } = Select;
        const { Search } = Input;
        const columns = [
            { title: 'Instrument Id', dataIndex: 'instrument Id', key: 'Instrument Id' },
            { title: 'Name', dataIndex: 'name', key: 'name' },
            { title: 'Allocation', dataIndex: 'allocation', key: 'allocation' },
            {
              title: 'Action',
              dataIndex: '',
              key: 'x',
            render: () => <Button onClick={this.AddInstrument.bind(this,id)}><Icon type="plus-circle" style={{fontSize:'15px'}} />Add</Button>
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
                            <Col span={8}><h5 style={{float:'left'}}>0%</h5></Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop:'10px'}}>
                    <Col span={24}>
                        <div>
                            <Table columns={columns} dataSource={data} size="small" pagination={false} className='p19_table'/>
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
                                {/* create modal view */}
                                <Row>
                                    <Col span={24}>
                                        <p className='labelText' style={{color:'peru'}}>Please provide value in every input field to get result</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}><p className='labelText'>Find by type:</p></Col>
                                    <Col span={4}></Col>
                                    <Col span={8}><p className='labelText'>Match on:</p></Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={16}>
                                        <Select placeholder='-' style={{ width:'100%' }} onChange={this.handleDropDownList1} onClick={this.searchForType}>
                                                <OptGroup label="types...">
                                                    <Option value="#CFD" >#CFD</Option>
                                                    <Option value="Exchange Trade Fund">Exchange Trade Fund</Option>
                                                    <Option value="Investment Trust">Investment Trust</Option>
                                                    <Option value="Open Ended">Open Ended</Option>


                                                </OptGroup>
                                        </Select>
                                    </Col>
                                    <Col span={8}>
                                        <Select defaultValue="Sedol" placeholder='Name' style={{ width:'100%' }} onChange={this.handleDropDownList2}>
                                                <OptGroup label="Name">
                                                <Option value="Sedol">Sedol</Option>
                                                <Option value="name">Name</Option>
                                                </OptGroup>
                                        </Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <p className='labelText'>Find anything containing:</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={14}>
                                    <Search
                                            placeholder="Search text"
                                            enterButton="Search"
                                            size="large"
                                            onSearch={this.searchByName}
                                            error = {errors}
                                            // value={this.state.value}
                                            
                                    />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <div>
                                            <Table columns={columns} dataSource={data} size="small" key={data.id} pagination={false} className='p19_table'/>
                                        </div>
                                    </Col>
                                </Row>
                                
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
    tableInstruments: PropTypes.array.isRequired

}

const mapStateToProps = state =>{
    return{
        search_type: state.subAcc.search_type,
        tableInstruments: state.subAcc.tableInstruments
    }
}
export default connect(mapStateToProps,{searchByType,addInstrument,allocations}) (Page19_createBespokeModel)

