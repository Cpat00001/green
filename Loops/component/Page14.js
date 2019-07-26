import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Row,Col } from 'antd';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { fi } from 'date-fns/esm/locale';
import {replacedata} from './../../actions/ContactActions';
import './../../css/Page14.css';


class Page14 extends Component {
    constructor(props){
        super(props)

        this.state= {

            username: '',
            email:'',
            submitted:'rgb(112, 155, 224)',
            text:'Push data'

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.pushed = this.pushed.bind(this)
    }
    
    pushed(){
        this.setState(state => ({ submitted: 'rgb(34, 189, 119)'}))
        this.setState(state =>({ text: 'Thanks' }))
        console.log('button was clicked')
        }
    

        handleInputChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.name,' +++',this.state.email)

        const {id} = this.props.match.params;
        const {username} = this.state;
        const {email} = this.state;
        

        const swapdata = {
            id,
            username,
            email
        }
        console.log('swapdata', swapdata)


        this.props.replacedata(swapdata)
    }
    render() {

        const {contact} = this.props;
        console.log(contact)
        
        return (
        
            <div style={{ maxWidth:'1100px',margin:'auto'}}>
                <h5>page_14</h5>
                <div style={{maxWidth:'500px',margin:'auto'}}>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20} style={{backgroundColor:'#FAFAFA',border:'1px solid rgb(223, 230, 240)',borderRadius:'5px',marginTop:'200px'}}>
                            <div className='smallBox'><Icon type="unlock" className='iconPage14'/><p className='text'>Simple form</p></div>

                            <Row style={{marginTop:'20px'}}>
                                <Col span={8}></Col>
                                <Col span={8}><h5 style={{color:'rgb(193, 203, 217)'}}>Simple form</h5></Col>
                                <Col span={8}></Col>
                            </Row>

                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item style={{marginTop:'50px'}}>
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', fontSize:'15px' }} />}
                                placeholder="Username"
                                style={{height:'60px', width:'80%'}}
                                onChange={this.handleInputChange}
                                name='username'
                                //defaultValue = {this.props.contact.name}
                                defaultValue={this.state.username}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)', fontSize:'15px' }} />}
                                type="text"
                                placeholder="email is required"
                                style={{height:'60px', width:'80%'}}
                                name='email'
                                onChange={this.handleInputChange}
                                //defaultValue = {this.props.contact.email}
                                defaultValue={this.state.email}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button style={{width:'70%', height:'60px',backgroundColor: this.state.submitted}} type="primary" htmlType="submit" className="login-form-button" onClick={this.pushed}>
                                        {this.state.text}
                                </Button>
                            </Form.Item>
                        </Form>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </div>
            </div>
        )
    }
}

Page14.propTypes = {
    contact: PropTypes.object.isRequired
}

const mapStateToProps = state =>{
    return{
        contact: state.contact.contact
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        replacedata: (swapdata) => dispatch(replacedata(swapdata))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Page14);

