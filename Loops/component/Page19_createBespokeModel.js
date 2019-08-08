import React, { Component } from 'react';
import { Row, Col, Icon, Button,Switch,Select,Table, Radio,Divider,Input, Tooltip,DatePicker, Modal} from 'antd';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';


 class Page19_createBespokeModel extends Component {
     constructor(props){
         super(props)

         this.state = {
            size: 'default',
            buttonsize:'large',
            popupvisible: false
          };

          this.popUpButtonClick = this.popUpButtonClick.bind(this)
          this.handleDropDownList1 = this.handleDropDownList1.bind(this)
     }
     handleDropDownList1(value){
         console.log(`selected ${value}`)

     }
     popUpButtonClick(){
        this.setState({ popupvisible: true })
        console.log('POPUP BUTTON CLICKED')
     }


    render() {
        // andt features
        const { MonthPicker, RangePicker } = DatePicker;
        const dateFormat = 'YYYY-MM-DD';
        const size = this.state.size;
        const buttonsize = this.state.buttonsize
        const { Option, OptGroup } = Select;
        const { Search } = Input;

        //data from Parent Component
        const data = this.props.data;
        const columns = this.props.columns;

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
                                >
                                {/* create modal view */}
                                <Row>
                                    <Col span={12}><p className='labelText'>Find by type:</p></Col>
                                    <Col span={12}><p className='labelText'>Match on:</p></Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={16}>
                                        <Select placeholder='-' style={{ width:'100%' }} onChange={this.handleDropDownList1}>
                                                <OptGroup label="types...">
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                                </OptGroup>
                                        </Select>
                                    </Col>
                                    <Col span={8}>
                                        <Select placeholder='Name' style={{ width:'100%' }} onChange={this.handleDropDownList1}>
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
                                            onSearch={value => console.log(value)}
                                    />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <div>
                                            <Table columns={columns} dataSource={data} size="small" pagination={false} className='p19_table'/>
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
export default connect() (Page19_createBespokeModel)

