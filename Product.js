import React, { Component } from 'react'
import './css/greenstyle.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addProduct} from './actions/ProductActions';
import uuid from 'uuid';
import {getContacts} from './actions/ContactActions';
import {getProducts} from './actions/ProductActions';
import {insert_product} from './actions/ContactActions'



 class Product extends Component {

    state={
      portValue: null,
      showAlert: false,
    changeColor: false,
    backgroundColor: 'rgb(67, 123, 187)',
    backgroundColor1:'rgb(132, 132, 194)',
    backgroundColor2:'rgb(188, 90, 233)',
    backgroundColor3:'rgb(206, 65, 65)'
    }


  static getDerivedStateFromProps(props,state){

    const {portfolio} = props;

    //loop through the price of added products and sum it up
    if(portfolio){
      const total = portfolio.reduce((total,item) => 
        total + parseFloat(item.value.toString())
      ,0)
  
      return {portValue: total}
      console.log(total)
    } else {

    return null;
    }
  }

    addProduct = (name,value) => {

      const {portValue} = this.state;
      const {contacts} = this.props;
      const{products} = this.props;
      const {id} = this.props;

      console.log(contacts[0])
      console.log(id)
      
      //const initialAmount = contacts.map(contact => contact.contribution);
      //contribution - portValue = ile pozostalo pieniedzy
      // console.log(portValue)
    
      //@@@@@@@@

      let xxx = null

      if(id){
        const {contacts,id,name,contribution} = this.props;
        xxx = contacts.filter(contact =>(contact.id === id))[0];
      }

      //take user from loop add value of all products he bought and this is spentAmount
      if(xxx.products){
        var spentAmount = xxx.products.reduce((spentAmount,item)=>
        spentAmount + parseFloat(item.value.toString()),0)
        console.log(spentAmount)
      }
     
      const initialAmount = xxx.contribution;
      console.log(initialAmount)

      const convertInitial = String(initialAmount)
      //console.log(typeof(convertInitial))
  
      // initialAmount(contribution) - port value (sum of spent money on products)
      const remainder = initialAmount - spentAmount;
      console.log(remainder)

        if(value > remainder){
          this.setState({showAlert:true})
          setTimeout(()=>{this.setState({showAlert:false})},2000)
            
        }else{

          //if value =< remainder => add product to basket

          const newProduct = {
            id: uuid(),
            name,
            value,
            date: new Date()
          }

          this.props.addProduct(newProduct)
          this.props.insert_product(xxx.id, newProduct)
         
        }
      }

  render() {

    
    const {id,name, description, value} = this.props;
    const {showAlert} = this.state;
    console.log(name)
    return (
      <div>
                  <div className="col-sm-6" id="pr3">
                  {showAlert? 
                    
                    (<div style={{backgroundColor:'red',height:'50px',color:'white',borderRadius:'5px'}}><h5>Sorry you dont have enought money</h5></div>): null}
                          <div className="row" id="productRow1">
                          <div id="pr5" className="col-sm-5">
                              <h5>{name}</h5>
                              <p>{description}</p>
                              <h5>Value: ${parseFloat(value).toFixed(2)}</h5>
                          </div>
                          {/* <div id="pr4" className="col-sm-5" style={{width:'90%',margin:'auto', height:'100px', cursor:'pointer'}} onClick={this.addProduct.bind(this, name)} > */}
                          <div id="pr4" className="col-sm-5" style={{width:'90%',margin:'auto', height:'100px', cursor:'pointer'}} onClick={this.addProduct.bind(this, name, value)} >
                                Add me
                            <i className="fas fa-plus fa-2x" id="plus"></i>
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
  portfolio: PropTypes.array.isRequired,
  contacts: PropTypes.array.isRequired,
  insert_product: PropTypes.func.isRequired, 
}
const mapStateToProps = state =>({
  products: state.product.products,
  contacts: state.contact.contacts,
  portfolio: state.product.portfolio,
})

export default connect(
  mapStateToProps,
  {addProduct,getProducts,insert_product}
) (Product);
