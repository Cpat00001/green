import React, { Component } from 'react';
import AntTest1 from '../../Ant/AntTest1';
import AntTest2 from '../../Ant/AntTest2';
import '../../css/Page22_style.css'
import { Row, Col, Icon, Divider, Button, Form, Input, Select, DatePicker,Checkbox } from 'antd';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAdvisors,getCountry,getNation,getTax} from '../../actions/Form22Actions';
import moment from 'moment';

const { Option } = Select;

 class Page22 extends Component {
     constructor(props){
         super(props);
         this.state={
             size: 'large',
             gender:['Male','Female','Other'],
             maritalStatus:['Single','Married','Civil partnership','Divorced','Widowed'],
             title:'',
             fName:'',
             mName:'',
             sName:'',
             address1:'',
             address2:'',
             town:'',
             region:'',
             country:'',
             date:moment(),
             nationality:'',
             tax:'',
             gen:'',
             nin:'',
             status:'',
             contactPhone:'',
             daytimePhone:'',
             mobilePhone:'',
             email:'',
             natification:false,
    

         }
         this.handleChange = this.handleChange.bind(this);
         this.handleChangeDate = this.handleChangeDate.bind(this)
     }

     componentDidMount(){
         this.props.getAdvisors();
         this.props.getCountry();
         this.props.getNation();
         this.props.getTax();

     }

     componentWillUnmount(){
         this.setState({gender:"",maritalStatus:""})
         this.props.getAdvisors.abort();
         this.props.getCountry.abort();
         this.props.getNation.abort();
         this.props.getTax().abort();

     }
     handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        const checked = event.target.checked
        this.setState({ [name]:value})
        this.setState({natification: event.target.checked})
     }
     handleChangeDate(date,dateString){
        this.setState({ date: date })
     }


    render() {
        // console.log('rzuc advisors',this.props.advisors)
        // console.log(this.props.country)
        // console.log(this.props.nation)
        // console.log(this.props.tax)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <Row>
                {/* odblokuj dwa ponizej zeby wyswietlic paski MENU na stronie  */}
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
            <Row style={{maxWidth:'1100px',margin:'auto'}}>
                <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Row>
                        <Col span={8}>
                            <Row style={{marginTop:'20px'}}>
                                <Col span={2}><Icon type="user-add" style={{float:'left', fontSize:'25px',padding:'5px'}}/></Col>
                                <Col span={18}><h5 className='txt2' style={{float:'left',marginLeft:'15px'}}>Create New Investor/s</h5></Col>
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
                                <Col span={6}><p className='txt5'>Title</p></Col>
                                <Col span={12}>
                                    <select className='dropdownList22' name='title' value={this.state.title} onChange={this.handleChange} >
                                        {this.props.advisors.map((advisor,index)=>(
                                            <option key={index} value={advisor.advisor}>{advisor.advisor}</option>
                                        ))}
                                        
                                    </select>
                                </Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>First Name</p></Col>
                                <Col span={12}><Form.Item><Input name='fName' value={this.state.fName} onChange={this.handleChange}/></Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Middle Name</p></Col>
                                <Col span={12}><Form.Item><Input name='mName' value={this.state.mName} onChange={this.handleChange}/></Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Surname</p></Col>
                                <Col span={12}><Form.Item><Input name='sName' value={this.state.sName} onChange={this.handleChange}/></Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                        </div>
                        {/* address detail */}
                        <div className='div3'>
                            <div className='div2'><Icon type="pushpin" className='iconLabel1'/><p className='txt4'>Adress details</p></div>
                            <Row style={{marginTop:'5%'}}>
                                <Col span={6}><p className='txt5'>Address 1</p></Col>
                                <Col span={12}><Form.Item><Input name='address1'value={this.state.address1} onChange={this.handleChange}/></Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Address 2</p></Col>
                                <Col span={12}><Form.Item><Input name='address2' value={this.state.address2} onChange={this.handleChange}/></Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Town/City</p></Col>
                                <Col span={12}><Form.Item><Input name='town' value={this.state.town} onChange={this.handleChange}/></Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>County/Region</p></Col>
                                <Col span={12}><Form.Item><Input name='region' value={this.state.region} onChange={this.handleChange}/></Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Country</p></Col>
                                <Col span={12}><Form.Item>
                                <select style={{width:'100%'}} name='country' value={this.state.country} onChange={this.handleChange} className='dropdownList22'>
                                    {this.props.country.map((c,index)=>(
                                        <option key={index} value={c.Title}>{c.Title}</option>
                                    ))}
                                    </select>
                                    </Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                        </div>
                        {/* service level */}
                        {/* <div className='div3'>
                            <div className='div2'><Icon type="user" className='iconLabel1'/><p className='txt4'>Service Level</p></div>
                        </div> */}
                        {/* personal detail */}
                        <div className='div3'>
                            <div className='div2'><Icon type="user" className='iconLabel1'/><p className='txt4'>Personal Details</p></div>
                            <Row style={{marginTop:'5%'}}>
                                <Col span={6}><p className='txt5'>Date of Birth</p></Col>
                                {/* mozliwe ze w DatePicker tez bede musial dodac onChange + name to handle multiple inputChanges */}
                                <Col span={12}><Form.Item><DatePicker style={{width:'100%'}} name='date' value={this.state.date} onChange={this.handleChangeDate}/></Form.Item></Col>  
                                {/* <Col span={12}><Form.Item><DatePicker style={{width:'100%'}} name='date' value={this.state.date} onChange={this.handleChange}/></Form.Item></Col>   */}

                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Nationality</p></Col>
                                <Col span={12}><Form.Item>
                                    <select className='dropdownList22' name='nationality' value={this.state.nationality} onChange={this.handleChange}>
                                        {this.props.nation.map((nat,index)=>(
                                            <option key={index} value={nat.nationalityTitle}>{nat.nationalityTitle}</option>
                                        ))}
                                    </select>
                                    </Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Country of Taxation</p></Col>
                                <Col span={12}><Form.Item>
                                    <select className='dropdownList22' name='tax' value={this.state.tax} onChange={this.handleChange}>
                                        {this.props.tax.map((tax,index)=>(
                                            <option key={index} value={tax.country}>{tax.country}</option>
                                        ))}
                                    </select>
                                    </Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Gender</p></Col>
                                {/* mozliwe ze w DatePicker tez bede musial dodac onChange + name to handle multiple inputChanges */}
                                <Col span={12}><Form.Item>
                                    <select name='gen' value={this.state.gen} onChange={this.handleChange} className='dropdownList22'>
                                        {this.state.gender.map((gen,index)=>(
                                            <option key={index}>{gen}</option>
                                         ))
                                        }
                                    </select>
                                    </Form.Item></Col>  
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>NIN Number</p></Col>
                                <Col span={12}><Form.Item><Input name='nin' value={this.state.nin} onChange={this.handleChange}/></Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Marital Status</p></Col>
                                <Col span={12}><Form.Item>
                                    <select name='status' value={this.state.status} onChange={this.handleChange} className='dropdownList22'>
                                        {this.state.maritalStatus.map((marital,index)=>(
                                            <option key={index}>{marital}</option>
                                        ))}
                                    </select>
                                    </Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                        </div>
                        {/* contact detail */}
                        <div className='div3'>
                            <div className='div2'><Icon type="phone" className='iconLabel1'/><p className='txt4'>Contact Numbers</p></div>
                            <Row style={{marginTop:'5%'}}>
                                <Col span={6}><p className='txt5'>Contact Phone</p></Col>
                                <Col span={12}><Form.Item><Input name='contactPhone' value={this.state.contactPhone} onChange={this.handleChange}/></Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Daytime Phone</p></Col>
                                <Col span={12}><Form.Item><Input name='daytimePhone' value={this.state.daytimePhone}onChange={this.handleChange}/></Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Mobile Phone</p></Col>
                                <Col span={12}><Form.Item><Input name='mobilePhone' value={this.state.mobilePhone}onChange={this.handleChange}/></Form.Item></Col>
                                <Col span={6}></Col>
                            </Row>
                        </div>
                        {/* email details */}
                        <div className='div3'>
                            <div className='div2'><Icon type="mail" className='iconLabel1'/><p className='txt4'>Email Details</p></div>
                        <Row style={{marginTop:'5%'}}>
                            <Col span={6}><p className='txt5'>Email</p></Col>
                            <Col span={12}><Form.Item><Input name='email' value={this.state.email}onChange={this.handleChange}/></Form.Item></Col>
                            <Col span={6}></Col>
                        </Row>
                        <Row>
                            <Col span={6}><p className='txt5'>Notification</p></Col>
                            {/* mozliwe ze bede musial dac onChange na tym checkboxie */}
                            <Col span={12}><Form.Item><Checkbox style={{float:'left'}} name='natification' value={this.state.natification} type="checkbox" onChange={this.handleChange}/></Form.Item></Col> 
                            <Col span={6}></Col>
                        </Row>
                        </div>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
            </Row>
            <Row style={{marginTop:'100px',marginBottom:'100px'}}>
                <Col xs={10} sm={10} md={10} xl={10}></Col>
                <Col xs={10} sm={10} md={5} xl={5}>
                    <div className='divButtons'>
                        <Button type="primary" size={this.state.size} style={{backgroundColor:'green'}} htmlType="submit">
                            Create
                        </Button>
                        <Button type="danger" size={this.state.size} style={{backgroundColor:'red',color:'white'}}>
                            Cancel
                        </Button>
                    </div>
                </Col>
                <Col xs={4} sm={4} md={9} xl={9}></Col>
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
    getCountry:PropTypes.func.isRequired,
    getNation: PropTypes.func.isRequired,
    getTax: PropTypes.func.isRequired,
}
const mapStateToProps = state => {
    return{
        advisors: state.form22.advisors,
        country: state.form22.country,
        nation: state.form22.nation,
        tax: state.form22.tax
    }
}
export default connect(mapStateToProps,{getAdvisors,getCountry,getNation,getTax}) (Page22);
