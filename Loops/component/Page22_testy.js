import React, { Component } from 'react';
import {
    Row, Col,Input,Button
  } from 'antd';
  
class Page22 extends Component {
    constructor(props){
        super(props)
        this.state = {
            value1: '',
            value2: '',
            value3: ''
        }


    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
      };
      handleChange = event =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
      }

    render() {
        

        return (
               <form onSubmit={this.handleSubmit}>
                   <Row>
                       <Col span={8}></Col>
                       <Col span={8}>
                            <Input placeholder="input 1" name='value1' value={this.state.value1} onChange={this.handleChange} />
                       </Col>
                       <Col span={8}></Col>                       
                   </Row>
                   <Row>
                       <Col span={8}></Col>
                       <Col span={8}>
                            <Input placeholder="input 2" name='value2' value={this.state.value2} onChange={this.handleChange} />
                       </Col>
                       <Col span={8}></Col>                       
                   </Row>
                   <Row>
                       <Col span={8}></Col>
                       <Col span={8}>
                            <Input placeholder="input 3" name='value3' value={this.state.value3} onChange={this.handleChange} />
                       </Col>
                       <Col span={8}></Col>                       
                   </Row>
                   <Row>
                       <Col span={8}></Col>
                       <Col span={8}>
                       </Col>
                       <Col span={8}>
                       <Button type="primary" htmlType="submit">
                            Register
                       </Button>   
                        </Col>                       
                   </Row>
               </form>
        )
    }
}
export default (Page22);

// ############### prost forma tylko ANDT ###########

// import React, { Component } from 'react';
// import {
//     Form,
//     Input,
//     Tooltip,
//     Icon,
//     Cascader,
//     Select,
//     Row,
//     Col,
//     Checkbox,
//     Button,
//     AutoComplete,
//   } from 'antd';
  
// const { Option } = Select;

// class Page22 extends Component {

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.form.validateFieldsAndScroll((err, values) => {
//           if (!err) {
//             console.log('Received values of form: ', values);
//           }
//         });
//       };

//     render() {
        

//         return (
//            <Form onSubmit={this.handleSubmit}>
//                <Form.Item label='Item 1'>
//                     <Input placeholder="input placeholder" />
//                </Form.Item>
//                <Form.Item label='Item 2'>
//                     <Input placeholder="input placeholder" />
//                </Form.Item>
//                 <Form.Item >
//                     <Button type="primary">Submit</Button>
//                 </Form.Item>
//            </Form>
//         )
//     }
// }
// export default Form.create({}) (Page22);




