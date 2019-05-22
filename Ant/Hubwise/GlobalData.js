import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../../css/andtCharts.css';
import chart from '../../css/fin_chart.png';
import GlobalChart1 from './GlobalChart/GlobalChart1';
import GlobalChart2 from './GlobalChart/GlobalChart2';
import GlobalChart3 from './GlobalChart/GlobalChart3';
import GlobalChart4 from './GlobalChart/GlobalChart4';


class GlobalData extends Component {
  render() {
    return (
      <div>
        <Col span={12} offset={6}>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={2} xs={4}>
                            <Icon type="camera" className="icon1" />
                        </Col>
                        <Col span={22} xs={20} style={{float:'left'}}>
                            <h4 className="Glob1">Hubwise - May 2019</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{marginBottom:'20px'}}>
                <Col span={10} xs={24} sm={24} md={24} lg={10} xl={10} >
                    <Row>
                        <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24} style={{backgroundColor:'powderblue'}} className="Glob2">
                            <h2>Total Assets on Platform</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} xs={24} sm={24} md={24} lg={10} xl={10}>
                            <span><p>some text here</p></span>
                        </Col>
                        <Col span={12} xs={24} sm={24} md={24} lg={10} xl={10}>
                            <h2>£100,437,852.67</h2>
                        </Col>   
                    </Row>
                    <Row>
                        <Col span={12} xs={24} sm={24} md={24} lg={10} xl={10}>
                            <span><p>some text here</p></span>
                        </Col>
                        <Col span={12} xs={24} sm={24} md={24} lg={10} xl={10}>
                            <h3>£99,577,312.47</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} xs={24} sm={24} md={24} lg={10} xl={10}>
                            <p>some text here</p>
                        </Col>
                        <Col span={12} xs={24} sm={24} md={24} lg={10} xl={10}>
                            <h4>£99,577,312.47</h4>
                        </Col> 
                    </Row>
                    <Col>
                        <Row>
                            <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24} className="Glob4">* The Market value shown above acts as a guide and was calculated on 20 May 2019.</Col>
                        </Row>
                        <Row>
                            <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24} className="Glob4">† Figures shown relate to the month of May 2019 and were calculated on 20 May 2019</Col>
                        </Row>
                        <Row>
                            <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24} className="Glob4">‡ Estimates calculated on figures up to 20 May 2019.</Col>
                        </Row>
                    </Col>

                </Col>
                
                <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14}style={{backgroundColor:'rgb(227, 230, 234)'}} className="Glob3">
                    <GlobalChart4/>
                </Col>
            </Row>


            <Row style={{marginBottom:'20px'}} gutter={16}>
                <Col span={2} xs={2} sm={2} md={2} lg={2}><Icon type="clock-circle" className="icon1"/></Col>
                <Col span={20} offset={2} xs={20} sm={20} md={20} lg={20}><h5 className="Glob1">31 May 2018 to 20 may 2019 for Hubwise</h5></Col>
            </Row>
            <Row style={{marginBottom:'100px'}} gutter={16}>
                <Col span={8} xs={24} sm={24} md={24} lg={8} xl={8} style={{backgroundColor:'rgb(227, 230, 234)'}}>
                    <GlobalChart2 />
                </Col>
                <Col span={8} xs={24} sm={24} md={24} lg={8} xl={8} style={{backgroundColor:'rgb(227, 230, 244)'}}>
                    <GlobalChart3/>
                </Col>
                <Col span={8}  xs={24} sm={24} md={24} lg={8} xl={8} style={{backgroundColor:'rgb(227, 230, 234)'}}>
                    <GlobalChart1 />
                </Col>
            </Row>
        </Col>
        <Col span={6}></Col>     
      </div>
    )
  }
}
export default GlobalData;
