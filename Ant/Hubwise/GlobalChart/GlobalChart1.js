import React, { PureComponent } from 'react';
import {
BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,
} from 'recharts';
import axios from 'axios';

 class GlobalChart1 extends PureComponent {

  state = {

    data: []
  }
  
  componentDidMount(){
  
    axios.get('/Data/GlobalChart1Data.json')
    .then(res => this.setState({data: res.data}))
  
  }

render() {

  const{data} = this.state;
  console.log(data)
    return (
      <div className="col-sm-12">
          <div id="ParentParent" style={{maxWidth:'500px',height:'447px'}}>
            <div id="parent" style={{width:'100%',height:'100%'}}>
                <ResponsiveContainer width='100%' height='90%'>  
                  <BarChart
                      width={500}
                      height={400}
                      data={data}
                      margin={{
                      top: 20, right: 30, left: 20, bottom: 5,
                      }}
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend verticalAlign='top' style={{marginTop:"40px"}}/>
                      <Bar dataKey="totalFees" stackId="a" fill="#8884d8" />
                      <Bar dataKey="totalMarketValue" stackId="a" fill="#82ca9d" />
                      
                  </BarChart>
                </ResponsiveContainer>
            </div>
          </div>
      </div>



    );
}
}
export default GlobalChart1;




