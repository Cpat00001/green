import React, { Component } from 'react'
import {Row, Col, Icon, Avatar, Button, Tooltip } from 'antd'
import 'antd/dist/antd.css';
import '../css/andt.css';

 class AntTest2Menu extends Component {

  // state = {

  //   handleClick1: false,
  // }

  // handleClick1 = () =>{
  //   this.setState(state=>({handleClick1: !state.handleClick1}))
  //   console.log('CLICKED 1ST ICON')
  //}

  render() {


    return (
      <div>
            
      <div className="dropdownMenu">
        <Col span={24}  className="class2">
          <Col span={18}  offset={4}>
            <Row>
            <Col span={6} xs={24} md={24} lg={6}>
              <Icon type="home" className="icon" />
              <span style={{color:'white'}}>Dashboard</span>
              <Col>
                <div style={{textAlign:'right'}}>
                  <Icon type="code-sandbox" className="icon3"/>
                </div>
                <div style={{textAlign:'left'}}>
                  <span className="spanText">My Clients Campaign</span>
                </div>
              </Col>
            </Col>
            <Col span={6} xs={24} md={1} lg={6}>
              <Icon type="usergroup-delete" className="icon"/>
              <span style={{color:'white'}}>Investors</span>
              <Col>
                <div>
                  <div style={{textAlign:'right'}}>
                    <Icon type="usergroup-delete" className="icon3"/>
                  </div>
                  <div style={{textAlign:'left'}}>
                    <span className="spanText">My Clients Campaign</span>
                  </div>
                </div>

                <div>
                  <div style={{textAlign:'right'}}>
                    <Icon type="smile" className="icon3"/>
                  </div>
                  <div style={{textAlign:'left'}}>
                    <span className="spanText">Web Access</span>
                  </div>
                </div>

                <div>
                <div style={{textAlign:'right'}}>
                  <Icon type="user-add" className="icon3"/>
                </div>
                <div style={{textAlign:'left'}}> 
                  <span className="spanText">Create Investor</span>
                </div>
                </div>

                <div>
                <div style={{textAlign:'right'}}>
                  <Icon type="code-sandbox" className="icon3"/>
                  </div>
                  <div style={{textAlign:'left'}}>
                    <span className="spanText">Investor Account</span>
                  </div>
                </div>
                
              </Col>
            </Col>
            <Col span={6} xs={24} md={24} lg={6}>
              <Icon type="copy" className="icon" />
              <span style={{color:'white'}}>Portfolio</span>
              <Col>
                <div>
                  <div style={{textAlign:'right'}}>
                    <Icon type="usergroup-delete" className="icon3"/>
                  </div>
                  <div style={{textAlign:'left'}}>
                    <span className="spanText">My Clients Campaign</span>
                  </div>
                  
                </div>
                
              </Col>
            </Col>
        </Row>
        </Col>
        </Col>
        
        
        </div> 
        
      </div>
    )
  }
}
export default AntTest2Menu;
