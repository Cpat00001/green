import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../../css/andtCharts.css';
import chart from '../../css/fin_chart.png';


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
                <Col span={10} xs={24} sm={24} md={10} lg={10} xl={10} >
                    <Row>
                        <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24} style={{backgroundColor:'powderblue'}} className="Glob2">
                            <h2>Total Assets on Platform</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} xs={24}>
                            <span><p>some text here</p></span>
                        </Col>
                        <Col span={12} xs={24}>
                            <h2>£100,437,852.67</h2>
                        </Col>   
                    </Row>
                    <Row>
                        <Col span={12} xs={24}>
                            <span><p>some text here</p></span>
                        </Col>
                        <Col span={12} xs={24}>
                            <h3>£99,577,312.47</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} xs={24}>
                            <p>some text here</p>
                        </Col>
                        <Col span={12} xs={24}>
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
                
                <Col span={14} xs={24} md={14}style={{backgroundColor:'pink'}} className="Glob3">
                    <img src={chart} alt="Chart" id='imgchart' style={{width:'100%', maxWidth:'500px'}} />
                </Col>
            </Row>


            <Row style={{marginBottom:'20px'}} gutter={16}>
                <Col span={2} xs={2} sm={2} md={2} lg={2}><Icon type="clock-circle" className="icon1"/></Col>
                <Col span={20} offset={2} xs={20} sm={20} md={20} lg={20}><h5 className="Glob1">31 May 2018 to 20 may 2019 for Hubwise</h5></Col>
            </Row>
            <Row style={{marginBottom:'100px'}}>
                <Col span={8} xs={22}style={{backgroundColor:'powderblue'}}>
                    <img src={chart} alt="Chart" id='imgchart' style={{width:'100%', maxWidth:'500px'}} />
                </Col>
                <Col span={8} xs={22}style={{backgroundColor:'pink'}}>
                    <img src={chart} alt="Chart" id='imgchart' style={{width:'100%', maxWidth:'500px'}} />
                </Col>
                <Col span={8} xs={22}style={{backgroundColor:'powderblue'}}>
                    <img src={chart} alt="Chart" id='imgchart' style={{width:'100%', maxWidth:'500px'}} />
                </Col>
            </Row>
        </Col>
        <Col span={6}></Col>   
      </div>
    )
  }
}
export default GlobalData;
