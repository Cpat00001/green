import React, { Component } from 'react';
import { Row, Col, Layout, Icon, Button, Menu } from 'antd';
import '../../css/UserCard.css';
import AntTests from '../AntTests';


const { Header, Footer, Sider, Content } = Layout;

 class UserCard2 extends Component {

    
    render() {

        const {id} = this.props.match.params;

        return (
            <div>
                {/* <AntTests/> */}
                <Layout>
                    <Header className='header'>
                        <Col xs={{span:6, offset:0}} sm={{span:6, offset:2}} md={{span:6, offset:2}} lg={{span:6, offset:2}} xl={{span:6, offset:6}}>
                            <Menu
                                // theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{ lineHeight: '25px', width:'auto', marginTop:'35px',float:'left', borderRadius:'3px'}}
                            >
                                <Menu.Item key="1" className='iconHeader'>
                                    <Icon type="global" />    
                                </Menu.Item>
                                <Menu.Item key="2" className='iconHeader'>
                                    <Icon type="user" />
                                </Menu.Item>
                                <Menu.Item key="3" className='iconHeader'>
                                    <Icon type="folder-open" />
                                </Menu.Item>
                                <Menu.Item key="4" className='iconHeader'>
                                    <Icon type="mail" />
                                </Menu.Item>
                            </Menu>        
                        </Col>
                    </Header>
                    <Content className='content'>
                        <Row gutter={4}>
                            {/* <Col span={6}>left</Col> */}
                                <Row>
                                    <Col xs={{span:22, offset:2}} sm={{span:22, offset:2}} md={{span:22, offset:2}} lg={{span:20, offset:2}}  xl={{span:6, offset:8}} >
                                        <Row>
                                            <Col span={24} xs={24} sm={24} md={24} >
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
                                            <Col xs={24} sm={24} md={24}  className="cont1div1">
                                                <Row>
                                                    <Col span={12} xs={12} sm={12} md={12}>
                                                    <h5 className='floatLeft'>Total Market Value</h5>
                                                    </Col>
                                                    <Col span={12} xs={12} sm={12} md={12}>
                                                        <h5>£ 1234.00</h5>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={12} xs={12} sm={12} md={12}>
                                                            <h5 className='floatLeft'>Total Cash</h5>
                                                    </Col>
                                                    <Col span={12} xs={12} sm={12} md={12}>
                                                            <h6>£ 123.45</h6>
                                                    </Col>
                                                </Row>
                                                <Row style={{marginTop:'50px'}}>
                                                    <Col span={24} xs={24} sm={24} md={24}>
                                                        <p >Combined values of all active accounts. Market Value uses latest closing prices.</p>
                                                    </Col>
                                                </Row>
                                                

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={24} xs={24} sm={24} md={24}  className="cont1div2" >
                                            <Col xs={2} sm={2} md={2} >
                                                <Icon type="download" style={{fontSize:'24px'}}/>
                                            </Col>
                                                    <p><b>20,000.00 GBP</b>ISA funding available in this period.</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={24} xs={24} sm={24} md={24}  className="cont1div3">
                                            <Col span={2} xs={2} sm={2} md={2} style={{clear:'both'}}>
                                                <div className="icon2UC">
                                                    <div style={{marginTop:'2px',marginLeft:'-5px'}}><span><Icon type="user" style={{fontSize:'20px',verticalAlign:'top'}}/></span></div>
                                                </div>  
                                            </Col>
                                                    <Row>
                                                        <Col span={2} className='cont1div3MarginTop'style={{clear:'both'}}>
                                                            <div><Icon type="home" style={{fontSize:'20px'}}/></div>
                                                        </Col>
                                                        <Col span={20} className='cont1div3MarginTop'>
                                                            <div><span style={{float:'left'}}><p>10 Someplace, Test, Somewhere, TE123ST</p></span></div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col span={2}>
                                                            <Icon type="phone" style={{fontSize:'20px'}}/>
                                                        </Col>
                                                        <Col span={20}>
                                                            <div><span style={{float:'left'}}><p>555-555-555</p></span></div>
                                                        </Col>
                                                    </Row> 
                                                    <Row>
                                                        <Col span={2}>
                                                            <Icon type="mobile" style={{fontSize:'20px'}}/>
                                                        </Col>
                                                        <Col span={20}>
                                                            <div><span style={{float:'left'}}><p>555-555-555</p></span></div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col span={2}>
                                                            <Icon type="mail" style={{fontSize:'20px'}}/>
                                                        </Col>
                                                        <Col span={20}>
                                                            <div><span style={{float:'left'}}><p>dynamic.email.insert.here</p></span></div>
                                                        </Col>
                                                    </Row>    
                                            </Col>
                                        </Row>
                                    </Col>
                                    {/* <Col span={6} xs={{span:22, offset:0}} sm={{span:22,offset:0}} md={{span:22,offset:0}} lg={{span:22, offset:0}} xl={{span:6, offset:0}} > */}
                                    <Col xs={{ span:24,offset:4}} sm={{ span:24,offset:4}} md={{ span:24,offset:4}} lg={{span:24,offset:0}} xl={{span:6, offset:0}} className='content1'>
                                        <Row style={{float:'left', width:'100%'}}>
                                            <Col xs={{span:10, offset:14}} sm={{span:10, offset:10}} md={{span:10, offset:10}}>
                                                <Button type="primary" icon="usergroup-delete" size='large'className="button1">View on behalf of dynamic User</Button>
                                            </Col>
                                        
                                            <Col xs={{ span:22,offset:2}} sm={{ span:22,offset:2}} md={{ span:22,offset:0}} lg={{span:20, offset:0}} xl={{span:20, offset:0}} className='content1'>
                                                <Row>
                                                    <Col xs={{offset:2}} sm={{offset:2}} md={{offset:2}}>
                                                        <Icon type="code-sandbox" className='icon1'/>
                                                    </Col>
                                                    <Col xs={{ span:15}} sm={{ span:15}} md={{ span:15}} lg={{span:15}}>
                                                        <h2 className="text1">Applications</h2>
                                                    </Col>
                                                    <Col xs={{ span:22,offset:2}} sm={{ span:22,offset:2}} md={{ span:22,offset:2}} lg={{span:22,offset:2}}>
                                                        <div className='content1' style={{backgroundColor:'rgb(170, 175, 183)'}}>col2</div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        
                                    </Col>
                                </Row>
                            {/* <Col span={6}>right</Col> */}
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
