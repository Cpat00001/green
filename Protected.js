


import React, { Component } from 'react'
import './css/greenstyle.css';
import Product from './Product';
import Total from './Total';
import Footer from './Footer';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import contactReducer from './reducers/contactReducer';
import {getContacts} from './actions/ContactActions';
import { Redirect, Link } from 'react-router-dom';
import MenuChart from './Menu/MenuChart';



class Protected extends Component {

  state = {
    isLoggedIn: false,
    id: this.props.match.params,
  };

  componentDidMount(){
    this.props.getContacts();
    let {id} = this.props.match.params
    let {contacts} = this.props
    console.log(id)
    console.log(typeof id)
    console.log(contacts)

    var y = contacts.find(contact =>(contact.id === id))
    alert(y)
    if(typeof y === 'undefined'){
      this.props.history.push('/')
    }else{
      if(y.id === id){
        this.setState({isLoggedIn: true})
        console.log('STATE HAS BEEN CHANGED TO TRUE')
      }
    } 
  }

  render() {

    const {id} = this.props.match.params
    console.log(id)


    return (
      <div>{/* opening tag of TJX */}
            {this.state.isLoggedIn? 

            (
            <div>
            <h5 style={{marginBottom:'50px'}}>Welcome ID:{id} , you can see this page</h5> 
            {/* <Link to='../MenuChart'> */}
            {/* <Link to={`${this.props.match.path}/Menu/MenuChart`}> */}
            {/* <Link to={`/Menu/Protected/${id}/Menu/MenuChart`}>
            {/* http://localhost:3000/Menu/Protected/14388b3d-4c6c-428b-8a06-f536c2e1406f/Menu/MenuChart */}
              {/* <button class="btn btn-dark">MenuChart Component</button>
            </Link> */}
            <MenuChart />
            </div>
            )
            : 
            
            <div>
            <h5>Please login first</h5>
            <button onClick={() => this.props.history.push("/")}>to LoginPage</button>
            </div>
                
          }
        
      </div> 
    )
  }
}

Performance.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  contacts: state.contact.contacts
})


export default connect(
  mapStateToProps,
  {getContacts}
) (Protected);
