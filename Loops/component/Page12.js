import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col, Divider } from 'antd';
import './../../css/Page12.css';


 class Page12 extends Component {
    render() {
        return (
            <div style={{maxWidth:'1100px'}}>
                <form>
                <Row>
                    <Col span={2}></Col>
                    <Col span={2}><Icon type="user" style={{fontSize:'30px'}}/></Col>
                    <Col span={6} ><h5 style={{float:'left'}}>Personal Details</h5></Col>
                    <Col span={12}></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Divider/>
                    </Col>
                <Col span={2}></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={8}><h4 style={{color:'#707070'}}>General Details</h4></Col>
                    <Col span={14}></Col>
                </Row>
                <Row gutter={16}>
                    <Col span={2}></Col>
                    <Col span={8}><Input size="large" placeholder="Title and Full Name" className='in1'/></Col>
                    <Col span={6}><Input size="large" placeholder="Marital Status" className='in1'/></Col>
                    <Col span={6}><Input size="large" placeholder="Hubwise ID" className='in1'/></Col>
                    <Col span={2}></Col>

                </Row>


                </form>
                
               
            </div>
        )
    }
}
export default Page12;
