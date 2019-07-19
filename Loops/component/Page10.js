import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { NORMALSTATE, HANDLESUBMIT, HANDLEREDUCER,CLEAR} from './../../actions/types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { handleSubmit, handleReducer} from './../../actions/CalculatorActions'; 


 class Page10 extends Component {
     constructor(props){
         super(props)
         this.state = {value: 0}

         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
         this.handleReduce = this.handleReduce.bind(this)
         this.handleClear = this.handleClear.bind(this)
     }

     handleChange(event) {this.setState({value:event.target.value})} 

     handleSubmit(event){
         const x = parseInt(this.state.value);
         console.log('VALUE TO TOPUP:',x)
         this.props.handleSubmit(x);
         event.preventDefault()

     }
     handleReduce(){
        const y = parseInt(this.state.value)
        this.props.handleReducer(y)
        console.log('this.state.value',y )
     }
     handleClear(){
         this.setState(state=>({value:0}))
         this.props.handleClear()
     }

    componentDidMount(){

        this.props.normalState();
    }

    render() {

        const {result} = this.props;
        const {value} = this.props;
        console.log('wynik obliczen', value)
        
        return (
            <div>
                <h4>Page 10</h4>
                <p style={{color:'red'}}></p>
                <p>Result: {value}</p>


                {/* FORM */}
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    
                        <Input
                        style={{width:'100px'}}
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.value}
                        />
                    </Form.Item>
                    <Button input type='submit' type="primary" htmlType="submit" className="login-form-button" style={{margin:'5px'}}>
                        TOPUP
                    </Button>
                    <Button type="primary" className="login-form-button" style={{margin:'5px'}} onClick={this.handleReduce.bind(this,value)}>
                        REDUCE
                    </Button>
                    <Button type="primary" className="login-form-button" style={{margin:'5px'}} onClick={this.handleClear}>
                        CLEAR
                    </Button>
                </Form>
                

            </div>
        )
    }
}
Page10.propTypes = {
    normalState: PropTypes.func.isRequired,
    result: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleReducer: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    result: state.value.result,
    value: state.value.value
})
const mapDispatchToProps = dispatch =>({
    normalState:()=> dispatch({ type: NORMALSTATE }),
    handleSubmit: (value) => dispatch(handleSubmit(value)),
    handleReducer:(value) => dispatch(handleReducer(value)),
    handleClear:()=> dispatch({ type: CLEAR})
})


export default connect(

    mapStateToProps,
    mapDispatchToProps

) (Page10)



// import React, { Component } from 'react';
// import { Row, Col } from 'antd';
// import './../../css/Page9.css';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import { Table,Button } from 'antd';
// import {NORMALSTATE} from './../../actions/types';
// import {minusNumber} from './../../actions/CalculatorActions'; 
// import { addNumber } from './../../actions/CalculatorActions';



//  class Page10 extends Component {
//     constructor(props){
//         super(props);

//         this.state = {

//             value: '',
//             button: true
//         }
        

//         this.handleChange = this.handleChange.bind(this)
//         //this.handleClick = this.handleClick.bind(this)
//         this.addNumber = this.addNumber.bind(this)
//         this.handleClear = this.handleClear.bind(this)
        
//     }
//     handleChange(event) {
//         this.setState({value: event.target.value});
//       }

//     componentDidMount(){
//         //this.props.normalState()
//     }
    
//     addNumber(){

//         this.setState(prevState => ({button: !prevState.button}))
        
//         // const v = this.state.value
//         // console.log('wartosc z v',v)
//         // console.log('add clicked')
        
//     }
//     handleClear(){
//         this.setState({value:0})
//     }


//     render() {

//         const{value} = this.state
//         console.log(value)

       
//         return (
//             <div>
//                 <div className='calculator'>
//                     <p>Calculator</p>
//                     <Row>
//                         <Col span={8}></Col>
//                         <Col span={8} className='result'>
//                             <input type="number" 
//                                 placeholder="0"
//                                 onChange={this.handleChange}
//                                 value={this.state.value}
//                                 name="value"
//                             />  
//                         </Col>
//                         <Col span={4}></Col>
//                         <Col span={4}></Col>
//                     </Row>
//                     <Row>
//                         <Col span={8}></Col>
//                         <Col span={2}><Button onClick={this.addNumber}><h5>{this.state.button? '+': '-'}</h5></Button></Col>
//                         {/* <Col span={2}><Button onClick={this.handleClick(this,value)}><h5>+</h5></Button></Col> */}
//                         <Col span={2}><Button onClick={this.handleMinus}><h5>-</h5></Button></Col>
//                         <Col span={2}><Button onClick={this.handleEqual}><h5>=</h5></Button></Col>
//                         <Col span={2}><Button className='but1' onClick={this.handleClear}><p>Clear</p></Button></Col>
//                         <Col span={8}><p style={{color:'black'}}>{value}</p></Col>
//                     </Row>
//                 </div>
//             </div>
//         )
//     }
// }

// Page10.propTypes = {
//     addNumber: PropTypes.func.isRequired,
//     normalState: PropTypes.func.isRequired,
//     }

// const mapStateToProps = state => ({
//     value: state.value.value,
//     result: state.value.result
// })
// const mapDispatchToProps = dispatch => ({
//         normalState: () => dispatch({type: NORMALSTATE})
// })

// connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Page10)

// export default Page10;
