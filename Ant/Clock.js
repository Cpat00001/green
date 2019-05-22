import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../css/andt.css';


 class Clock extends Component {
     constructor(props){
         super(props);
         this.state = {
             time: new Date().toLocaleTimeString(),
            date: new Date().toDateString()
         };
     }

     componentDidMount(){
         this.intervalID = setInterval(
             () => this.tick(),1000
         )   
     }
 
     tick(){
         this.setState({ 
             time: new Date().toLocaleTimeString(),
             date: new Date().toDateString()
         })
     }
    
  render() {
    return (
      <div className="clock">
        <p className="clock"><span>{this.state.time}</span><br/></p>
        <p><span>{this.state.date}</span></p>
      </div>
    )
  }
}
export default Clock;



// working code with a clock

// import React, { Component } from 'react';

//  class Clock extends Component {
//      constructor(props){
//          super(props);
//          this.state = {
//              time: new Date().toLocaleTimeString()
//          };
//      }

//      componentDidMount(){
//          this.intervalID = setInterval(
//              () => this.tick(),1000
//          )
//      }
//      tick(){
//          this.setState({ 
//              time: new Date().toLocaleTimeString()
//          })
//      }
//   render() {
//     return (
//       <div>
//         <h5>clock:{this.state.time}</h5>
//       </div>
//     )
//   }
// }
// export default Clock;

// end of working cod with a clock





