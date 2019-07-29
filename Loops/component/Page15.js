// HERE SOME EXAMPLES OF LOOPING IN RENDER AND RETURN 
//AND DISPLAYING STYLING PROPS FROM REDUCER'S STATE


import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { isThisHour } from 'date-fns';

 class Page15 extends Component {
    constructor(prop){
        super(prop)
        this.state = {

        }
    }

    abc(){
        this.props.dane.forEach(function(elem){
            console.log(elem)  
            return <p>elem.name</p>
        })
    }
    
    render() {
    console.log(this.props.dane)

    

        return (
            <div>
                <div style={{backgroundColor: this.props.backgroundColor1, height:'auto',width:'250px'}}>
                     <p>page15</p>
                     {this.props.dane.map(elem => ( <h5>{elem.name}</h5>))}
                     {/* {this.props.dane.forEach(function(elem){ const xxx = <p>elem.name</p> })} */}
                     {/* {this.props.dane.map(elem => <h5>{elem.name}</h5>)} */}
                    
                    
                 <div style={{backgroundColor: this.props.backColor , height:this.props.height, width: this.props.width, marginTop:'300px'}}>
                     <p>div 2</p>
                 </div>
         </div>
                
            </div>
        )
    }
}
Page15.propsTypes = {
        backgroundColor1: PropTypes.string.isRequired,
        backColor: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        dane:PropTypes.array.isRequired


    
    }
    
    const mapStateToProps = state => {
        return{
            backgroundColor1 : state.style.backgroundColor1,
            backColor: state.style.backColor,
            height: state.style.height,
            width:state.style.width,
            dane: state.style.name
        }
    }


export default connect(mapStateToProps) (Page15);

// ############ FUNCTIONAL COMPONENT TO DISPLAY DATA FROM STATE >> STYLING

// import React from 'react';
// import {connect} from 'react-redux';
// import PropTypes from "prop-types";


// function Page15(props) {


//     const data = props.dane;
//     console.log(data)

//     //const abc = data.map(elem => (<h5>{elem.name}</h5>))

//     function abc(){
//             data.map(elem => (<h5>{elem.name}</h5>))   
//     }


//     return (
//         <div style={{backgroundColor: props.backgroundColor1, height:'200px',width:'100px'}}>
//             {/* {data.map(elem => ( <h5>{elem.name}</h5>))} */}
//             <h5>page15</h5>
//             {/* {abc} */}
            
//         <div style={{backgroundColor: props.backColor , height:props.height, width: props.width, marginTop:'300px'}}>
//             <h5>div 2</h5>
//         </div>
//         </div>
//     )
// }
// Page15.propsTypes = {
//     backgroundColor1: PropTypes.string.isRequired

// }

// const mapStateToProps = state => {
//     return{
//         backgroundColor1 : state.style.backgroundColor1,
//         backColor: state.style.backColor,
//         height: state.style.height,
//         width:state.style.width,
//         dane: state.style.name
//     }
// }
// export default connect(mapStateToProps) (Page15);
