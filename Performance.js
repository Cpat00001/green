import React, { Component } from 'react'
import './css/greenstyle.css';
import Product from './Product';
import Total from './Total';
import Footer from './Footer';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {GET_PRODUCTS} from './actions/types';
import contactReducer from './reducers/contactReducer';
import {getContact} from './actions/ContactActions';
import { Redirect } from 'react-router-dom';


class Performance extends Component {
  

  state = {};

  componentDidMount(){

    this.props.getProducts();
  }

  
  render() {

    let redirectHome;

    const {products} = this.props;
    const {id} = this.props.match.params;
    const {name,contact} = this.props;
    const{contacts} = this.props;
    console.log(id)
    console.log(contacts)
    console.log(name)
    console.log(this.props)
    console.log(this.props.name)

    //check if id from url is one of the registered
    if(id){
      const {contacts} = this.props;
      console.log(contacts)
      const {id} = this.props.match.params;
      console.log(id)
      var y = contacts.find(contact =>(contact.id === id))
      console.log("found contact", y)
      console.log(typeof y)
      //console.log(y.id)
    }

    //   if(typeof y === undefined || typeof y !== Object || typeof y === null){
    //     console.log('ID HAS NOT BEEN FOUND')
    //     this.props.history.push('/')
    //   }else{
    //     console.log('ID EXISTS IN REGISTERED LIST')
    //   }
    // }
      
    //     if(typeof y === undefined || typeof y === null || typeof y !== Object  ) {
    //     // if(Object.values(y) === 'undefined' || Object.values(y) === null ){
    //       //setTimeout(()=>{ this.props.history.push('/')},2000)
    //           alert('not registered')
    //           console.log('ID HASNT BEEN FOUND')
    //   }else{
    //     console.log('ID EXISTS IN REGISTERED LIST')
    //   }

    // }

 

    return (
      <div>{/* opening tag of TJX */}
        <div className="container-fluid" id="pr1">
           <h3 id="pr2">Financial Shop</h3>
           <h5 id="pr2">Choose and add a product to your portfolio</h5>
         </div>
         <div className="container-fluid d-flex justify-content-center">      
                  {/* <div className="d-flex justify-content-center"> */}
                  <div className="row" style={{maxWidth: '800px'}}>

                      {products.map(product => (
                          
                          <Product 
                            key={product.id}
                            id={id}
                            name={product.name}
                            description={product.description}
                            value={product.value}
                          />
                      ))}
                  </div>
         </div>
         
         <Total 
        id={id}
        name={this.props.name}
         />
         <Footer />

       {/* closing tag of TJX */}
      </div> 
    )
  }
}

Performance.propTypes = {
  products: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  products: state.product.products,
  contacts: state.contact.contacts
})
const mapDispatchToProps = dispatch =>({
  getProducts: () => dispatch ({type: GET_PRODUCTS}),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps

) (Performance);
