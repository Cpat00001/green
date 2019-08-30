import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Row,Col,Select,Icon } from 'antd';

 class Page21 extends Component {
     constructor(props){
         super(props)

         this.state= {

            search: '',
            contacts : [
                { name: 'John' , number: "12345"},
                { name: 'Tim' , number: "5678"},
                { name: 'Ben' , number: "23567"},
                { name: 'Alice' , number: "121212"},
                { name: 'Jim' , number: "11000"},
                { name: 'Tommy' , number: "5555"},
                { name: 'Bernard' , number: "567899"},
                { name: 'Andy' , number: "12121212"},
                { name: 'Patryk' , number: "001"}                 
            ]
         }
     }

    updateSearch(event){
        this.setState({search:event.target.value.substr(0,20)});
    }


    render() {

        const filteredUsers = this.state.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        console.log(filteredUsers)

        return (
            <div>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}><h5>Filter list of people</h5></Col>
                    <Col span={8}></Col>
                </Row>
                <Row style={{marginTop:'50px'}}>
                    <Col span={8}></Col>
                    <Col span={8}><input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/></Col>
                    <Col span={8}></Col>
                </Row>
                <Row style={{marginTop:'50px'}}>
                    <Col span={8}></Col>
                    <Col span={8}>
                    {filteredUsers.map((contact,index)=>(
                        <div>
                            <p><strong>{contact.name}</strong></p>
                            <p>Number: {contact.number}</p>
                        </div>
                    ))}

                    </Col>
                    <Col span={8}></Col>
                </Row>
                
                
            </div>
        )
    }
}
export default Page21;
