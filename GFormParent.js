import React, { Component } from 'react'
import './css/beats.png';
import './css/greenstyle.css';
import classnames from 'classnames';
import {addContact} from './actions/ContactActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class GFParent extends Component {

    state = {
        id : '',
        name: '',
        email:'',
        city:'',
        contribution:'',
        products:[],
        errors: {}
    }
onChange = e => this.setState({[e.target.name]: e.target.value});

onSubmit = e => {
    e.preventDefault();
    
    const {name, email,city, contribution, errors, key,products} = this.state;

    //validation
    if(name === ""){
        this.setState({errors:{name: "This field is required"}})  
    return;
    }

    if(email === ''){
        this.setState({errors:{email: "We need this field to contact you"}});
        return;
    }
    if(contribution === ""){
        this.setState({errors:{contribution:"Sorry, but we expect that you add some money"}});
        return;
    }
    //create newContact
    const newContact = {
        id: uuid(),
        name,
        email,
        city,
        contribution,
        products
    }
   
    this.props.addContact(newContact);
    
    //clear input fields
    let clear = Object.assign({}, this.state)
        clear.id = ''
        clear.name = ''
        clear.email = ''
        clear.city = ''
        clear.contribution = ''
    this.setState(Object.assign({},this.state,clear))

}
  render() {
      const {name, email, city, contribution, errors, id } = this.state;
    return (
      <div>
          < div className="card" style={{width:"80%", margin:"auto", maxWidth:"500px", padding:"10px"}}>
            <img className="card-img-top" src={require("./css/beats.png")} style={{width:"100px", height:"100px",margin:"auto" }} alt="Logo"></img>
              <form onSubmit={this.onSubmit}>
              <div className="card-body" style={{maxWidth:"300px", margin:"auto"}}>
                    <div className="form-group" >
                        <label htmlFor="name">Name</label>
                            <input 
                            type="text" 
                            // className='form-control is-invalid'
                            // className={classnames('form-control',{'is-invalid':errors.name})}
                            className={classnames('form-control',{'is-invalid': errors.name})}
                            placeholder="enter your name"
                            onChange={this.onChange}
                            value={name}
                            name="name"
                            error={errors.name}
                            maxLength='15'
                            // required
                            />
                           <div className="invalid-feedback">Input data</div>
                            <small id="nameHelp" className="form-text text-muted">We dont sell your data</small>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="email">Email</label>
                            <input 
                            type="email" 
                            className={classnames('form-control',{'is-invalid':errors.email})}
                            name="email"
                            placeholder="enter your email..."
                            onChange={this.onChange}
                            value={email}
                            error={errors.email}
                            maxLength='15'
                            // required
                            />
                            <div className="invalid-feedback">Input data</div>
                            <small id="nameHelp" className="form-text text-muted">we do not spam</small>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="city">City</label>
                            <input type="text" 
                            className="form-control"
                            placeholder="your city please"
                            onChange={this.onChange}
                            value={city}
                            name="city"
                            maxLength='15'
                            />
                            <small id="nameHelp" className="form-text text-muted">your city</small>
                    </div>
                <div className="form-group" >
                        <label htmlFor="contribution">Contribution</label>
                            <input type="number" 
                            className={classnames('form-control',{'is-invalid':errors.contribution})}
                            placeholder="£ 1000"
                            onChange={this.onChange}
                            value={contribution}
                            name="contribution"
                            error={errors.contribution}
                            min='1000'
                            maxLength='15'
                            // required
                            />
                            <div className="invalid-feedback">Input data</div>
                            <small id="nameHelp" className="form-text text-muted">contribute to your future...</small>
                    </div>
                </div>
                <input
                    id="pushData"
                    type="submit"
                    value="Push data"
                    className="btn btn-outline-danger btn-lg"
                />
              </form>
          </div>
      </div>
    )
  }
}

GFParent.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default connect(
    null,
    {addContact}
) (GFParent);


