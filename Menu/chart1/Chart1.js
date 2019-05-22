import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {connect} from 'react-redux';
import Chart4 from '../Chart4';
import greenstyle from '../../css/greenstyle.css';
import TableChart1 from './TableChart1';

const data = [
  {
    name: 'Jan', gold: 4000, oil: 2400, HouseIndex: 1100, amt: 2400,
  },
  {
    name: 'Feb', gold: 3000, oil: 1398, HouseIndex: 1050, amt: 2210,
  },
  {
    name: 'Mar', gold: 2000, oil: 9800, HouseIndex: 1060, amt: 2290,
  },
  {
    name: 'Apr', gold: 2780, oil: 3908, HouseIndex: 1130, amt: 2000,
  },
  {
    name: 'May', gold: 1890, oil: 4800, HouseIndex: 1150, amt: 2181,
  },
  {
    name: 'Jun', gold: 2390, oil: 3800, HouseIndex: 1155, amt: 2500,
  },
  {
    name: 'Jul', gold: 3490, oil: 4300, HouseIndex: 1160, amt: 2100,
  },
];


 class Chart1 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/g03265a4/';

  state = {

    moreCharts:false

  }

  moreData = () => {
    this.setState({moreCharts: !this.state.moreCharts});
  }

  render() {

    const {moreCharts} = this.state;

    return (
      <div className="container-fluid" style={{maxWidth:'800px'}}>
        <div className="row">
            <div className="col-md-5" id="sectionBackground">

              <div className="container-fluid" id="columnStack" >

              <div className="row">
                  <div id="column">
                    <p id="sectionHeader">Total value of all accounts</p>
                  </div>
                  <div id="column">
                    <p ><span id="currenccy">$</span><span id="dollars"> 402,083 </span><span id="pence">.14</span></p>
                  </div>
                  <div id="column">
                  <p style={{fontSize:'12px'}}>(Graphs use data from the last xxx months)</p>
                  </div>
              </div>

              <div >
                <div className="container-fliud">
                  <div className="row" id="bannerDescription">
                    <div>
                      <p style={{fontSize:'15px', fontWeight:'bold'}}>Product subscription</p>
                    </div>
                    <div>
                      <p>Some information about tax</p>
                    </div>
                    <div>
                      <p style={{fontSize:'15px', fontWeight:'bold'}}>You have spent $ xxx amount this year</p>
                      <p>You can / cannot invest more in this year</p>
                    </div>
                  </div>
                </div>
              </div>

        </div>
       </div>
            <div className="col-md-7">
            <ResponsiveContainer height='100%' width='100%'>
                <LineChart width={400} height={200} data={data} >
                    <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="oil" stroke="#02000f" activeDot={{ r: 5 }} />
                        <Line type="monotone" dataKey="gold" stroke="#e8d506" activeDot={{r: 5}}/>
                        <Line type="monotone" dataKey="HouseIndex" stroke="#28d611" activeDot={{ r: 5}}/>
                </LineChart>
            </ResponsiveContainer>
            
            </div>
        </div>
        <div className="row">
            
                <div style={{margin:'auto',width:'100%'}}>
                <button type="button" className="btn btn-light" style={{border:'1px solid blue'}} 
                onClick={this.moreData}>More data</button></div>   
        </div>
            {moreCharts ?
              ( <div>
                
                <div className="col-ms-12" id="moreCharts" > 
                <h5>this is space for more charts</h5>
                < Chart4 />
                </div>
                
                </div>)
              : null
          
            }
            <div className="col-sm-12 d-flex justify-content-center" >
                   <div className="row">
                    <div id="sectionBackground2" style={{height:'100%'}}>
                      <h5>Table with data from API</h5>
                     
                        <TableChart1 />
                       
                      </div>
                   </div>
                    
            </div>
      </div>
      
    );
  }
}

export default connect() (Chart1);




