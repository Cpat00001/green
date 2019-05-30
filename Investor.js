import React, { Component } from 'react'
import {connect} from 'react-redux';
import {deleteContact} from './actions/ContactActions';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {display_initial} from './actions/DetailsActions';
import OutputContact from './edit/OutputContact';
import {Row, Col, Icon, Avatar, Button, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import './css/andt.css';


class Investor extends Component {

state= {

  showInvestorDetails: false,
  showPopUp : false
}

  onShowClick = (e) =>{
    this.setState({showInvestorDetails: !this.state.showInvestorDetails})
  }

  deleteProduct = (id) => {
    
    console.log('DELETED')
    console.log(id)
    this.props.deleteContact(id);
    console.log(this.props)

  }
  onHover = () => {
    //alert('hovered')
    // this.setState({showPopUp : !this.state.showPopUp})
    this.setState({showPopUp:false})
  }
  onHover2 = () => {
    this.setState({showPopUp:true})
  }
  onDelete1 =() =>{
    this.setState({showDeleteInfo:true})
  }
  onDelete2 = () => {
    this.setState({showDeleteInfo:false})
  }

  overTachometer = () => {
    this.setState({showTachoInfo:true})
  }
  leaveTachometer = () => {
    this.setState({showTachoInfo: false})
  }
  onHoverChart = () =>{
    this.setState({showChartInfo: true})
  }
  onHoverChart2 = () =>{
    this.setState({showChartInfo: false})
  }

  displayInitial = (id) =>{
  //console.log(this.props.id)
  const xxx = this.props.display_initial(id)
  //console.log(xxx)
   }
   onHoverAnt = () =>{
     this.setState({showAntInfo: true})
   }
   onLeaveAnt = ()=>{
     this.setState({showAntInfo:false})
   }


  render() {
      const {email,city,contribution,id,contact} = this.props;
      // console.log(this.props)
      const {showInvestorDetails, showPopUp, showDeleteInfo, showTachoInfo, showChartInfo,showAntInfo} = this.state

      const {text} = "Go to starting point"
    return (
      <div className="card text-center" id="product1">
      <div className="card-header" id="head1">
      <div style={{margin:'10px'}}>


        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h3>Investor</h3>
            </div>
            <div>
              <h4 style={{color:'powderblue'}}>Contribution: $ {contribution}</h4>
            </div>
          </div>
        </div>
        <div>
          <h5>Investor details <i className="fas fa-chevron-circle-down" style={{cursor:'pointer'}} onClick={this.onShowClick}></i></h5>
        </div>
        {/* this part of code is hide/showed on click button*/}
        {showInvestorDetails ?

        (
        <div>

        <div>
          <p>Contact : {email}</p>
          <p>City : {city}</p>
          </div>

          
          <div className="card-body">
                  <ul className="nav nav-pills card-header-pills">
                      <Link to={`Performance/${id}`}>
                      <li className="nav-item" >
                        {/* <a className="nav-link active" href="#"> */}
                        <i className="fas fa-tachometer-alt fa-2x" onMouseEnter={this.overTachometer} onMouseLeave={this.leaveTachometer}/>
                        {/* </a> */}
                      </li>
                      </Link>
                      {showTachoInfo? 
                                    (
                                      <div style={{marginLeft:'10px'}}> 
                                      <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="CreateOwnPortfolio" >
                                      Create Own Portfolio
                                       </button>   
                                       </div>
                                     ) 
                                     : null  
                    
                    }
                      <Link to={`edit/OutputContact/${id}`}>
                      <li className="nav-item">
                        {/* <a className="nav-link"> */}
                        <i className="fas fa-box-open fa-2x" onMouseLeave={this.onHover} onMouseEnter={this.onHover2} onClick={this.displayInitial.bind(this,id)}/>
                        {/* </a> */}
                      </li>
                      </Link>
                      {showPopUp ? 
                          (
                           <div> 
                           <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Click to edit" >
                              Click to edit
                            </button>   
                            </div>
                          ) 
                          : null
                      }

                            <li className="nav-item">
                              <a className="nav-link" href="#" onClick={this.deleteProduct.bind(this,id)}><i className="fas fa-book-dead fa-2x" 
                                  onMouseEnter={this.onDelete1}
                                  onMouseLeave={this.onDelete2}
                              /></a>
                            </li>                    
                      {showDeleteInfo ? 
                          (
                           <div>
                           <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Click to DELETE">
                              Click to DELETE
                            </button>   
                            </div>
                          ) 
                          : null
                      }
                      {/* <li> */}
                      <Link to={`Menu/Chart3/${id}`}>
                            <li className="nav-item">
                              {/* <a className="nav-link"> */}
                              <i className="fas fa-chart-line fa-2x"  onClick={this.displayInitial.bind(this,id)} onMouseEnter={this.onHoverChart} onMouseLeave={this.onHoverChart2}/>
                              {/* </a> */}
                            </li>
                        </Link>
                        {showChartInfo ? (

                        <div>
                        <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Click to DELETE">
                          Click to see performance
                        </button>   
                        </div>

                        ): null}
                      {/* </li> */}
                      <li>
                      <Link to={`Ant/AntTests/${id}`}>
                        {/* <a className="nav-link"> */}
                        {/* <i className="fas fa-box-open fa-2x" onMouseLeave={this.onHover} onMouseEnter={this.onHover2} onClick={this.displayInitial.bind(this,id)}/> */}
                        <i><Icon type="diff" className='icon5'onMouseLeave={this.onLeaveAnt} onMouseEnter={this.onHoverAnt} onClick={this.displayInitial.bind(this,id)}/></i>
                        {/* </a> */}
                        {showAntInfo? (<div><Tooltip placement="right" title="Go to MainMenu"><p style={{backgroundColor:'grey', color:'white', borderRadius:'2px',padding:'10px'}}>Go to MainMenu</p></Tooltip></div>): null}
                      </Link>
                      </li>
                      
                    </ul>
                </div>
          </div>
        )
          
        : null
      }

      </div>
    </div>


    </div>
    )
  }
}

Investor.propTypes = {
  //contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
  display_initial: PropTypes.func.isRequired
}

export default connect(
  null,
  {deleteContact, display_initial}
) (Investor);


