import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  

//   const data = [ {"name": "this.props.date" , "performance":"this.props.performance"  }]

export default class C3s3LineChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

render() {
    const date = this.props.date
    console.log(date)
    console.log(this.props.performance)
     console.log(this.props.date)
     const data = [ {"name": this.props.date , "performance": this.props.performance  }]
     console.log(data)

    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"  />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="performance" fill="#8884d8" />
      </BarChart>
    );
  }
}











