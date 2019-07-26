import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col, Divider } from 'antd';
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import {updateData} from './../../actions/ContactActions';


 class Page13 extends Component {
     constructor(props){
         super(props)

         this.state = {

            name: '',
            email: ''
            
         }

         this.handleInputChange = this.handleInputChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }
    
     handleSubmit(event){

        const {email} = this.state;
        const {emailProps} = this.props.contact.email;
        const {name} = this.state;
        console.log(name)
        const {id} = this.props.match.params
        console.log('wyrzuc ID z match.params', id)

        // let email;
        // if(!email2 == ''){
        //     email = this.props.contact.email
        // }

        //let email  = (email2 == '') ? email3 : email2;

        event.preventDefault();
        const overwrite = {
            id,
            name,
            email
        }

        this.props.updateData(overwrite)
        console.log(overwrite)
        console.log(this.state)
        console.log('podaj email',email)
        console.log('this.props.contact.email', this.props.contact.email)
     }

     handleInputChange(event){
        
        this.setState({[event.target.name]: event.target.value})
     }

    
    render() {

        return (
            <div style={{ maxWidth:'1100px',margin:'auto'}}>
                <h5>Update form</h5>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12} style={{backgroundColor:'#FAFAFA'}}>

                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item style={{marginTop:'50px'}}>
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            style={{height:'60px', width:'80%'}}
                            onChange={this.handleInputChange}
                            name='name'
                            //defaultValue = {this.props.contact.name}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="text"
                            placeholder="email is required"
                            style={{height:'60px', width:'80%'}}
                            name='email'
                            onChange={this.handleInputChange}
                            //defaultValue = {this.props.contact.email}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="submit" htmlType="submit" className="login-form-button">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </div>
        )
    }
}
Page13.propTypes = {
    contact: PropTypes.object.isRequired,
    updateData: PropTypes.func.isRequired
}
const mapStateToProps = state =>{
    return{
        contact: state.contact.contact
    }  
}
const mapDispatchToProps = dispatch =>{
    return{
        updateData: (overwrite) => dispatch(updateData(overwrite))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Page13)