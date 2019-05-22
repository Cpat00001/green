import React, { Component } from 'react';
import '../css/greenstyle.css';
import C3s1BarChart from './chart1/C3s1BarChart';
import C3s1LineChart from './chart1/C3s1LineChart';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getContacts} from '../actions/ContactActions';
import {Link} from "react-router-dom";

 class Chart3_section1 extends Component {
     
         state = {
             changeButtonColor: true,
             color: "grey",
             color1:'powderblue',
             changeButtonColor1: false,

         }
    
    componentDidMount(){
        this.props.getContacts();
    }
    
         
     changeButtonColor = () => {

        this.setState({changeButtonColor: !this.state.changeButtonColor});
        this.setState({changeButtonColor1: !this.state.changeButtonColor1}); 
    }
    changeButtonColor1 = () =>{

        this.setState({changeButtonColor1: !this.state.changeButtonColor1});
        this.setState({changeButtonColor: !this.state.changeButtonColor});

    }

    // onMouse = () => {

    //     alert('works')
    // }

  render() {
      
    const {changeButtonColor, changeButtonColor1 } = this.state;
    let button1;
    const {contacts,id} = this.props;

    return (
      <div className="container">
        <div className="row">
            <div className="col-md-6" id="c3s1id1">
                <div className="row">
                  
                    <div className="col-sm-12">
                        <span><p style={{float:'left', padding:'1%', fontWeight:'bold'}}>Account Value:</p></span>
                    </div>
                    <div className="col-sm-12">
                        
                        <h3 id="pound"><span id="pound"><h3>£</h3></span> 100</h3><h5 id="pence">.00</h5>
                    </div>
                    <div className="col-sm-12">
                        <span><p id="c3s123text">Last performance</p></span>  
                    </div>
                    <div className="col-sm-12">
                        <span><p id="c3s123textsmall">Figures from : display dynamic dates</p></span>  
                    </div>
                    
                </div>
                
                <div className="row">
                {/* data in column start value / performance / addiotnal investmenr */}
                <div className="col-sm-6">
                    <div className="col-sm-12" style={{clear:'both'}}>
                    <Link to={`../Protected/${id}`}>
                        <button>go to protected</button>
                    </Link>
                        <span><p id="c3s123textmedium">Start Value:</p></span>
                    </div>
                    <div className="col-sm-12">
                        {/* <h3 id="pound"> <span id="pound"><h3>£</h3></span>{contacts[0].contribution}</h3><h5 id="pence">.00</h5> */}
                        <h3 id="pound"> <span id="pound"><h3>£</h3></span>{this.props.user[0].contribution}</h3><h5 id="pence">.00</h5>
                    </div>
                    <div className="col-sm-12">
                        <span><p id="c3s123textmedium">Performance %</p></span>
                    </div>
                    <div className="col-sm-12" style={{clear:'both'}}>
                        <h3 id="pound"> <span id="pound"><h3>0</h3></span></h3><h5 id="pence">.00 %</h5>
                    </div>
                    <div className="col-sm-12">
                        <span><p id="c3s123textmedium">Additional Investment</p></span>
                    </div>
                    <div className="col-sm-12" style={{clear:'both'}}>
                        <h3 id="pound"> <span id="pound"><h3>£</h3></span> 100</h3><h5 id="pence">.00</h5>
                    </div>
                </div>
                {/* data in right column end value / value growth / withdrawals */}
                <div className="col-sm-6">
                    <div className="col-sm-12" style={{clear:'both'}}>
                        <span><p id="c3s123textmedium">End value: display dynamic end data</p></span>
                    </div>
                    <div className="col-sm-12">
                        <h3 id="pound"> <span id="pound"><h3>£</h3></span> 100</h3><h5 id="pence">.00</h5>
                    </div>
                    <div className="col-sm-12">
                        <span><p id="c3s123textmedium">Value growth %</p></span>
                    </div>
                    <div className="col-sm-12" style={{clear:'both'}}>
                        <h3 id="pound"> <span id="pound"><h3>0</h3></span></h3><h5 id="pence">.00 %</h5>
                    </div>
                    <div className="col-sm-12">
                        <span><p id="c3s123textmedium">Withdrawals</p></span>
                    </div>
                    <div className="col-sm-12" style={{clear:'both'}}>
                        <h3 id="pound"> <span id="pound"><h3>£</h3></span> 100</h3><h5 id="pence">.00</h5>
                    </div>
                </div>
            </div>     
            </div>
            <div className="col-md-6" id="c3s1id2">
                <div className="col-md-12">
                    {/* <div className="row"> */}
                        
                    {changeButtonColor ? (
                        <div>
                            <div className="row">
                            <div className="col-sm-12"><h5 id="c3s123text">Value(£)</h5></div>
                            <div className="col-sm-12">
                                <div className="row" style={{float:'right'}}>
                                
                                    <div style={{cursor: 'pointer', backgroundColor: this.state.color1}} onClick={this.changeButtonColor1}><i className="fas fa-chart-bar fa-2x" id="c3s1icon"></i></div>
                                    <div style={{ cursor:'pointer' , backgroundColor: this.state.color}} onClick={this.changeButtonColor} onMouseEnter={this.onMouse}><i className="fas fa-tachometer-alt fa-2x" id="c3s1icon"></i></div>
                                </div> 
                            </div>
                            </div>

                            <div className="col-md-12" style={{backgroundColor:'rgb(204, 191, 187)', height:'300px', width:'100%'}}>
                                < C3s1BarChart />
                            </div>

                        </div>

                    ) : 

                    <div>
                        <div className="row">
                        <div className="col-sm-12"><h5 id="c3s123text">Performance(%)</h5></div>
                        <div className="col-sm-12">
                            <div className="row" style={{float:'right'}}>
                            
                                <div style={{cursor: 'pointer', backgroundColor: this.state.color}} onClick={this.changeButtonColor1}><i className="fas fa-chart-bar fa-2x" id="c3s1icon"></i></div>
                                <div style={{ cursor:'pointer' , backgroundColor: this.state.color1}} onClick={this.changeButtonColor}><i className="fas fa-tachometer-alt fa-2x" id="c3s1icon"></i></div>
                            </div> 
                        </div>
                        </div>

                        <div className="col-sm-12" style={{backgroundColor:'rgb(204, 191, 187)', height:'300px', width:'100%'}}>
                            < C3s1LineChart/>
                        </div>

                    </div>

                    }

                </div>
                
            </div>
        </div>
      </div>
    )
  }
}
Chart3_section1.propTypes = {

    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    contacts: state.contact.contacts
})

export default connect(

    mapStateToProps,{getContacts}


) (Chart3_section1);

