import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {display_initial} from '../actions/DetailsActions';
import {display_initial} from '../actions/ContactActions';
import {add_details} from '../actions/DetailsActions';
import {get_contact} from '../actions/DetailsActions';
import {more_details} from '../actions/ContactActions';
import {addContact} from '../actions/ContactActions';

 class OutputContact extends Component {

  state = {
    id: this.props.match.params.id,
    title: '',
    name:this.props.contact.name,
    middlename:'',
    street:'',
    number:'',
    town:this.props.contact.city,
    region:'',
    postcode:'',
    country:'',
    nationality:'',
    taxation:'',
    gender:'',
    NIN:'',
    martialStatus:'',
    contactNumber:'',
    daytimeContact:'',
    mobile:'',
    email:this.props.contact.email,
    // emailNotifiaction:'',
    adviser:'',
    isGoing:true,
    //ta metoda przypisania contrybucji i productow dziala
    contribution: this.props.contact.contribution,
    products: this.props.contact.products,
    
  };

  initialState = {
    contact: {}
  }

      //   componentWillReceiveProps(nextProps){

      //   const {contribution} = nextProps.contact;
      //   this.setState({
      //     contribution: nextProps.contribution
      //   })
      // }

    componentDidMount() {
        const { id } = this.props.match.params;
        const {name,city,email} = this.props;
        console.log(id)
        //jesli juz masz id,wtedy podaj do funkcji getContact()
        this.props.get_contact(id)
      }     
      handleInputChange(e){
    
        const target = e.target;
        const isGoing  = target.type === 'checkbox' ? target.checked : target.name;
        const name =  target.name
        
    
        this.setState({
          [name]: isGoing
        })
      }
      onChange = e => this.setState({[e.target.name]: e.target.value});

      onSubmit = e => {
        const {id} = this.props.match.params;
        e.preventDefault();
        //call funtion which adds more details than initailly was submitted to contact
        this.props.more_details(this.state);
        console.log(this.state)
      };

  render() {
      const {id,city, email, name} = this.props.contact;
      const {contribution} = this.props.contact;
      console.log(parseInt(contribution))
      const {title,middlename,street,number,region,postcode,country,nationality,taxation,gender,NIN,martialStatus,contactNumber,daytimeContact,mobile,adviser,town} = this.state;
      //console.log(this.props)
    return (
 
//przeklejam kod z EditInvestorDetails.js
<div>
<div className="container-fluid">
          <div id="IN0"><p><b>Here you can edit and change Investor's Details</b></p> </div>
        <div className="container" id="IN1">
          <div className="row">
          <i className="fas fa-users-cog fa-2x"></i>
            <div id="IN2"><h3>Maintain details</h3></div>
            </div>
        </div>
</div>

<form onSubmit={this.onSubmit}>
<div className="container">
  <div className="row">
    <div className="col-sm">
      <div className ="form group">
      <label htmlFor="title">Title</label>
        <select value={this.state.title} onChange={this.onChange} className="form-control form-control-sm" id="dropTitle" name="title" value={title}>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Miss">Miss</option>
              <option value="Sir">Sir</option>
              <option value="other">other</option>
              <option value="animal">animal</option>
        </select>
      </div>
    </div>
    <div className="col-sm">
        <div className="form-group">
          <label htmlFor="ename">Name</label>
          <input type="text" className="form-control form-control-sm" id="name" aria-describedby="emailHelp" placeholder="name" onChange={this.onChange} name="name" value={name} />
          {/* <p>Contribution: <input type="text" className="form-control form-control-sm" id="contribution" aria-describedby="emailHelp" placeholder="contribution" 
          onChange={this.onChange} name="name" value={contribution} disabled/></p> */}
        </div>
    </div>
    <div className="col-sm">
      <div className="form-group">
            <label htmlFor="ename">Middle Name</label>
            <input type="text" className="form-control form-control-sm" id="middlename" aria-describedby="emailHelp" placeholder="middle name" name="middlename" onChange={this.onChange}
            value={middlename}  />
      </div>
    </div>
    <div className="col-sm">
    <div className="form-group">
            <label htmlFor="ename">Surname</label>
            <input type="text" className="form-control form-control-sm" id="surname" aria-describedby="emailHelp" placeholder="surname" name="surname" onChange={this.onChange} />
            <label htmlFor="ename">Contribution</label>
            <input type="text" className="form-control form-control-sm" id="contribution" aria-describedby="emailHelp" placeholder="contribution" 
                   onChange={this.onChange} name="name" value={contribution} disabled />

      </div>
    </div>
  </div>
</div>
  {/* poczatek dodanej calej formy pionowe czesci */}

  <div className="container">
  <div className="row row justify-content-md-center">
    <div className="col-sm-4" id="IN3">
      <div id="IN4"><i className="fas fa-map-marker-alt fa-2x" id="icon1"></i><p>Address details</p></div>
      <div className="form-group">
              <label htmlFor="address1">Address 1 </label>
              <input type="text" className="form-control form-control-sm" id="address1" aria-describedby="emailHelp" placeholder="street" name="address1" onChange={this.onChange} name="street" value={street}/>
      </div>
      <div className="form-group">
              <label htmlFor="address1" style={{float:'left', clear:'right'}}>Address 2 </label>
              <input type="text" className="form-control form-control-sm" id="address1" aria-describedby="emailHelp" placeholder="number" onChange={this.onChange} name='number' value={number}/>
      </div>
      <div className="form-group">
              <label htmlFor="address1">City/Town </label>
              <input type="text" className="form-control form-control-sm" id="surname" aria-describedby="emailHelp" placeholder="city" name="town" onChange={this.onChange} value={city}/>
              {/* <input type="text" className="form-control form-control-sm" id="surname" aria-describedby="emailHelp" placeholder="city" name="city" onChange={this.onChange} value={city} /> */}
      </div>
      <div className="form-group">
              <label htmlFor="address1">County/Region </label>
              <input type="text" className="form-control form-control-sm" id="address1" aria-describedby="emailHelp" placeholder="County/Region" onChange={this.onChange} name="region" value={region}/>
      </div>
      <div className="form-group">
              <label htmlFor="address1">Postcode </label>
              <input type="text" className="form-control form-control-sm" id="address1" aria-describedby="emailHelp" placeholder="post code" onChange={this.onChange} name="postcode" value={postcode}/>
      </div>
      <label htmlFor="country">Country</label>
        <select value={this.state.country} name='country' className="form-control form-control-sm" id="dropTitle" onChange={this.onChange}>
              <option value='United Kingdom'>United Kingdom</option>
              <option value='France'>France</option>
              <option value='Belgium'>Belgium</option>
              <option value='Irland'>Irland</option>
              <option value='Portugal'>Portugal</option>
        </select>
      
    </div>
    <div className="col-sm-4" id="IN3">
    <div id="IN4"><i className="far fa-user-circle fa-2x" id="icon1"></i><p>Address details</p></div>
      <div className="form-group">
              <label htmlFor="dataofbirth">Date of birth </label>

              <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1"><i className="far fa-calendar-alt " id="iconaTest"></i></span>
                    </div>
                    <input type="date" name="bday" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={this.onChange}/>
              </div>                 
      </div>
      <div className="form-group">
              <label htmlFor="nationality">Nationality </label>
              {/* <input type="text" className="form-control form-control-sm" id="address1" aria-describedby="emailHelp" placeholder="nationality" /> */}
              <select className="form-control form-control-sm" id="dropTitle" onChange={this.onChange} name='nationality' value={nationality}>
                  <option value='English'>English</option>
                  <option  value='French'>French</option>
                  <option  value='Belgian'>Belgian</option>
                  <option  value='Irish'>Irish</option>
                  <option  value='Portuguese'>Portuguese</option>
              </select>
      </div>
      <div className="form-group">
              <label htmlFor="taxation">Country of taxation</label>
              <select className="form-control form-control-sm" id="dropTitle" onChange={this.onChange} name='taxation' value={taxation}>
                  <option value='England'>England</option>
                  <option value='France'>France</option>
                  <option value='Belgium'>Belgium</option>
                  <option value='Irland'>Irland</option>
                  <option value='Portugal'>Portugal</option>
              </select>
              
      </div>
      <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select className="form-control form-control-sm" id="dropTitle" onChange={this.onChange} name='gender' value={gender}>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
              </select>
      </div>
      <div className="form-group">
              <label htmlFor="">NI Number</label>
              <input type="text" className="form-control form-control-sm" id="nin" aria-describedby="emailHelp" placeholder="NIN Number" onChange={this.onChange} name='NIN' value={NIN} />
      </div>
      <label htmlFor="country">Martial Status</label>
        <select className="form-control form-control-sm" id="martialstatus" onChange={this.onChange} name="martialStatus" value={martialStatus}>
              <option value='Single'>Single</option>
              <option value='Marriage'>Marriage</option>
              <option value='Divorced'>Divorced</option>
              <option value='Civil Partnership'>Civil Partnership</option>
              <option value='Widowed'>Widowed</option>
        </select>
    </div>
    
    <div className="col-sm-3" id="IN5">
    <div id="IN4"><i className="fas fa-phone fa-2x" id="icon1"></i><p>Contact details</p></div>
    <div className="form-group">
              <label htmlFor="Contact number">Contact number</label>
              <input type="text" className="form-control form-control-sm" id="contactnumber" aria-describedby="emailHelp" onChange={this.onChange} name='contactNumber' value={contactNumber}/>
      </div>
      <div className="form-group">
              <label htmlFor="address1">Daytime Phone</label>
              <input type="text" className="form-control form-control-sm" id="address1" aria-describedby="emailHelp" onChange={this.onChange} name='daytimeContact' value={daytimeContact}/>
      </div>
      <div className="form-group">
              <label htmlFor="address1">Mobile</label>
              <input type="text" className="form-control form-control-sm" id="address1" aria-describedby="emailHelp" onChange={this.onChange} name='mobile' value={mobile}/>
      </div>
    </div>

      {/* fourth column*/}
      <div className="col-sm-5" id="IN6">
            <div id="IN4"><i className="far fa-envelope fa-2x" id="icon1"></i><p>Email details</p></div>
            <div className="form-group">
                      <label htmlFor="Contact number">Email details</label>
                      <input type="email" className="form-control form-control-sm" id="contactnumber" aria-describedby="emailHelp" onChange={this.onChange} name='email' value={email}/>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange.bind(this)} name="isGoing"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Email notification</label>
              </div>
            </div> 
    {/*fourth column */}

    {/* adviser column*/}

     <div className="col-sm-5" id="IN7">
            <div id="IN4"><i className="fas fa-user fa-2x" id="icon1"></i><p style={{float:'right', marginLeft:'5px'}}>Adviser</p></div>
            <div className="form-group">
                      <label htmlFor="Contact number">Select Adviser</label>
                      <select className="form-control form-control-sm" id="martialstatus" onChange={this.onChange} name="adviser" value={adviser}>
                            <option>Jack</option>
                            <option>Matt</option>
                            <option>Bo</option>
                            <option>Andy</option>
                      </select>
              </div>
      </div>    
    {/*adviser column */}
  </div>
</div>
{/*NIE JESTEM PEWIEN CZY BUTTONS NIE POWINNY BYC W SRODKU FORMY*/}
<div className="container">
      <div className="row" style={{float:'right'}}>
        <div id="IN8">
            <div id="btndiv" style={{backgroundColor:'yellow'}}><i className="fas fa-sync-alt" id="icon1"></i><p>Refresh</p></div>
            <button type="submit" id="btndiv" style={{backgroundColor:'powderblue'}} onSubmit={this.onSubmit}>
            <i className="fas fa-pencil-alt" id="icon1"></i>Update
            </button>
            <div id="btndiv" style={{backgroundColor:'red'}}><i className="far fa-trash-alt" id="icon1"></i><p>Delete</p></div>
        </div>  
      </div>
</div>
{/*koniec submit buttons*/}

{/*koniec dodanej calej formy pionowe czesci*/}
 </form>
</div>
  
    )
  }
}
OutputContact.propTypes = {
    contact: PropTypes.string.isRequired,
    display_initial: PropTypes.func.isRequired,
    add_details: PropTypes.func.isRequired,
    more_details: PropTypes.func.isRequired,
    addContact: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    contacts: state.contact.contacts,
    contact: state.contact.contact
})

export default connect(

    mapStateToProps,
    {display_initial, add_details, get_contact,more_details}
    
) (OutputContact);
