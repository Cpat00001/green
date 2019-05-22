import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ReferenceLine, ResponsiveContainer } from 'recharts';
import Axios from 'axios';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  state = {
    activeIndex: 0,
    data2: [],
    // activeIndex: null
  };
  
  componentDidMount(){

    Axios.get('/Data/DataPieChart.json')
      .then(res => this.setState({data2: res.data}))

  }
 
  onPieEnter = (data2,index) =>{
    
    this.setState({activeIndex:index})
    // alert('works')
  }

  render() {

    const {data2, popup , activeIndex} = this.state;
    console.log(data2)

    return (

     
          <div id='outerDiv' style={{ maxWidth:'500px', height:'400px'}}>
            <div id="innerDiv" style={{width:'100%', height:'100%'}}>
              <ResponsiveContainer width="100%" height="100%">
              <PieChart width={500} height={400}>
                  <Pie
                  //wewnetrzny krag. data is taken from const = data [array at top of this file]
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    
                    data={data}
                    cx={150}
                    cy={150}
                    
                    label
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    // dataKey="value"
                    onMouseEnter={this.onPieEnter}
                  />
                  

                  <Pie 
                  //zewnetrzny krag. data is taken from axios Data/DataPieChart.json
                  data={data2}
                  innerRadius={80}
                  outerRadius={85}
                    fill="#4484d8"
                    cx={150}
                    cy={150}
                    
                    startAngle={100}
                    endAngle={360}
                    paddingAngle={5}
                    label
                    dataKey="value"
                    >
                    {
                      data2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>)
                    }  
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
      

      
      
    
    );
  }
}
