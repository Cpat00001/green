import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, renderCustomAxisTick , renderCusotmerBarLable, Legend, ResponsiveContainer } from 'recharts';
import Axios from 'axios';

class BarChartTest extends Component {

    state = {

        data: []
    }

    componentDidMount(){

        Axios.get('/Data/Data2.json')
         .then(res => this.setState({data:res.data}))
    }

  render() {

    const {data} = this.state;
    console.log(data)
    return (
        <div className="container" style={{width:'100%',height:'100%'}}>
            {/* <div className="row"> */}
              <div className="col-md-12"style={{backgroundColor:'powderblue'}}>
                <h4>bar chart</h4>
              </div>
                  <div className="col-md-12" style={{backgroundColor:'rgb(208, 216, 229)'}}>
                  <div id="Parentparent" style={{maxWidth:'500px', height:'300px'  }} >
                      <div id="parent" style={{width:'100%', height:'100%' }}>
                      <ResponsiveContainer width='100%' height='100%'>
                        <BarChart width={300} height={300} data={data}>
                          <XAxis dataKey="name" />
                          <Legend />
                          <YAxis />
                          <Bar type="monotone" dataKey="price" barSize={70} fill="#7884d8" />
                          </BarChart>
                      </ResponsiveContainer>
                      </div> 
                  </div>
                 </div>
            {/* </div> */}
        </div>
    )
  }
}

export default BarChartTest;
