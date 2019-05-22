import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, ResponsiveContainer,Tooltip
} from 'recharts';
import axios from 'axios';
import '../../css/greenstyle.css';
import { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
  fill, payload, percent, value } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

//############# active shape - proba montazu ######################

const renderActiveShape = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius-10}
        outerRadius={outerRadius+10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

// ############## end of activeShape ##########################


export default class C3s2CircleChart extends PureComponent {
  //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

    state = {

     data: [],
     onClick: false,
     activeIndex: null,
     e:{}
    
   }

    //call data from json file,the same as API
     componentDidMount(){
  
    //dziala wezwanie axios
       axios.get('/Data/DataC3s2CircleChart.json')
         .then(res => this.setState({data: res.data}))
     }

     onPieEnter = (e, index) =>{
      // let index,innerRadius,outerRadius;
       this.setState({onClick: !this.state.onClick})
       this.setState({activeIndex: index })
       this.setState({e:e})
      
        //console.log('mouse over me')
        console.log(e)
     }
     

  render() {

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    let sector;
    const {data, activeIndex, e} = this.state;
    console.log(e)
    let percent = e.percent;
    let percent2 = parseFloat(percent);
    console.log(percent2)
    let contribution = percent2.toFixed(2)
    console.log(contribution)
    let displayer = (isNaN(e.percent))? (<p></p>): (<p>{contribution} %</p>) ;
    //let displayer = (isNaN(contribution))? (<p>yes</p>): <p>no</p> ;
    console.log(displayer.props.children)


    let color = e.fill;
    let asset = e.name;
    let value = e.value

    //console.log(activeIndex)
    const {onClick } = this.state;

    //const sectors = data.map((sector) => console.log(sector.name) )
    const sectors = data.map((sector,index) => <div className="row">
                                                  
                                                  <div className="col-sm-6" id='listStyle' style={{backgroundColor: COLORS[index % COLORS.length]}} key={index}>{sector.name.slice(0,1)}</div>
                                                  <div className="col-sm-6" id='listStyle2'>{sector.name}</div>
                                              </div>  
                                              )
    console.log(data)
   
    return (
    
    <div>
      <div className="col-sm-12">
          <div className="col-sm-6" style={{float:'left'}}>

          <div style={{width:'400px',height:'300px'}}>
          <div style={{width:'400px',height:'300px'}}>
              <div style={{width:'100%', height:'100%'}}>
             <ResponsiveContainer>
             <PieChart width={800} height={400}>
              <Pie
                
                //isAnimationActive={false}

                activeShape={renderActiveShape}

                onClick={this.onPieEnter.bind(this)}
                data={data}
                activeIndex={activeIndex}
                cx={100}
                cy={100}
                innerRadius={50}
                outerRadius={80}
                //fill="#8884d8"
                paddingAngle={0.5}
                nameKey="name"
                dataKey="value"
                // to style the active index
        
                //activeShape={renderActiveShape} 
              >
                {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
              
                    </Pie>
                    <Tooltip id="tooltip"
                        wrapperStyle={{height:'50px',width:'150px'}}
                        labelStyle={{backgroundColor:'orange', color: 'yellow'}}
                    />

            <text x={105} y={100} dy={8} textAnchor="middle" fill={color}>{asset}</text>
            {/* <text x={100} y={120} dy={8} textAnchor="middle" fill={color}>{contribution}</text> */}
            <text x={110} y={120} dy={8} textAnchor="middle" fill={color}>{displayer.props.children}</text>
            </PieChart>
            </ResponsiveContainer>
          </div>  
        </div>
      </div>

      </div>
      </div>

      <div className="col-sm-6" style={{float:'right'}}>
          <h5>Please click the chart to see more info about asets</h5>
          <div className="col-sm-12">
                {onClick ? (<div className="col-sm-12" style={{backgroundColor: color, padding:'10px', width:'auto'}}>
                            <h3>Asset Name:</h3><h5>{asset}</h5>
                            <h3>Value:</h3><h5>£ {value}</h5>
                            <h3>Contribution:</h3><h5>{contribution} % of all your investment.</h5>
                            
                            </div> ) 
                    : 
                  
                  <div ><ul>{sectors}</ul></div>
                    
                    }
                </div>
          </div>

      </div>

    );
  }
}


// ###################################

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
//     fill, payload, percent, value,
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? 'start' : 'end';

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };


// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

//   state = {
//     activeIndex: 0,
//   };

//   onPieEnter = (data, index) => {
//     this.setState({
//       activeIndex: index,
//     });
//   };

//   render() {
//     return (
//       <PieChart width={400} height={400}>
//         <Pie
//           activeIndex={this.state.activeIndex}
//           activeShape={renderActiveShape}
//           data={data}
//           cx={200}
//           cy={200}
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           dataKey="value"
//           onMouseEnter={this.onPieEnter}
//         />
//       </PieChart>
//     );
//   }
// }




















