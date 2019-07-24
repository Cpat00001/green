import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col, Divider } from 'antd';
import './../../css/Page12.css';
import {connect} from 'react-redux'
import PropTypes from "prop-types";


 class Page12 extends Component {

    
    render() {

        
        const {contact} = this.props;
        console.log('wyrzuc dane do formy', contact)
        const {imie} = contact.name;
        console.log('wyrzuc imie', imie)

        let name;
        if(!contact.name){
            name = ''
        }else{
            name = contact.name
            //defaultValue={contact.name}
        }
        let city;
        let town;
        
        if(!contact.city){
            city = '';
            town = contact.town
        }else if(!contact.town){
            town = '';
            city = contact.city
        }else if(!contact.city && contact.town){
            city = 'testCity';
            town = 'testTown';
        }else{
            town = 'brak';
            city = 'brak';
        }





        let country;
        console.log('country', contact.country)
        if(!contact.country){
            country = '';
        }else{
            country = contact.country;
        }
        let email;
        console.log('email',email)
        if(!contact.email){
            email = '';
        }else{
            email= contact.email;
        }
        let contactNumber;
        if(!contact.contactNumber){
            contactNumber = ''
        }else{
            contactNumber = contact.contactNumber
        }
        let mobile;
        if(!contact.mobile){
            mobile = '';
        }else{
            mobile = contact.mobile;
        }
        let adviser;
        if(!contact.adviser){
            adviser = '';
        }else{
            adviser = contact.adviser;
        }
        let adviserEmail;
        if(!adviserEmail){
            adviserEmail = `${adviser}.yourAdviser@gmail.com`
        }


        return (
            <div style={{maxWidth:'1100px',margin:'auto', backgroundColor:'#F0F0F0'}}>
                <form>
                <Row className='row'>
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
                    <Col span={2} xs={2} md={2} lg={2} xl={2}></Col>
                    <Col span={8}  xs={20} sm={{span:8}} md={{span:8}} lg={{span:8}} xl={{span:8}}><Input size="large" placeholder='Full name' defaultValue={name}  className='in1' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/></Col>
                    <Col span={6} xs={{span:20, offset:2}} sm={{span:6, offset:0}} md={{span:6}} lg={{span:6}} xl={{span:6}}><Input size="large" placeholder='Marital Status'  defaultValue={contact.martialStatus} className='in1'/></Col>
                    <Col span={6} xs={{span:20, offset:2}} sm={{span:6,offset:0}} md={{span:6,offset:0}} lg={{span:6,offset:0}} xl={{span:6,offset:0}}><Input size="large" placeholder="Hubwise ID" className='in1'/></Col>
                    <Col span={2} xs={2} md={2} lg={2} xl={2}></Col>
                </Row>
                <Row gutter={16} className='row'>
                        <Col span={2}></Col>
                        <Col span={8}><h4 style={{color:'#707070'}}>Location Details</h4></Col>
                        <Col span={14}></Col>
                </Row>
                <Row gutter={16} className='row'>
                    <Col span={2} span={2} xs={2} md={2} lg={2} xl={2}></Col>
                    <Col span={12}  xs={20} sm={{span:12}} md={{span:12}} lg={{span:12}} xl={{span:12}}><Input size="large" placeholder="Contact Address" defaultValue={town?(town):(city)} className='in1'/></Col>
                    <Col span={8} xs={{span:20, offset:2}} sm={{span:8, offset:0}} md={{span:8}} lg={{span:8}} xl={{span:8}}><Input size="large" placeholder="Country of Residence" defaultValue={country} className='in1'/></Col>
                    <Col span={2} span={2} xs={2} md={2} lg={2} xl={2}></Col>
                </Row>
                <Row gutter={16} className='row'>
                        <Col span={2}></Col>
                        <Col span={8}><h4 style={{color:'#707070'}}>Communication Details</h4></Col>
                        <Col span={14}></Col>
                </Row>
                <Row gutter={16}>
                    <Col span={2} span={2} xs={2} md={2} lg={2} xl={2}></Col>
                    <Col span={8} xs={{span:20}} sm={{span:8}} md={{span:8}} lg={{span:8}} xl={{span:8}}><Input size="large" placeholder='email' defaultValue={email}  className='in1'/></Col>
                    <Col span={6} xs={{span:20, offset:2}} sm={{span:6, offset:0}} md={{span:6, offset:0}} lg={{span:6, offset:0}} xl={{span:6,offset:0}}><Input size="small" placeholder="Contact Phone" defaultValue={contactNumber} className='in2'/></Col>
                    <Col span={6} xs={{span:20, offset:2}} sm={{span:6, offset:0}} md={{span:6, offset:0}} lg={{span:6, offset:0}} xl={{span:6,offset:0}}><Input size="" placeholder="Mobile Number" defaultValue={mobile} className='in2'/></Col>
                    <Col span={2} span={2} xs={2} md={2} lg={2} xl={2}></Col>
                </Row>
                <Row gutter={16} className='row'>
                        <Col span={2}></Col>
                        <Col span={8}><h4 style={{color:'#707070'}}>Adviser</h4></Col>
                        <Col span={14}></Col>
                </Row>
                <Row gutter={16} style={{marginBottom:'20px'}}>
                    <Col span={2} xs={2} md={2} lg={2} xl={2}></Col>
                    <Col span={10}  xs={20} sm={{span:10}} md={{span:10}} lg={{span:10}} xl={{span:10}}><Input size="large" placeholder="Name" defaultValue={adviser} className='in1'/></Col>
                    <Col span={10}  xs={{span:20 , offset: 2}} sm={{span:10, offset:0}} md={{span:10,offset:0}} lg={{span:10,offset:0}} xl={{span:10,offset:0}}><Input size="small" placeholder="Email" defaultValue={adviserEmail} className='in1'/></Col>
                    <Col span={2} span={2} xs={2} md={2} lg={2} xl={2}></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}><Divider/></Col>
                    <Col span={2}></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className='p12text'>
                        <p>
                        Please notify us if any of the above details are wrong or need updating.

                        Our Contact Details:
                        Example Ltd., Save Example Limited, Test Street,  Test City, Somewhereshire WX 11 11AA
                        Phone: 01234 123456
                        Email: helpdesk@example.com
                        Online: http://www.exampleplate.com
                        </p></Col>
                    <Col span={2}></Col>

                </Row>
                </form>
            </div>
        )
    }
}
Page12.propTypes = {
    contact: PropTypes.object.isRequired
}
const mapStateToProps = state =>{
    return{
        //contact: state.contact.contact
        //contact: state.contact.contacts
        contacts: state.contact.contacts,
        contact: state.contact.contact
    }
}

export default connect(mapStateToProps, null) (Page12);
