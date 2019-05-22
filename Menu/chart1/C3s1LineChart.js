import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
  } from 'recharts';
  import axios from 'axios';

 class C3s1LineChart extends Component {

    state = { data:[] };

    componentDidMount(){

        axios.get('/Data/DataC3s1BC.json')
            .then(res => this.setState({data: res.data}))
    }

  render() {

    const {data} = this.state;
    console.log(data)

    return (
      <div style={{width:'100%'}}>


      <div id="outer" style={{maxWidth:'400px',height:'300px'}}>
          <div id="inner" style={{width:'100%', height:'100%'}}>
              <ResponsiveContainer width="100%" height="100%">     
              <LineChart
              width={400}
              height={300}
              data={data}
              margin={{
              top: 5, right: 30, left: 20, bottom: 5,
              }}>
        
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis dataKey="GIA" dataKey="ISA"/>
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="GIA" stroke="rgb(128, 191, 52)" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="ISA" stroke="rgb(235, 156, 43)" />
            </LineChart>
          </ResponsiveContainer>  

          </div>
        </div>
      </div>
    )
  }
}

export default C3s1LineChart;




