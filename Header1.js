import React, { Component } from 'react';
import './css/greenstyle.css';
import {Link} from 'react-router-dom';


 class Header1 extends Component {

  state = {

    menuBanner: false
  
  };

  showMenu = () => {
    this.setState({menuBanner: !this.state.menuBanner});
  }
  hideMenu = () => {
    this.setState({menuBanner: false})
  }

  render() {

    const {menuBanner} = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-ligh">
         {/* <div className="row" style={{width:'100%'}}> */}
         <div className="row" style={{maxWidth:'800px', width:'100%', margin:'0 auto'}}>

         
   
             <div className="col-sm-12" style={{float:'left', textAlign:'left'}}><Link to="/" id="Link">{this.props.brand} <i className="fas fa-home fa-2x"></i></Link>
             <Link to="#" id="Link" style={{float:'right', textAlign:'right'}}>{this.props.dropdown}
             <i className="fas fa-caret-square-down fa-2x" style={{ cursor:'pointer', marginLeft:'5px', float:'right'}} onClick={this.showMenu} /></Link>
             
             {menuBanner? 
                  (
                    <div className = "col-sm-12" id="slideMenu">
                          <div className="row">
                           
                                <div className="col-sm-12" style={{backgroundColor:'rgb(168, 194, 237)',color:'white',height:'250px'}}>
                                <h5>Views and charts</h5>
                                      <div className="row">
                                      <Link to="/Menu/MenuChart/">
                                        <button type="button" className="btn btn-primary btn-lg" id="test1col1" style={{width:'200px'}} 
                                                onClick={this.hideMenu}>Chart1</button>
                                        </Link>
                                        <Link to='/Menu/Chart1'>
                                          <button type="button" className="btn btn-light btn-lg" id="test1col1" style={{width:'200px'}} onClick={this.hideMenu}>
                                          Chart2</button>
                                        </Link>
                                        {/* <Link to='/Menu/Chart3'>
                                          <button type="button" className="btn btn-success btn-lg" id="test1col1" style={{width:'200px'}} onClick={this.hideMenu}>
                                          Chart3</button>
                                        </Link>  */}
                                      </div>
                                </div>
                    
                                <div className="col-sm-12" style={{backgroundColor:'rgb(128, 169, 237)',color:'white',height:'auto'}}>
                                <h5>Views and charts</h5>
                                      <div className="row">
                                        <button type="button" className="btn btn-primary btn-lg btn-block" id="test1col1">Overview</button>
                                        <button type="button" className="btn btn-light btn-lg btn-block" id="test1col1">Documents</button>
                                        <button type="button" className="btn btn-success btn-lg btn-block" id="test1col1">My details</button>
                                      </div>
                                </div>

                                <div className="col-sm-12" style={{backgroundColor:'rgb(168, 194, 237)',color:'white',height:'auto'}}>
                                <h5>Views and charts</h5>
                                      <div className="row">
                                          <button type="button" className="btn btn-primary btn-lg btn-block" id="test1col1">Overview</button>
                                          <button type="button" className="btn btn-light btn-lg btn-block" id="test1col1">Documents</button>
                                          <button type="button" className="btn btn-success btn-lg btn-block" id="test1col1">My details</button>
                                      </div>
                                </div>
                          </div>
                    </div>
                 
                  )
                  :null

             }

             </div>
         </div>
       </nav>
        
      </div>
    )
  }
}
export default Header1;




