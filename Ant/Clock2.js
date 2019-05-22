import React, { Component } from 'react';
import Clock from 'react-clock';

 class Clock2 extends Component {
     state = {
         date: new Date(),
         secondHandWidth: 3,
         size:70,
         renderNumbers:true,
         
     }

     componentDidMount(){
         setInterval(
             ()=> this.setState({date:new Date()}),1000
         );
     }
  render() {
    return (
      <div>
        <Clock value={this.state.date}
                secondHandWidth={this.state.secondHandWidth}
                size={this.state.size}
                // renderNumbers={this.state.renderNumbers}
                
                
        />
      </div>
    )
  }
}
export default Clock2;

