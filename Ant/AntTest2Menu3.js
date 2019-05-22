import React, { Component } from 'react';
import {Row, Col, Icon, Avatar, Button, Tooltip } from 'antd'
import 'antd/dist/antd.css';
import '../css/andt.css';


 class AntTest2Menu3 extends Component {
  render() {
    return (
      <div>
        <Row className="class2dropDownMenu3">
          <Col>
            <Row>
              {/* <Col span={4} lg={8} sm={24} xs={24}><h5>Left column</h5></Col> */}
              <Col span={8} lg={8} sm={24} xs={24}>
              <ul style={{listStyleType:'none'}}>
                <li style={{marginLeft:'3%'}}><Icon type="warning" className="icon4"/><b  style={{color:'black'}}>Do you really want to Logout?</b></li>
                <li className="spanText"><span><Icon type="check" className="icon4"/></span> Yes I would like to logout.</li>
                <li className="spanText"><span><Icon type="close-circle" className="icon4"/></span> No. Continue using the App.</li>
              </ul>
              </Col>
              <Col span={8} lg={8} sm={24} xs={24}></Col>
            </Row>
          </Col>
        </Row>   
      </div>
    )
  }
}
export default AntTest2Menu3;
