import React, { Component } from 'react';
import {Row, Col, Icon, Avatar, Card, Dropdown, Menu } from 'antd';
import 'antd/dist/antd.css';
import '../css/andt.css';

class AntTest4 extends Component {
  render() {
    return (
      <div>
        
            <Col span={24} className="footer">
                <Row>
                    <Col span={4} offset={4}>
                        <h5>Hubwise Security Limited</h5>
                    </Col>
                    <Col span={4} offset={6}>
                        <p>v2.10.9004</p>
                    </Col>
                </Row>
            </Col>
        
      </div>
    )
  }
}
export default AntTest4;
