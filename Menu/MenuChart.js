import React, { Component } from 'react';
import chart from '../css/fin_chart.png';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from 'recharts';
import Header1 from '../Header1';
import Example from './chart1/PieChart1';
import BarChart from './chart1/BarChartTest';
import '../css/greenstyle.css';
import axios from 'axios';

 class MenuChart extends Component {

  state = {

  data: []

  }

  componentDidMount(){

    axios.get('/Data/Data2.json')
    .then(res => this.setState({data: res.data}))

  }

  render() {
    
        const data = this.state.data;
        console.log(typeof(data))


    return (
      <div>
        <div style={{width:'100%'}}>
        <div className="container" style={{backgroundColor:'powderblue', height:'50px'}}>
          <h4>top header </h4>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h5>MenuChart</h5>
                    <img src={chart} alt="Chart" id='imgchart' style={{width:'100%', maxWidth:'500px'}} />                
                </div>
                <div className="col-sm-6" style={{width:'100%'}}>
                    <h5>short chart title</h5>
                <div id="container" style={{maxWidth:'400px', height:'300px'}}>
                <div id="quContainer"style={{width:'100%',height:'100%'}}>
                    <ResponsiveContainer height='100%' width="100%">
                        <LineChart width={400} height={300} data={data} margin={{bottom:20}}>
                            <Line type="monotone" dataKey="price" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                          </LineChart>
                        </ResponsiveContainer> 
                    </div>
                </div>
                


                    {/* <ResponsiveContainer height='300px' width="100%">
                    <LineChart width={400} height={300} data={data} margin={{bottom:20}}>
                        
                        <Line type="monotone" dataKey="price" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                      </LineChart>
                    </ResponsiveContainer> 
                       */}
                  
                  
                </div>
                <div className="container" style={{backgroundColor:'powderblue',marginBottom:'10px'}}>
                      <h5>further charts</h5>
                </div>
                <div className="col-sm-6">
                 <div style={{backgroundColor:'powderblue'}}>
                  <h4>section with circle charts</h4>
                 </div>
                  
                    < Example />
                </div>
                <div className="col-sm-6">
                    <BarChart />
                </div>
          </div>
        </div>
      </div>
      </div>

    )
  }
}

export default MenuChart;


