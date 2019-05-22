import React, { Component } from 'react';
import {Row, Col, Icon, Avatar, Card, Dropdown, Menu } from 'antd';
import 'antd/dist/antd.css';
import '../css/andt.css';
import PropTypes from 'prop-types' ;
import {connect} from 'react-redux';
import {getContacts} from '../actions/ContactActions';
import { GET_CONTACTS } from '../actions/types';
import Displayer from '../Displayer';
import GlobalData from './Hubwise/GlobalData';


 class AntTest3 extends Component {

    state = {
        hubwise: true,
    }
    
    // componentDidMount() {
    //     this.props.getContacts();
    // }
     
  render() {

    let displayer;
    const {contacts} = this.props;
    const {hubwise} = this.state;
    console.log(hubwise)
    // console.log(contacts)

    const menu = (

        <Menu>
          <Menu.Item key="1" onClick={()=>this.setState ({hubwise: true})}>{contacts[0].name}</Menu.Item>
          {/* <Menu.Item key="2" onClick={()=>this.setState ({hubwise: !this.state.hubwise})}>Hubwise</Menu.Item> */}
          <Menu.Item key="2" onClick={()=>this.setState ({hubwise: false})}>Hubwise</Menu.Item>
        </Menu>
      );
    
    return (
      <div>

        
        <Row>
            <Col span={24} className="class5">
                
                <Col span={16} offset={4}>   
                <Col span={12}>
                    <h5 className="class5">Adviser Dashboard</h5>
                </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={24}>
                            <Icon type="user" className="icon"/>
                                {/* <Dropdown overlay={menu} span={12}>
                                        <span style={{backgroundColor:'#818181'}}>
                                            <a className="ant-dropdown-link" href="#" className="a">
                                            {hubwise? ( contacts[0].name ): <p>Hubwise</p> } 
                                            </a>
                                            <Icon type="down" />
                                        </span>
                                </Dropdown> */}
                                <Dropdown overlay={menu} span={12}>
                                    {hubwise? (

                                        <span style={{backgroundColor:'#818181'}}>
                                        <a className="ant-dropdown-link" href="#" className="a">
                                         {contacts[0].name } 
                                        </a>
                                        <Icon type="down" />
                                        </span>
                                    ):
                                    <span style={{backgroundColor:'#818181'}}>
                                            <a className="ant-dropdown-link" href="#" className="a">
                                            Hubwise 
                                            </a>
                                            <Icon type="down" />
                                    </span>
                                    
                                }
                                        
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Col>

        {hubwise? (
                <div>
                    <Col span={24}>
                            
                            
                            <Col span={16} offset={5}>
                                <Col sm={2} offset={2}>
                                    <Icon type="calendar" theme="filled" className="icon2" style={{color:'black', float:'right'}}/>    
                                </Col>
                                <Col sm={8}>
                                    <h5 className="class3" style={{color:'black',float:'left', paddingTop:'20px'}}>Dashboard data</h5>
                                </Col>
                            </Col>
                            </Col>
                            <Col span={24}>
            
                            <Col span={16} offset={4}>
                                    <Col span={16} offset={4}>
                                    <Card  className="at3card">
                                    
                                            <h2 style={{fontSize:'1.3em'}}>Welcome to your Platform.</h2><br/>
                                            <p><strong>There is currently no account data to display here. </strong></p><br/>
                                            <p>As accounts are created their values will start to appear on this dashboard page.</p><br/>
                                            <p> Please proceed to choose from the menu options above.</p>
                                    </Card>
                                    </Col>
                            </Col>
                            </Col>
                            <Col span={4}></Col>
                </div>
                
            
        ): 
        
        <div>
            <GlobalData />
        </div>
        
        }
        </Row>
      </div>
    )
  }
}
AntTest3.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
}
const mapStateToProps = state =>({
    contacts: state.contact.contacts
})
export default connect(
    mapStateToProps,
    {getContacts}
) (AntTest3);
