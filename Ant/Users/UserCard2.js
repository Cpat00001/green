import React, { Component } from 'react';
import { Row, Col, Layout, Icon } from 'antd';
import '../../css/UserCard.css';

const { Header, Footer, Sider, Content } = Layout;

 class UserCard2 extends Component {

    
    render() {

        const {id} = this.props.match.params;

        return (
            <div>
                <Layout>
                    <Header className='header'>
                        Header
                    </Header>
                    <Content className='content'>
                        <Row gutter={4}>
                            <Col span={6}>left</Col>
                                <Col span={6} className="content1">
                                    <Row>
                                        <Col span={20} xs={20} sm={20} md={20} lg={20} xl={20}>
                                            <Row>
                                                <Col>
                                                    <Icon type="global" className="icon1" />
                                                </Col>  
                                                <Col>
                                                    <h2 className="text1">Overview</h2>
                                                </Col>  
                                            </Row>            
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20} xs={20} sm={20} md={20} lg={20} xl={20} className="cont1div1">
                                            <div>
                                                <h5>Total Market Value</h5>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20} xs={20} sm={20} md={20} lg={20} xl={20} className="cont1div2" >
                                            <div>
                                                <h5>20,000.00 GBP ISA funding available in this period.</h5>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={20} xs={20} sm={20} md={20} lg={20} xl={20} className="cont1div3">
                                        <div>
                                            <h5>10 Someplace, Test, Somewhere, TE123ST</h5>
                                        </div>

                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={6}>
                                <div className='content1' style={{backgroundColor:'rgb(170, 175, 183)'}}>col1</div>
                                </Col>
                            <Col span={6}>right</Col>
                        </Row>
                    </Content>
                    <Footer className="footer">
                        <Row>
                            <Col span={12}>
                                <h5>Hubwise Securities Limited</h5>
                            </Col>
                            <Col span={12}>
                            <p>v2.10.9034</p>
                            </Col>
                        </Row>
                    </Footer>
                </Layout>
                

            </div>
        )
    }
}
export default UserCard2;
