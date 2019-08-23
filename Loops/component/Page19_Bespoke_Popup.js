import React, { Component } from 'react';
import { Row, Col, Icon, Button,Switch,Select,Table, Radio,Divider,Input, Tooltip,DatePicker, Modal,Tag} from 'antd';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
import {searchByType,addInstrument, allocations} from './../../actions/SubaccountActions';

 class Page19_Bespoke_Popup extends Component {
     constructor(props){
         super(props)

         this.state = {
            size: 'default',
            buttonsize:'large',
            popupvisible: false,
            value1: '' || '#CFD',
            value2:'' || 'Sedol' ,
            value3:'',
            errors: '',
            narrowSearch:[],
            allocation:''
         }

         this.searchByName = this.searchByName.bind(this)
         this.handleDropDownList1 = this.handleDropDownList1.bind(this)
         this.handleDropDownList2 = this.handleDropDownList2.bind(this)
         this.handleInput = this.handleInput.bind(this)
         this.AddInstrument = this.AddInstrument.bind(this)
         this.clearForm = this.clearForm.bind(this)

     }
     clearForm(){
         this.setState(state=>({value3:"", value1:'',value2:''}))
         console.log(this)
         console.log('clear form cliced')
     }
     handleInput(event){
         this.setState({value3:event.target.value })
     }

     searchByName(value){

        if (value == "") {
                console.log('this input cannot be EMPTY')
                let message = 'To get search result this field is required'
                this.setState({ errors: { name: "Field nbr 3 is required" } });
                return;

        }
        this.setState({value3: value})
        console.log('search input type name np CASINO', value);

        let typeModel = this.props.search_type;
        console.log('typeModel',typeModel)
        let type = this.state.value1;
        let anything = this.state.value3;
        console.log(type,anything)
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
    handleDropDownList1(value){
        console.log(`selected ${value}`)
        this.setState({value1: value})
        

    }
    handleDropDownList2(value){
       console.log('selected between sedol/name', value)
       this.setState({value2: value})
   }
   AddInstrument(id2){
    const newInstrument = this.state.narrowSearch[0]
    console.log('ADD INSTRUMENT CLICKED and ID is: ',newInstrument, id2 )
    this.props.addInstrument(newInstrument);
   }

    render() {

        //data from Parent page19_createBespokeModel
        //const data = this.props.data
        const data = this.state.narrowSearch;
        const id = data.map( x => x.id);
        const id2 = id[0];
        console.log(data, id2)

        // data from andt
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
            //render: () => <Button onClick={this.AddInstrument.bind(this,id2)}><Icon type="plus-circle" style={{fontSize:'15px'}} />Add</Button>
            render: () => <Button onClick={this.AddInstrument.bind(this,id)}><Icon type="plus-circle" style={{fontSize:'15px'}} />Add</Button>

            },
          ];


        return (
            <div>
                <h5>PopUP MODEL Table</h5>
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
                                        <Select placeholder='-' style={{ width:'100%' }} onChange={this.handleDropDownList1} onClick={this.searchForType} value={this.state.value1}>
                                                <OptGroup label="types...">
                                                    <Option value="#CFD" >#CFD</Option>
                                                    <Option value="Exchange Trade Fund">Exchange Trade Fund</Option>
                                                    <Option value="Investment Trust">Investment Trust</Option>
                                                    <Option value="Open Ended">Open Ended</Option>


                                                </OptGroup>
                                        </Select>
                                    </Col>
                                    <Col span={8}>
                                        <Select  placeholder='Name' style={{ width:'100%' }} onChange={this.handleDropDownList2} value={this.state.value2}>
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
                                            // error = {errors}
                                            value={this.state.value3}
                                            onChange={this.handleInput}
                                            
                                    />
                                    </Col>
                                    <Button onClick={this.clearForm.bind(this)}>Clear form</Button>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <div>
                                            <Table columns={columns} dataSource={data} size="small" key={data.id} pagination={false} className='p19_table'/>
                                        </div>
                                    </Col>
                                </Row>
            </div>
        )
    }
}

Page19_Bespoke_Popup.propTypes = {
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
export default connect(mapStateToProps,{searchByType,addInstrument,allocations}) (Page19_Bespoke_Popup)
