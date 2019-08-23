import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Row,Col,Select,Icon } from 'antd';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {insertUser,fetchUsers} from './../../actions/FormActions';
import Page20_user from './Page20_user'

//needed for ANDT select option
const { Option } = Select;

  class Page20 extends Component {
      constructor(props){
          super(props);

          this.state = {

            value1: 'Swedish',
            firstName: '',
            email:'',
            password:'',
            showPass: 'false',
            submitButton: false,
            errors:{},
            formControls:{
                testInput: {focused: false, value:'', touched: false }
            },
            
            
          }

          this.handleCitizen = this.handleCitizen.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
          this.handleInputChange = this.handleInputChange.bind(this)
          this.showPass = this.showPass.bind(this)
          this.handleFocus = this.handleFocus.bind(this)
          this.handleBlur = this.handleBlur.bind(this)
      }

      componentDidMount(){
          this.props.fetchUsers();
      }
      //this component updates DOM if there are any changes inState or Props
      componentDidUpdate(prevProps,prevState){

        if (this.state.submitButton === true) {
            // when the state is updated (button to true), 
            // a timeout is triggered to switch it back to false and change a button to Submit
            this.dowolnaNazwaFunkcji = setTimeout(() => { 
              this.setState(() => ({submitButton: false}))
            }, 1000);
          }
        }
        
      handleSubmit(event){
          
          //form validation
        const {firstName,email,password} = this.state;
        
        if (firstName === "") {
            this.setState({ errors: { name: "Name is required" } });
            return;
          }
          if (email === "") {
            this.setState({ errors: { email: "Email is required" } });
            return;
          }
          if (password === "") {
            this.setState({ errors: { password: "Password is required" } });
            return;
          }

        this.setState(state => ({submitButton:true}))  
                 console.log('submit button Clicked')
          
          const user = { nation: this.state.value1 , fname: this.state.firstName , email: this.state.email , pass: this.state.password }

          this.props.insertUser(user);
    
          event.preventDefault();
      }
     
      showPass(e){
          e.preventDefault();
          this.setState( state => ({ showPass: !state.showPass  }) )
          console.log('eye clicked')
      }

      handleCitizen(value){
        console.log(value)
        this.setState({ value1:value})
      }
      handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]:value})
      }
      // handleFocus 
      handleFocus(event){
       const touched = this.state.formControls.testInput.touched;
        
        //this.setState(state => ({touched: true}));
        // this.setState(state =>({touched: true}));
        console.log('FOCUSED')
      }

      handleBlur(){
          
            this.setState(state =>({...this.state,formControls:{...this.state.formControls,testInput:{...this.state.formControls.testInput,touched:true}}}))
             console.log('BLUR')
      }
      handleTestInput = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
    
      this.setState({
        formControls: {
            ...this.state.formControls,
            [name]: {
            ...this.state.formControls[name],
            value
          }
        }
      });
      }
    
     render() {

        const touched = this.state.formControls.testInput.touched;
        console.log('isFocused',touched )

        const submitButton = this.state.submitButton;
        let button;

    
    if(this.state.submitButton === false){
        button =  <Button type="primary" htmlType="submit" onClick={this.submitButton}> Submit</Button>
    }else{
        button = <Button style={{backgroundColor:'#391085',color:'white'}}>OK.Submitted</Button>
    }
        

        const {errors} = this.state;
        console.log(errors.name, errors.email, errors.passoword)
        const {users} = this.props;
        console.log('users',users)

         return (

            <div>
             <Row>
                <Col span={8}></Col>
                <Col span={8}>

                <div style={{width:'100%',margin:'auto',maxWidth:'800px'}}>
                <Form style={{borderRadius:'5px',backgroundColor:'rgb(150,200,250)',width:'100%'}} onSubmit={this.handleSubmit}>
                    <Row>
                        <Col span={2}></Col>
                            <Col span={20} >
                            <label style={{float:'left', fontSize:'15px',color:'white'}}>First Name:</label>
                            </Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <Col span={2}></Col>
                            <Col span={20}>
                                <Input placeholder="your first name" id="FirstName" min={3} max={25} required={true} name='firstName' 
                                onChange={this.handleInputChange} value={this.state.firstName}/>
                            </Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <label style={{float:'left', fontSize:'15px',color:'white'}}>email:</label>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <Input placeholder="email" id="email" min={3} max={25} required={true} name='email' 
                            onChange={this.handleInputChange} value={this.state.email}/>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <label style={{float:'left', fontSize:'15px',color:'white'}}>Password:</label>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            {this.state.showPass? (

                                <Input placeholder="password" id="password" min={3} max={25} required={true} name='password' type='password' onChange={this.handleInputChange}
                                value={this.state.password} 
                                prefix={<Icon type="eye" style={{ color: 'rgba(0,0,0,.25)', fontSize:'15px' }} onClick={this.showPass}/>}/>
                            ) : (

                                <Input placeholder="password" id="password" min={3} max={25} required={true} name='password' onChange={this.handleInputChange} 
                                prefix={<Icon type="eye-invisible" style={{ color: 'rgba(0,0,0,.25)', fontSize:'15px' }} onClick={this.showPass}/>}/>
                            )  
                        }
                            
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <label style={{float:'left', fontSize:'15px',color:'white'}}>Citizenship:</label>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row style={{marginBottom:'20px'}}>
                        <Col span={2}></Col>
                        <Col span={20}>
                           <Select
                                placeholder="Select a option and change input text above"
                                onChange={this.handleCitizen}
                                value={this.state.value1}
                                >
                                <Option value="British">British</Option>
                                <Option value="French">French</Option>
                                <Option value="Italian">Italian</Option>
                                <Option value="Swedish">Swedish</Option>

                            </Select>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    {/* testINPUT */}
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                        { this.state.formControls.testInput.touched? (

                                <Input id="testInput" min={3} max={25} name='testInput' 
                                onChange={this.handleTestInput} value={this.state.formControls.testInput.value} 
                                placeholder='touched....'  
                                style={{backgroundColor:'pink'}}/>
                        ):(
                                <Input id="testInput" min={3} max={25} name='testInput' 
                                onChange={this.handleTestInput} value={this.state.formControls.testInput.value} 
                                placeholder='tesInput....' onFocus={this.handleFocus} onBlur={this.handleBlur}
                                />
                        )}

                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    {/* end of testINPUT */}

                        <Row style={{marginTop:'5px'}}>
                            <Col span={8}></Col>
                            <Col span={8}><p style={{color:'red'}}>{errors.name}</p></Col>
                            <Col span={8}></Col>                    
                        </Row>
                        <Row>
                            <Col span={8}></Col>
                            <Col span={8}><p style={{color:'red'}}>{errors.email}</p></Col>
                            <Col span={8}></Col>                    
                        </Row>
                        <Row>
                            <Col span={8}></Col>
                            <Col span={8}><p style={{color:'red'}}>{errors.password}</p></Col>
                            <Col span={8}></Col>                    
                        </Row>

                    <Row>
                        <Col span={24} style={{marginBottom:'20px'}}>
                            {button}
                        </Col>
                    </Row>
                </Form>
            </div>   
                </Col>
                <Col span={8}></Col>
             </Row>
             <Row style={{marginTop:'50px'}}>
                 <Col span={8}></Col>
                 <Col span={8}>
                     {users.map((user,index) =>(
                          <Page20_user name={user.fname} email={user.email} nation={user.nation}  user={user} key={index}  />
                     ))}
                 </Col>
                 <Col span={8}></Col>
                 
             </Row>
        </div>

        //  {/* functional components */}
        //         {/* <Row style={{marginTop:'50px'}}>
        //             <Col span={8}></Col>
        //             <Col span={8}>
        //                 <Welcome name='Peter' />
        //                 <Details name='Tom' nationality='Canadian' dob='20-01-1980' />
        //             </Col>
        //             <Col span={8}></Col>
        //         </Row>
        //         <div>
        //             <Row style={{marginTop:'200px'}}>
        //                 <Col span={2}></Col>
        //                 <Col span={8} style={{backgroundColor:'rgb(221, 199, 235)'}}>
        //                     <Avatar author={comment.author}/>
        //                 </Col>
        //                 <Col span={14}></Col>
        //             </Row>
        //             <Row style={{marginTop:'10px'}}>
        //                 <Col span={2}></Col>
        //                 <Col span={8} style={{backgroundColor:'rgb(221, 199, 235)'}}>
        //                     <UserInfo author={comment.author}/>
        //                     <Comment text={comment.text} author={comment.author}/>
        //                 </Col>
        //                 <Col span={14}></Col>
        //             </Row>
        //         </div> */}
                
                
        //         {/* end of functional components */}
               

         )
     }
 }

Page20.propTypes = {
    insertUser: PropTypes.func.isRequired,
    users:PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    users:PropTypes.array.isRequired,
} 
const mapStateToProps = state =>{
    return{
        users: state.register.users
    }
}


 export default connect(mapStateToProps,{insertUser,fetchUsers}) (Page20);


{/* functional components */}

// function Welcome(props){
//     return <p>User: {props.name}</p>
// }
// function Details(props){
//     return <div>
//                 <h5>NickName : {props.name}</h5>
//                 <p>Nationality: {props.nationality}</p>
//                 <p><bold>DOB: {props.dob}</bold></p>
//           </div>

// }

// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy Hubwise!',
//     author: {
//       name: 'Teddy Bear',
//       avatarUrl: 'https://placekitten.com/g/64/64',
//     },
//   };

// function Comment(props){

//     let txt;

//     if(props.text === ''){

//         return txt = 'No text available'

//     }else{

//         return <div>
//         <div style={{border:'1px solid green',backgroundColor:'powderblue', borderRadius:'5px'}}>
//                     <p>text:{props.text}</p>
//                 </div>
//                 <div style={{border:'1px solid green',backgroundColor:'grey',color:'white',borderRadius:'5px'}}>
//                     <p>Date: {props.author.name}</p>
//         </div>

//     </div>

//     }

    
// }
// function Avatar(props){
//     return (
//         <img src={ props.author.avatarUrl }/>
//     )
// }
// export const UserInfo = (props) =>{
//         let name;
//         if(props.author.name === ''){
//             return ( name = 'No name User')
//         }else{
//            return <p style={{color:'blue'}}>Commented by: {props.author.name}</p>
//         }
    
// }





{/* end of functional components */}


 