import React, { Component } from 'react'
import {Row, Col, Icon, Avatar, Button, Tooltip, Menu } from 'antd'
import 'antd/dist/antd.css';
import '../css/andt.css';
import AntTest2Menu from './AntTest2Menu';
import AntTest2Menu2 from './AntTest2Menu2';
import AntTest2Menu3 from './AntTest2Menu3';
import PropTypes from 'prop-types' ;
import {connect} from 'react-redux';
import {getContacts} from '../actions/ContactActions';


const SubMenu = Menu.SubMenu;

 class AntTest2 extends Component {

  state = {

    handleClick1: false,
    handleClick2: false,
    handleClick3: false,
    color: 'rgb(106, 52, 138)'
  }

  handleClick1 = () =>{
    this.setState(state=>({handleClick1: !state.handleClick1}))
    this.setState(state=>({color:'rgb(106, 52, 138)'}))
    this.setState(state=>({handleClick2: false}))
    this.setState(state=>({handleClick3: false}))
    //console.log('CLICKED 1ST ICON')
  }

  handleClick2 = () => {
    this.setState(state=>({handleClick2: !state.handleClick2}))
    this.setState(state=>({color:'rgb(35, 160, 108)'}))
    this.setState(state=>({handleClick1: false}))
    this.setState(state=>({handleClick3: false}))
    console.log('CLICKED 2ND ICON')
  }
  handleClick3 = () => {
    this.setState(state=>({handleClick3: !state.handleClick3}))
    this.setState(state=>({color:'rgb(226, 172, 8)'}))
    this.setState(state=>({handleClick1: false}))
    this.setState(state=>({handleClick2: false}))
    console.log('CLICKED 3RD ICON')
  }

   
  render() {

    const {handleClick1, handleClick2, handleClick3 } = this.state;
    const id = this.props.id;
    //console.log(id)
    const {contacts} = this.props;
    //console.log(contacts)
    

    return (
      <div>
        {/* <AntTest2Menu handleClick/> */}
        {this.state.handleClick1? <AntTest2Menu id={id}/>: null}
        {handleClick2? <AntTest2Menu2 />: null}
        {handleClick3? < AntTest2Menu3/> : null}
        
        <Col span={24} className="class2" style={{backgroundColor: this.state.color}}>
          <Col span={20} offset={2}>
              <Row type="flex" justify="center" >
              
                  <Col span={1} xs={24} md={1} lg={1}>
                    <Tooltip placement="bottom" title="Main Menu">
                      <Icon type="menu" className="icon" onClick={this.handleClick1} />
                    </Tooltip>
                  </Col>
                  
                  <Col span={1} xs={24} md={1} lg={1}>
                    <Tooltip placement="bottom" title="Admin Menu">
                      <Icon type="setting" theme="filled" className="icon" onClick={this.handleClick2}/>
                    </Tooltip>
                  </Col>

                  <Col span={1} xs={24} md={1} lg={1}>
                    <Tooltip placement="bottom" title="Logout Menu">
                      <Icon type="logout" className="icon" onClick={this.handleClick3}/>
                    </Tooltip>  
                  </Col>    
              </Row> 
          </Col>
        </Col>
          <Icon type="setting" theme="filled" className="icon" style={{color:'black', visibility:'hidden', fontSize:'0px'}}  onMouseOver={()=>console.log('MOUSE OVER ME ')}/>
      </div>
      
    )
  }
}
AntTest2.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}
const mapStateToProps = state =>({
  contacts: state.contact.contacts
})


export default connect( mapStateToProps,{getContacts}) (AntTest2);
