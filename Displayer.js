import React, { Component } from 'react'
import './css/greenstyle.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts} from './actions/ContactActions';
import Investor from './Investor';
import GFormParent from './GFormParent';

class Displayer extends Component {
    


  render(){
    const {contacts} = this.props;
    return(
      <div>
         <GFormParent />
         {contacts.map((contact, index) =>(
              <Investor 
                key={index}
                id={contact.id}
                name={contact.name}
                email = {contact.email}
                city={contact.city}
                contribution={contact.contribution}
              />  
            ))} 
                    
     </div>
    )
  }
}
Displayer.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});



export default connect(
  mapStateToProps,
  { getContacts}
) (Displayer);


