import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,ResponsiveContainer,
  } from 'recharts';


 class GlobalChart3 extends Component {

    state = {

        data:[]
    }

    componentDidMount(){
        axios.get('/Data/GlobalChart3Cash.json')
        .then(res => this.setState({data: res.data}))
    }


    render() {

        const{data}= this.state;

        return (
            <div>
                <Row style={{maxWidth:'500px',height:'300px'}}>
                    <Col span={24} xs={24} sm={24} md={24} lg={24} style={{width:'100%', height:'100%'}}>
                        <ResponsiveContainer width='100%' height='100%'>
                            <LineChart width={500} height={300} data={data} 
                            margin={{top: 20, right: 30, left: 20, bottom: 5, }}>
                                                                                              
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="totalCashIn" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="totalCashOut" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
export default GlobalChart3;
