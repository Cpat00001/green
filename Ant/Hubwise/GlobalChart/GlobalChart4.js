import React, { PureComponent } from 'react';
import {
BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,
} from 'recharts';
import axios from 'axios';

 class GlobalChart4 extends PureComponent {

  state = {

    data: []
  }
  
  componentDidMount(){
  
    axios.get('/Data/GlobalChart4Products.json')
    .then(res => this.setState({data: res.data}))
  
  }

render() {

  const{data} = this.state;
  console.log(data)
    return (
      <div className="col-sm-12">
          <div id="ParentParent" style={{maxWidth:'500px',height:'400px'}}>
            <div id="parent" style={{width:'100%',height:'300px'}}>
                <ResponsiveContainer width='100%' height='100%'>  
                  <BarChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                      top: 20, right: 30, left: 20, bottom: 5,
                      }}
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="GIA" fill="#8884d8" />
                      <Bar dataKey="ISA" fill="#82ca9d" />
                      <Bar dataKey="SIP" fill="#9147c6" />
                      <Bar dataKey="Other" fill="#666468" />
                  </BarChart>
                </ResponsiveContainer>
            </div>
          </div>
      </div>
      
    );
}
}
export default GlobalChart4;




