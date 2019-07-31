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
                <h4>Page 10 Calculator</h4>
                <p style={{color:'red'}}></p>
                <h5 style={{color:'peru'}}>Result: {value}</h5>


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
    result: PropTypes.number.isRequired,
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




