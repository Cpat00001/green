import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Row,Col,Select,Icon } from 'antd';

 class Page20_user extends Component {
     constructor(props){
         super(props);

         this.state = {}
     }
    render() {
        console.log('users from 20user___',this.props.user)
        console.log('this.props.users.name',this.props.fname)
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div style={{backgroundColor:'rgb(227, 225, 220)', border:'1px solid grey', borderRadius:'5px',width:'100%'}}>
                            <p>Name: {this.props.name}</p>
                            <p>Email: {this.props.email}</p>
                            <p>Nationality:{this.props.nation}</p>
                            <p>Contribution:{this.props.contribution}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Page20_user;
