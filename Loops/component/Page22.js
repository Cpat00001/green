import React, { Component } from 'react';
import AntTest1 from '../../Ant/AntTest1';
import AntTest2 from '../../Ant/AntTest2';
import '../../css/Page22_style.css'
import { Row, Col, Icon, Divider, Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAdvisors} from '../../actions/Form22Actions';

 class Page22 extends Component {
     constructor(props){
         super(props);
         this.state={
             size: 'large'
         }
     }

     componentDidMount(){
         this.props.getAdvisors();
     }
    render() {
        const advisors = this.props;
        console.log('rzuc advisors',advisors)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <Row>
                {/* odblokuj dwa ponizej zeby wyswietlic paski MENU na stronie */}
                {/* <AntTest1 />
                <AntTest2 /> */}
                {/* left column */}
                <Col xs={4} sm={4} md={4} lg={8} xl={8} style={{backgroundColor:'grey',color:'white',height:'50px'}}></Col>



                {/* middle column */}
                <Col xs={16} sm={16} md={16} lg={8} xl={8} style={{backgroundColor:'grey',color:'white',minHeight:'50px'}}>
                    <h5 className='txt1'>Create New investor</h5>
                </Col>
                {/* right column */}
                <Col xs={4} sm={4} md={4} lg={8} xl={8} style={{backgroundColor:'grey',color:'white',minHeight:'50px'}}></Col>
            </Row>

            
            {/* second row  */}
            <Row>
                <Col xs={4} sm={4} md={4} lg={8} xl={8}></Col>
                <Col xs={16} sm={16} md={16} lg={8} xl={8}>
                    <Row>
                        <Col span={8}>
                            <Row style={{marginTop:'20px'}}>
                                <Col span={2}><Icon type="user-add" style={{float:'left', fontSize:'25px',padding:'5px'}}/></Col>
                                <Col span={18}><h5 className='txt2' style={{float:'left',marginLeft:'5px'}}>Create New Investor/s</h5></Col>
                            </Row>
                        </Col>
                        <Col span={16}></Col>
                    </Row>
                </Col>
                <Col xs={4} sm={4} md={4} lg={8} xl={8}></Col>
            </Row>
            {/* third row input form inside*/}
            <Row style={{maxWidth:'1100px',margin:'auto'}}>
                <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    {/* wstaw tutaj dwa obiekty adviser i spouse */}
                    <div style={{width:'95%',minHeight:'50px'}}>
                        <Row>
                            <Col span={24}>
                                <div className='div1'>
                                    <div className='div2'><Icon type="user" className='iconLabel1'/><p className='txt4'>Adviser</p></div>
                                    
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className='div1'>
                                    <div className='div2'><Icon type="user" className='iconLabel1'/><p className='txt4'>Spouse/partner</p></div>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Col>
                <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                    {/* wstaw tutaj Investor  + input fields */}
                    <div style={{width:'95%',minHeight:'50px',marginTop:'50px'}}>
                        <h5 className='txt3'>Investor</h5>
                        <Divider/>
                        {/* tutaj dodaj input field cala forma */}
                        {/* person detail */}
                        <div className='div3'>
                            <div className='div2'><Icon type="user" className='iconLabel1'/><p className='txt4'>Person Details</p></div>
                            <Row style={{marginTop:'5%'}}>
                                <Col span={6}><p>Title</p></Col>
                                <Col span={12}>
                                    <select style={{width:'100%'}}>
                                        {this.props.advisors.map((advisor,index)=>(
                                            <option key={index} value={advisor.advisor}>{advisor.advisor}</option>
                                            // <option value='Jim'>Jim</option>
                                            // <option value='Anna'>Anna</option>

                                        ))}
                                        
                                    </select>
                                </Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p>First Name</p></Col>
                                <Col span={12}><Form.Item><Input/></Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p>Middle Name</p></Col>
                                <Col span={12}><Form.Item><Input/></Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                        </div>
                        {/* address detail */}
                        <div className='div3'>
                            <div className='div2'><Icon type="user" className='iconLabel1'/><p className='txt4'>Adress details</p></div>
                        </div>
                        {/* service level */}
                        {/* <div className='div3'>
                            <div className='div2'><Icon type="user" className='iconLabel1'/><p className='txt4'>Service Level</p></div>
                        </div> */}
                        {/* personal detail */}
                        <div className='div3'>
                            <div className='div2'><Icon type="user" className='iconLabel1'/><p className='txt4'>Personal Details</p></div>
                        </div>
                        {/* contact detail */}
                        <div className='div3'>
                            <div className='div2'><Icon type="user" className='iconLabel1'/><p className='txt4'>Contact Numbers</p></div>
                        </div>
                        {/* email details */}
                        <div className='div3'>
                            <div className='div2'><Icon type="user" className='iconLabel1'/><p className='txt4'>Email Details</p></div>
                        </div>

                    
                    </div>
                </Col>
                <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
            </Row>
            <Row style={{marginTop:'100px',marginBottom:'100px'}}>
                <Col span={8}></Col>
                <Col span={8}>
                    <div className='divButtons'>
                        <Button type="primary" size={this.state.size} style={{backgroundColor:'green'}} htmlType="submit">
                            Create
                        </Button>
                        <Button type="danger" size={this.state.size} style={{backgroundColor:'red',color:'white'}}>
                            Cancel
                        </Button>
                    </div>
                </Col>
                <Col span={8}></Col>

            </Row>

            {/* koniec poprawnych do responsywnosci rows te ponizej wykasuj jak wykorzystasz */}
            </form>
            </div>
        )
    }
}
Page22.propTypes = {
    advisors: PropTypes.array.isRequired,
    getAdvisors: PropTypes.func.isRequired,
}
const mapStateToProps = state => {
    return{
        advisors: state.form22.advisors
    }
}
export default connect(mapStateToProps,{getAdvisors}) (Page22);
