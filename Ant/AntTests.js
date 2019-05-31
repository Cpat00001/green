import React, { Component } from 'react'
import {Row, Col, Icon, Avatar } from 'antd'
import 'antd/dist/antd.css';
import '../css/andt.css';
import AntTest1 from './AntTest1';
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
    const {id} = this.props.match.params;
    console.log('ID PODANAE Z AntTests',id)

    return (
      <div>
        <Row>
          {/* first menu navbar */}

          <AntTest1 />

        {/* second menu navbar */}
          
          <AntTest2 id={id}/>
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





