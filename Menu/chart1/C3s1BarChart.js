import React, { Component } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,
} from 'recharts';
import axios from 'axios';


 class C3s1BarChart extends Component {

  state = {

    data: []
  }
    //call data from json file,the same as API
    componentDidMount(){
  
      //dziala wezwanie axios
      axios.get('/Data/DataC3s1BC.json')
        .then(res => this.setState({data: res.data}))
    }


  render() {

    const {data} = this.state;
    console.log(data)
    return (
      <div>
        <div id="outer" style={{maxWidth:'400px',height:'300px'}}>
          <div id="inner" style={{width:'100%', height:'100%'}}>
              <ResponsiveContainer width="100%" height="100%" debounce={0}>
                <BarChart
                width={400}
                height={300}
                data={data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                {/* <XAxis dataKey="name" /> */}
                {/* <YAxis /> */}
                <XAxis dataKey="time" />
                <YAxis dataKey="GIA" dataKey="ISA"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="GIA" fill="rgb(128, 191, 52)" />
                <Bar dataKey="ISA" fill="rgb(235, 156, 43)" />
              </BarChart>
            </ResponsiveContainer> 
          </div>
        </div> 
        
       
      </div>
    )
  }
}

export default C3s1BarChart;











