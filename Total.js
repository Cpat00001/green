import React, { Component } from 'react';
import './css/greenstyle.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProducts} from './actions/ProductActions';
import Product2 from './Product2';
import {getContacts} from './actions/ContactActions';

 class Total extends Component {

  state = {
    portValue: null,
  }
  
  render() {

    const {portfolio} = this.props;
    const {portValue} = this.state;
    let {contacts} = this.props;
    //console.log(contacts)
    // const{products} = this.props;
    const {id,name} = this.props;
    //console.log(typeof(products))
    const {email} = this.props;
    // const products0 = contacts[0].products;
    //console.log(typeof(products0))

    //check if id from url is one of the registered
    if(id){
      const {contacts} = this.props;
      console.log(contacts)
      console.log(id)
      var y = contacts.find(contact =>(contact.id === id))

      console.log("user: ", y)
    }

      // console.log(y.products)
      // console.log(typeof(y.products))
    //contribution - portValue = ile pozostalo pieniedzy
    //console.log(portValue)

    
    //console.log(this.props.contacts)
    // console.log(this.props.contacs[id])
    console.log(id)

    if(id){
      const {contacts,name} = this.props;
      var xxx = contacts.filter(contact =>(contact.id === id));
      console.log('value from XXX',typeof xxx)
    }
    //display list of user's products
    console.log('value of XXX',typeof xxx[0])

    // if(typeof xxx[0] === undefined || typeof xxx[0] !== Object){
    //   console.log('REDIRECT THIS USER')
    //   this.props.history.push('/')
    // }
  
    // const aaa = [xxx][0].push({products:portfolio})
    //const aaa = xxx[0].products.push('1234') // dodaje do array
    //const bbb = xxx[0].products.push(portfolio) // dodaje do pierwszego objectu z  array i do key: products:
    console.log("User Products: ", xxx[0].products)

    //take user from loop add value of all products he bought and this is spentAmount
    if(xxx[0].products){
      var spentAmount = xxx[0].products.reduce((spentAmount,item)=>
      spentAmount + parseFloat(item.value.toString()),0)
      console.log(spentAmount)
    }

   
    const initialAmount = xxx[0].contribution;
    console.log(initialAmount)

    const remainder = initialAmount - spentAmount;
    console.log(remainder);

    return (

      <div>
        <nav className="navbar" id="navbar2">
        <div id="tot4">
          <div id='tot5'>
          <span className="navbar-brand mb-0 h1">Owner :  <h5 style={{color:'rgb(31, 196, 94)'}}>{xxx[0].name}</h5></span>
          </div>
        
        </div>
        {/* <span className="navbar-brand mb-0 h1" >Owner :  <h5 style={{color:'rgb(31, 196, 94)'}}>{xxx[0].name}</h5></span> */}
          <span className="navbar-brand mb-0 h1" id="tot2">Spent Amount $ <h5 style={{color:'rgb(150, 44, 44)'}}>{spentAmount.toFixed(2)}</h5></span>
        </nav>
        <div className="container-fluid" id="tot3">
          <div className="row">
            <div className= "col-sm-3"></div>
            <div className="col-sm-3">
              <h5>Remainder: <span>{parseFloat(remainder).toFixed(2)}</span></h5>
            </div>
            <div className="col-sm-3">
              <h5>{xxx[0].email}</h5>
            </div>
            <div className="col-sm-3"></div>
          </div>
          
        </div>
          <div className="container-fluid" id="tot1">
          <h5>Below you can see a list of products you have chosen</h5>

            {/* map through the list of products which user bought and display it in basket */}
              {xxx[0].products.map((item, index) => (

                <Product2 
                key={index}
                name={item.name}
                value={item.value}
                />
              ))}
    
        </div>
      </div>
    )
  }
}
Total.propTypes = {
  portfolio: PropTypes.array.isRequired,
  //product: PropTypes.array.isRequired,
  contacts: PropTypes.array.isRequired,
  //getContact: PropTypes.func.isRequired,
  //products: PropTypes.array.isRequired
  
}

const mapStateToProps = state =>({
  portfolio: state.product.portfolio,
  contacts: state.contact.contacts,
  //products: state.contact.contacts[0].products,
})

export default connect(
  mapStateToProps,
  {getProducts,getContacts}
) (Total);

