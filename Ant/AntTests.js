import React, { Component } from 'react'
import {Row, Col, Icon, Avatar } from 'antd'
import 'antd/dist/antd.css';
import '../css/andt.css';
import AntTest2 from './AntTest2';
import AntTest3 from './AntTest3';
import AntTest4 from './AntTest4';
import Clock from './Clock';
import Clock2 from './Clock2';
import PropTypes from 'prop-types' ;
import {connect} from 'react-redux';
import {getContacts} from '../actions/ContactActions';

 class AntTests extends Component {
  render() {

    const {contacts} = this.props;
    console.log(contacts)

    return (
      <div>
        <Row>
          {/* first menu navbar */}
          <Col span={12}  className="class1">
           {/* <div >
             <img src={headerimg} alt="header"  style={{width:'100%',height:'100%'}} />
            </div> */}
            {/* <img src={require("./css/app-bg.jpg")}></img> */}
            {/* <Col span={20} offset={2}> */}
            <Col span={16} offset={4}>
            <Row>
              <Col span={2} xs={2} sm={2} md={2} lg={1} offset={2} className="logo">
                <img src={require("../css/favicon-32x32.png")} style={{height:'80%', float:'right',height:'80px',width:'100%'}}></img>
              </Col>
              <Col span={4} className="class3">
                <h5 className="class3" style={{fontSize:'30px'}}>Hubwise</h5>
                <span className="class3" style={{fontSize:'10px'}}>YOUR PLATFORM SOLUTION</span>
              </Col>
              


              <Col span={6}></Col>
              <Row>
                  <Row gutter={6}>
                  <Col span={3} offset={8} lg={3} xl={3}>
                      <Col span={24} className="class4"><Clock/></Col>
                  </Col>
                  <Col span={3}>
                    <Col span={24} className="class4"><Clock2/></Col>
                  </Col>
                  </Row>
                  <Row type="flex" justify="center" align="top" >
                    <Col span={3} offset={10} style={{ width:'auto'}}>
                        <Avatar size="small" icon="user" style={{float:'left'}}/>
                        <span className="class3" style={{float:'left'}}>{contacts[0].name}</span>
                    </Col>
                    <Col span={3} style={{ width:'auto'}}>
                      <span>
                        <Icon type="bank" theme="filled" className="icon" style={{float:'left', marginTop:'-10px'}} />
                        <span className="class3" style={{float:'left'}}>Hubwise</span>
                      </span>
                      
                    </Col>
                  </Row>
              </Row>
              <Col span={2}></Col>
            </Row>
        </Col>    
        </Col>

        {/* second menu navbar */}
        
          <AntTest2 />
          <AntTest3 />
          <AntTest4 />
      
         
        </Row>
        
      </div>
    )
  }
}

AntTests.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}
const mapStateToProps = state =>({
  contacts: state.contact.contacts
})

export default connect(
  mapStateToProps,
  {getContacts}

) (AntTests);





