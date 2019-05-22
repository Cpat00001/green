import React, { Component } from 'react';
import './css/greenstyle.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProducts} from './actions/ProductActions';
import Product2 from './Product2';
import {getContacts} from './actions/ContactActions';

 class Total extends Component {

  state = {
    portValue: null
  }

  // componentDidMount(){
  //   const {id} = this.props.match.params;
  //   console.log(id)
  // }

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

  render() {
    
    const {portfolio} = this.props;
    const {portValue} = this.state;
    let {contacts} = this.props;
    const{products} = this.props;
    const {email} = this.props;
    console.log(products)

    //contribution - portValue = ile pozostalo pieniedzy
    console.log(portValue)

    const {id,name} = this.props;
    console.log(this.props.contacts)
    // console.log(this.props.contacs[id])
    console.log(id)
    
    if(id){
      const {contacts,name} = this.props;
      var xxx = contacts.filter(contact =>(contact.id === id));
    }
    console.log(xxx[0].name)
    console.log(xxx[0].contribution)
    //display list of user's products
    console.log(xxx[0])

    // const aaa = [xxx][0].push({products:portfolio})
    const aaa = [xxx][0].push('1234')
    const bbb = xxx[0].products.push(portfolio)


    console.log("User Products: ", xxx[0].products)
    //const aaa = [xxx][0].concat({products:portfolio})
    console.log(aaa)
    console.log(xxx[1])
    // console.log(xxx[2][0].name)
    console.log(xxx[2])
    var elem = 2;
    console.log(xxx[elem])
    
    const initialAmount = xxx[0].contribution;
    console.log(initialAmount)

    const remainder = initialAmount - portValue;
    console.log(remainder);

    
    return (

      <div>
        <nav className="navbar" id="navbar2">
       
        <span className="navbar-brand mb-0 h1">Portfolio's owner :  <h5 style={{color:'rgb(31, 196, 94)'}}>{xxx[0].name}</h5></span>
          <span className="navbar-brand mb-0 h1" id="tot2">Spent Amount $ <h5 style={{color:'rgb(150, 44, 44)'}}>{portValue.toFixed(2)}</h5></span>
        </nav>
        <div className="container-fluid" id="tot3">
          <div className="row">
            <div className="col-sm-6">
              <h5>Remainder: <span>{parseFloat(remainder).toFixed(2)}</span></h5>
            </div>
            <div className="col-sm-6">
              <h5>{xxx[0].email}</h5>
            </div>
          </div>
          
        </div>
          <div className="container-fluid" id="tot1">
          <h5>Below you can see a list of products you have chosen</h5>
            {portfolio.map(item => (

              <Product2 
              key={item.id}
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
  product: PropTypes.array.isRequired,
  contacts: PropTypes.array.isRequired,
  getContact: PropTypes.func.isRequired
  
}

const mapStateToProps = state =>({
  portfolio: state.product.portfolio,
  contacts: state.contact.contacts,
  products: state.product.products,
})

export default connect(
  mapStateToProps,
  {getProducts,getContacts}
) (Total);

