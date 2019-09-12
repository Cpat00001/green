import React, { Component } from 'react';
import AntTest1 from '../../Ant/AntTest1';
import AntTest2 from '../../Ant/AntTest2';
import '../../css/Page22_style.css'
import { Row, Col, Icon, Divider, Button, Form, Input, Select, DatePicker,Checkbox } from 'antd';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAdvisors,getCountry,getNation,getTax,getTitle,user22form} from '../../actions/Form22Actions';
import moment from 'moment';

const { Option } = Select;

 class Page22 extends Component {
     constructor(props){
         super(props);
         this.state={
             size: 'large',
             gender:['-','Male','Female','Other'],
             maritalStatus:['-','Single','Married','Civil partnership','Divorced','Widowed'],
             adviser:'',
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
             spouse:false,
             submitButton: false,
             label: false
    

         }
         this.handleChange = this.handleChange.bind(this);
         this.handleChangeDate = this.handleChangeDate.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this)
     }
     
     componentDidMount(){
         var test = this.props.getAdvisors();
         this.props.getCountry();
         this.props.getNation();
         this.props.getTax();
         this.props.getTitle();

     }

     componentWillUnmount(){
         //destroy all http requests
        // test.abort();
        //abort(test)
        
        //this.props.getAdvisors.abort();
        //  this.props.getCountry.abort();
        //  this.props.getNation.abort();
        //  this.props.getTax.abort();
        //  this.props.getTitle.abort();

     }
     handleSubmit(event){
        event.preventDefault();
        console.log(this.state)
        const {adviser,
        title,
        fName,
        mName,
        sName,
        address1,
        address2,
        town,
        region,
        country,
        date,
        nationality,
        tax,
        gen,
        nin,
        status,
        contactPhone,
        daytimePhone,
        mobilePhone,
        email,
        natification,
        spouse } = this.state;

        const user22 = { adviser,
            title,
            fName,
            mName,
            sName,
            address1,
            address2,
            town,
            region,
            country,
            date,
            nationality,
            tax,
            gen,
            nin,
            status,
            contactPhone,
            daytimePhone,
            mobilePhone,
            email,
            natification,
            spouse }
            //function which submits a user data to reduxState.
            this.props.user22form(user22)
            this.props.history.push('/')
        
        //additional email validation
        // this.checkEmail();

        // function checkEmail(email){
        //     const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return regex.test(email);
        // }

        //check if not empty
        // if(fName === ''){
        //     this.setState({errors:{name:'Name is required'}})
        //     return;
        // }
        // if(sName === ''){
        //     this.setState({errors:{name:'Surname is required'}})
        //     return;
        // }
        // if(email ===''){
        //     this.setState({errors:{email:'Email is required'}})
        //     return;
        // }
         console.log('SUBMIT CLICKED && errors')
     }
     
     handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const checked = event.target.checked
        this.setState({ [name]:value})  
     }
     handleChangeDate(date,dateString){
        this.setState({ date: date })
     }
    handleBlur = (event) =>{
        console.log(event.target)
        //console.log('this is',this)
         
         if(isNaN(event.target.value)){
            this.setState({label:true})
            setTimeout(()=>{this.setState({label:false})},2000)
        }
     }
     //handle cancel button
    //  if button clicked then clear all input fields - can be done componentWillUnmount - and redirect to previous page
    handleCancelClick = () =>{
        
        this.props.history.push('/')
        console.log('CANCEL CLICKED')
    }
     
    render() {
        //display error label
        let label;
        if(this.state.label === true){
            label = <label htmlFor="error" style={{color:'red'}}>Sorry only numbers allowed</label>
        }

        // console.log('rzuc advisors',this.props.advisors)
        // console.log(this.props.country)
        // console.log(this.props.nation)
        // console.log(this.props.tax)
        //console.log(this.props)
        const {fName,sName,address1,town,country,date,tax,gen,nin,email} = this.state;
        //make submit button available if => fName,sName,email are fulfilled
        let button;
        if(fName !=='' && sName !== '' && address1 !== '' && town !== '' && country !== '' && date !== '' && tax !=='' && gen !== '' && nin !=='' && email !== ''){
            button = <Button size={this.state.size} style={{backgroundColor:'green',color:'white'}} htmlType="submit">Register</Button> 
        }else{
            button = <Button size={this.state.size} style={{backgroundColor:'grey',color:'white'}}>Disable</Button>
        }
        return (
            
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
                                <Row style={{marginTop:'5%'}}>
                                    <Col span={8}><p className='txt5'>Select Adviser</p></Col>
                                        <Col span={12}>
                                            <select className='dropdownList22'  name='adviser' value={this.state.adviser} onChange={this.handleChange} >
                                                {this.props.advisors.map((advisor,index)=>(
                                                    <option key={index} value={advisor.advisor}>{advisor.advisor}</option>
                                                ))}
                                                
                                            </select>
                                        </Col>
                                    <Col span={4}></Col>
                            </Row>
                                    
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className='div1'>
                                    <div className='div2'><Icon type="user" className='iconLabel1'/><p className='txt4'>Spouse/partner</p></div>
                                    <Row style={{marginTop:'5%'}}>
                                        <Col span={8}>Add spouse</Col>
                                        <Col span={8}>
                                        <Checkbox style={{float:'left'}} name='spouse' value={this.state.spouse} type="checkbox" onChange={this.handleChange}/>
                                        </Col>
                                        <Col span={8}></Col>                                        
                                    </Row>
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
                                    <select className='dropdownList22Req' name='title' value={this.state.title} onChange={this.handleChange} >
                                        {this.props.title.map((title,index)=>(
                                            <option key={index} value={title.value}>{title.value}</option>
                                        ))}
                                        
                                    </select>
                                </Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>First Name</p></Col>
                                <Col span={12}><Input name='fName' value={this.state.fName} onChange={this.handleChange} placeholder='required field' className='input2'/></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Middle Name</p></Col>
                                <Col span={12}><Input name='mName' value={this.state.mName} onChange={this.handleChange} className='input1'/></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Surname</p></Col>
                                <Col span={12}><Input name='sName' value={this.state.sName} onChange={this.handleChange} placeholder='required field...' className='input2'/></Col>
                                <Col span={6}></Col>
                            </Row>
                        </div>
                        {/* address detail */}
                        <div className='div3'>
                            <div className='div2'><Icon type="pushpin" className='iconLabel1'/><p className='txt4'>Adress details</p></div>
                            <Row style={{marginTop:'5%'}}>
                                <Col span={6}><p className='txt5'>Address 1</p></Col>
                                <Col span={12}><Input name='address1'value={this.state.address1} onChange={this.handleChange} className='input2' placeholder='required field...'/></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Address 2</p></Col>
                                <Col span={12}><Input name='address2' value={this.state.address2} onChange={this.handleChange} className='input1' placeholder='required field...'/></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Town/City</p></Col>
                                <Col span={12}><Input name='town' value={this.state.town} onChange={this.handleChange} className='input2'placeholder='required field...'/></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>County/Region</p></Col>
                                <Col span={12}><Input name='region' value={this.state.region} onChange={this.handleChange} className='input1'/></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Country</p></Col>
                                <Col span={12}>
                                <select style={{width:'100%'}} name='country' value={this.state.country} onChange={this.handleChange} className='dropdownList22Req'>
                                    {this.props.country.map((c,index)=>(
                                        <option key={index} value={c.Title}>{c.Title}</option>
                                    ))}
                                    </select>
                                    </Col>
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
                                <Col span={12}><DatePicker style={{width:'100%'}} name='date' value={this.state.date} onChange={this.handleChangeDate} className='input2'/></Col>  
                                {/* <Col span={12}><DatePicker style={{width:'100%'}} name='date' value={this.state.date} onChange={this.handleChange}/></Col>   */}

                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Nationality</p></Col>
                                <Col span={12}>
                                    <select className='dropdownList22' name='nationality' value={this.state.nationality} onChange={this.handleChange} className='dropdownList22Req'>
                                        {this.props.nation.map((nat,index)=>(
                                            <option key={index} value={nat.nationalityTitle}>{nat.nationalityTitle}</option>
                                        ))}
                                    </select>
                                    </Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Country of Taxation</p></Col>
                                <Col span={12}>
                                    <select className='dropdownList22' name='tax' value={this.state.tax} onChange={this.handleChange} className='dropdownList22Req'>
                                        {this.props.tax.map((tax,index)=>(
                                            <option key={index} value={tax.country}>{tax.country}</option>
                                        ))}
                                    </select>
                                    </Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Gender</p></Col>
                                {/* mozliwe ze w DatePicker tez bede musial dodac onChange + name to handle multiple inputChanges */}
                                <Col span={12}>
                                    <select name='gen' value={this.state.gen} onChange={this.handleChange} className='dropdownList22Req'>
                                        {this.state.gender.map((gen,index)=>(
                                            <option key={index}>{gen}</option>
                                         ))
                                        }
                                    </select>
                                    </Col>  
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>NIN Number</p></Col>
                                <Col span={12}><Input name='nin' value={this.state.nin} onChange={this.handleChange} className='input2'/></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Marital Status</p></Col>
                                <Col span={12}>
                                    <select name='status' value={this.state.status} onChange={this.handleChange} className='dropdownList22'>
                                        {this.state.maritalStatus.map((marital,index)=>(
                                            <option key={index}>{marital}</option>
                                        ))}
                                    </select>
                                    </Col>
                                <Col span={6}></Col>
                            </Row>
                        </div>
                        {/* contact detail */}
                        <div className='div3'>
                            <div className='div2'><Icon type="phone" className='iconLabel1'/><p className='txt4'>Contact Numbers</p></div>
                            {/* <Row>
                                <Col span={6}></Col>
                                <Col span={6}>{label}</Col>
                                <Col span={6}></Col>                                
                            </Row> */}
                            <Row>
                                <Col span={6}></Col>
                                <Col span={12}>
                                {label}
                                </Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row style={{marginTop:'5%'}}>
                                <Col span={6}><p className='txt5'>Contact Phone</p></Col>
                                <Col span={12}><Input name='contactPhone' type='text' value={this.state.contactPhone} onChange={this.handleChange} onBlur={this.handleBlur} className='input1'/></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Daytime Phone</p></Col>
                                <Col span={12}><Input name='daytimePhone' type='text' value={this.state.daytimePhone}onChange={this.handleChange} className='input1' onBlur={this.handleBlur}/></Col>
                                <Col span={6}></Col>
                            </Row>
                            <Row>
                                <Col span={6}><p className='txt5'>Mobile Phone</p></Col>
                                <Col span={12}><Input name='mobilePhone' type='text' value={this.state.mobilePhone}onChange={this.handleChange} className='input1' onBlur={this.handleBlur}/></Col>
                                <Col span={6}></Col>
                            </Row>
                        </div>
                        {/* email details */}
                        <div className='div3'>
                            <div className='div2'><Icon type="mail" className='iconLabel1'/><p className='txt4'>Email Details</p></div>
                        <Row style={{marginTop:'5%'}}>
                            <Col span={6}><p className='txt5'>Email</p></Col>
                            <Col span={12}><Input name='email' type='email' value={this.state.email}onChange={this.handleChange} placeholder='input required...' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                            className='input2'/></Col>
                            <Col span={6}></Col>
                        </Row>
                        <Row>
                            <Col span={6}><p className='txt5'>Notification</p></Col>
                            {/* mozliwe ze bede musial dac onChange na tym checkboxie */}
                            <Col span={12}><Checkbox style={{float:'left'}} name='natification' value={this.state.natification} type="checkbox" onChange={this.handleChange} className='input1'/></Col> 
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
                        
                        {button}

                        <Button type="danger" size={this.state.size} style={{backgroundColor:'red',color:'white'}} onClick={this.handleCancelClick}>
                            Cancel
                        </Button>
                       
                    </div>
                </Col>
                <Col xs={4} sm={4} md={9} xl={9}></Col>
            </Row>
            </form>
            
        )
    }
}
Page22.propTypes = {
    advisors: PropTypes.array.isRequired,
    getAdvisors: PropTypes.func.isRequired,
    getCountry:PropTypes.func.isRequired,
    getNation: PropTypes.func.isRequired,
    getTax: PropTypes.func.isRequired,
    getTitle: PropTypes.func.isRequired,
    user22form: PropTypes.func.isRequired
    
}
const mapStateToProps = state => {
    return{
        advisors: state.form22.advisors,
        country: state.form22.country,
        nation: state.form22.nation,
        tax: state.form22.tax,
        title: state.form22.title
    }
}
export default connect(mapStateToProps,{getAdvisors,getCountry,getNation,getTax,getTitle,user22form})(Page22);


