import React, { Component } from 'react'
import './css/greenstyle.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addProduct} from './actions/ProductActions';
import uuid from 'uuid';
import { getContacts } from './actions/ContactActions';



 class Product extends Component {

    state={}

    addProduct = (name) => {

      const {value} = this.props;
      //create newContact
    const newProduct = {
          id: uuid(),
          name,
          value,
          date: new Date()
  }
  this.props.addProduct(newProduct)
      //console.log(name)

    }

  render() {

    const {id,name, description, value, contacts} = this.props;
    //console.log(name)
    console.log('Products 2 , contacts:', contacts[0].id )
    return (
      <div>
                  <div className="col-sm-6" id="pr3">
                          <div className="row">
                          <div id="pr5" className="col-sm-5">
                              <h4>{id}</h4>
                              <h5>{name}</h5>
                              <p>{description}</p>
                              <h5>Value: ${parseFloat(value).toFixed(2)}</h5>
                          </div>
                          <div id="pr4T" className="col-sm-5" style={{width:'90%',margin:'auto', height:'100px'}} >
                                Great choice!
                                {' '}
                                <i className="fas fa-shopping-basket fa-3x"></i>
                         </div>
                         </div>
                   </div>
        
      </div>
    )
  }
}
Product.propTypes = {
  addProduct: PropTypes.func.isRequired,
  //product: PropTypes.object.isRequired,
  getContacts: PropTypes.func.isRequired
}
const mapStateToProps = state =>({
  products: state.product.products,
  contacts: state.contact.contacts
})

export default connect(
  mapStateToProps,
  {addProduct, getContacts}
) (Product);
