import React, { Component } from 'react';


 class NotFound extends Component {

    home = ()=> {
        this.props.history.push('/')
    }
    

  render() {

    const obj = this.props.match.params;
    console.log(obj)
    console.log(typeof(obj))


    if(Object.keys(obj).length === 0){
        console.log(this.props.match.params)
        console.log(typeof(this.props.match.params))
        console.log('sorry no authorised')
        setTimeout(()=>{ this.props.history.push('/')},2000)
        
   }
    
    return (
      <div>
            <h1>Sorry, page <span style={{color:'red', fontWeight:'bold'}}>not</span> found </h1>
           
            <button className="btn btn-dark" onClick={this.home} style={{marginTop:'100px'}}>Take me to homepage</button>
      </div>
    )
  }
}
export default NotFound;





