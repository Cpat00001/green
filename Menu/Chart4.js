import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
  AreaChart, Area,ResponsiveContainer
} from 'recharts';
import greenstyle from '../css/greenstyle.css';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nskpgcrz/';

  render() {
    return (
      <div>
          <div className="container" style={{maxWidth:'800px'}}>
                <div className="row">

                      {/* <div> */}

                      <div>    
                              <div id="outer" style={{minWidth:'200px',maxWidth:'400px',height:'200px',marginTop:'30px'}}>
                                  
                                {/* <div id="inner" style={{width:'100%', height:'100%', marginTop:'20px'}}> */}
                                    <p>some content </p>
                                    <ResponsiveContainer width="100%" height="100%">
                                    
                                      <LineChart
                                      width={250}
                                      height={100}
                                      data={data}
                                      syncId="anyId"
                                      margin={{
                                        top: 10, right: 30, left: 0, bottom: 0,
                                      }}
                                    >
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="name" />
                                      <YAxis />
                                      <Tooltip />
                                      <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                    </LineChart>
                                </ResponsiveContainer>
                              {/* </div> */}
                            </div>  
                     </div>
                          

                    <div>
                              <div id="outer" style={{minWidth:'200px',maxWidth:'400px',height:'200px',marginTop:'30px'}}>
                                {/* <div id="inner" style={{width:'100%', height:'100%', marginTop:'20px'}}> */}
                                  <p>some content </p>
                                  <ResponsiveContainer width="100%" height="100%">
                                  <LineChart
                                    width={250}
                                    height={100}
                                    data={data}
                                    syncId="anyId"
                                    margin={{
                                      top: 10, right: 30, left: 0, bottom: 0,
                                    }}
                                  >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                                    {/* <Brush /> */}
                                  </LineChart>
                                </ResponsiveContainer>
                              {/* </div> */}
                            </div>
                    </div>
                      
               
                    <div>
                            
                            <div id="outer" style={{minWidth:'200px',maxWidth:'400px', height:'200px', marginTop:'30px'}}>
                                {/* <div id="inner" style={{width:'100%', height:'100%', marginTop:'20px'}}> */}
                                <p>some content </p>
                                  <ResponsiveContainer width="100%" height="100%">
                        
                                      <AreaChart
                                        width={250}
                                        height={100}
                                        data={data}
                                        syncId="anyId"
                                        margin={{
                                          top: 10, right: 30, left: 0, bottom: 0,
                                        }}
                                      >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                                      </AreaChart>
                                  </ResponsiveContainer>
                              {/* </div> */}
                          </div>
                    </div>
 
                {/* </div> */}

              </div>

          </div>
      </div>
    );
  }
}




// import React, { PureComponent } from 'react';
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
//   AreaChart, Area,
// } from 'recharts';

// const data = [
//   {
//     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nskpgcrz/';

//   render() {
//     return (
//       <div>
//           <div className="container">
//                 <div className="row">
//                     <h4>Some more data</h4>
//                     <LineChart
//                       width={200}
//                       height={100}
//                       data={data}
//                       syncId="anyId"
//                       margin={{
//                         top: 10, right: 30, left: 0, bottom: 0,
//                       }}
//                     >
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip />
//                       <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
//                     </LineChart>
//                     <p>Maybe some other content</p>
//                     <LineChart
//                       width={200}
//                       height={100}
//                       data={data}
//                       syncId="anyId"
//                       margin={{
//                         top: 10, right: 30, left: 0, bottom: 0,
//                       }}
//                     >
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip />
//                       <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
//                       <Brush />
//                     </LineChart>
//                     <AreaChart
//                       width={200}
//                       height={100}
//                       data={data}
//                       syncId="anyId"
//                       margin={{
//                         top: 10, right: 30, left: 0, bottom: 0,
//                       }}
//                     >
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip />
//                       <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
//                     </AreaChart>
//                 </div>
//           </div>
        
//       </div>
//     );
//   }
// }
