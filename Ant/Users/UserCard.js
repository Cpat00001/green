import React, { Component } from 'react';
import { Row, Col, Icon, Menu, Layout } from 'antd';
import AntTest2 from '../AntTest2';
// import AntTests from '../AntTests';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;


 class UserCard extends Component {
    render() {
        return (
            <div>
                 <Layout>
                    <Header style={{color:'white'}}>
                        <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{ lineHeight: '64px', marginleft:'10px',position:'absolute' }}
                            >
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                        <Layout>
                            <Sider width={200} style={{backgroundColor:'pink'}}>
                                <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                                >
                                    <SubMenu
                                        key="sub1"
                                        title={
                                        <span>
                                            <Icon type="user" />
                                            SubMenu 1
                                        </span>
                                        }
                                    >
                                        <Menu.Item key="1">option1</Menu.Item>
                                        <Menu.Item key="2">option2</Menu.Item>
                                        <Menu.Item key="3">option3</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub2"
                                        title={<span><Icon type="border-outer" />SubMenu 2</span>}
                                    >
                                        <Menu.Item key="1">option 4</Menu.Item>
                                        <Menu.Item key="2">option 5</Menu.Item>
                                        <Menu.Item key="3">option 6</Menu.Item>
                                    </SubMenu>
                                </Menu>

                                <Row>
                                    <Icon type="down-circle" style={{color:'white'}} />
                                    <Icon type="logout" style={{color:'white'}}/>
                                </Row>
                                
                            </Sider>
                            
                            <Content style={{backgroundColor:'pink', padding:'20px', minHeight:'450px'}}>
                                {/* <Row Gutter={16} style={{minHeight:'200px', backgroundColor:'grey'}} > */}
                                <Row gutter={12}>
                                    <Col span={8} >
                                        <div style={{backgroundColor:'powderblue', height:'180px'}}>
                                             <h5>Col 1</h5>
                                        </div> 
                                    </Col>
                                    <Col span={8} >
                                        <div style={{backgroundColor:'orange',height:'180px'}}>
                                            <h5>Col 2</h5>
                                        </div>
                                    </Col>
                                    <Col span={8} >
                                        <div style={{backgroundColor:'green',height:'180px'}}>
                                            <h5>Col 3</h5>
                                        </div>
                                    </Col>
                                </Row>
                                <Row gutter={20} style={{marginTop:'20px'}}>
                                    <Col span={6} >
                                        <div className="gutter-box" style={{backgroundColor:'grey'}}>col-6</div>
                                    </Col>
                                    <Col span={6} >
                                        <div className="gutter-box" style={{backgroundColor:'grey'}}>col-6</div>
                                    </Col>
                                    <Col span={6} >
                                        <div className="gutter-box" style={{backgroundColor:'grey'}}>col-6</div>
                                    </Col>
                                    <Col span={6} >
                                        <div className="gutter-box" style={{backgroundColor:'grey'}}>col-6</div>
                                    </Col>
                                </Row>
                            </Content>

                            <Sider width={200} style={{backgroundColor:'pink'}}>
                                <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                                >
                                    <SubMenu
                                        key="sub1"
                                        title={
                                        <span>
                                            <Icon type="user" />
                                            SubMenu 1
                                        </span>
                                        }
                                    >
                                        <Menu.Item key="1">option1</Menu.Item>
                                        <Menu.Item key="2">option2</Menu.Item>
                                        <Menu.Item key="3">option3</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub2"
                                        title={<span><Icon type="border-outer" />SubMenu 2</span>}
                                    >
                                        <Menu.Item key="1">option 4</Menu.Item>
                                        <Menu.Item key="2">option 5</Menu.Item>
                                        <Menu.Item key="3">option 6</Menu.Item>
                                    </SubMenu>
                                </Menu>

                                <Row>
                                    <Icon type="down-circle" style={{color:'white'}} />
                                    <Icon type="logout" style={{color:'white'}}/>
                                </Row>
                                
                            </Sider>
                        </Layout>
                        <Footer>
                            <Row gutter={16}>
                                <Col span={12}>
                                        <div style={{backgroundColor:'grey'}}> div 1 in footer</div>
                                </Col>
                                <Col span={8}>
                                    <div style={{backgroundColor:'orange'}}> div 1 in footer</div>
                                </Col>
                                <Col span={4}>
                                    <div style={{backgroundColor:'powderblue'}}> div 1 in footer</div>
                                </Col>
                            </Row>
                        </Footer>
                </Layout>
            </div>
        )
    }
}
export default UserCard;

