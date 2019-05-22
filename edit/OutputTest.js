import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {display_initial} from '../actions/DetailsActions';

// OutputTest dzialajaca strona z wyswietlaniem danych
const OutputTest = (props) => {

    const key = props.match.params;
    const string = JSON.stringify(key);
    
    // console.log(key)
    // console.log(string)
    // const name = props.contact;
    const {contact} = props;
    // const {contacts} = props;
    // const {city, email,contact} = props;
    const {id} = key;
    // const {name} = name;
    console.log(typeof(id))
    console.log(typeof(string))
    console.log(key.id)
    console.log(id)
    
    let szyld;
    let board;

    if(id === key.id){
        
       szyld =<p>yes</p>                          
    }else{
        board= <p>nooo</p>
    }    
    const xxx = {
        componentDidMount(props) {
          console.log('I mounted! Here are my props: ', props);
        }
      };
                       
  return (

    <div>
        <div className="form-group">
           
                    {contact.map(contact =>(
                        <div>
                            <h5 style={{color:'red'}}>{key.id}</h5>
                            <h5 key={contact.id}></h5>   
                           <h5>ind:{contact.id }</h5>
                           <h5>name:{contact.name}</h5>
                           <h5>city :{contact.city}</h5>
                           <h5 style={{color:'green'}}>email: {contact.email}</h5>
                           </div>
                    ))}
                    
                     
            </div>
        </div> 
        
  );
};

OutputTest.propTypes = {
    city:PropTypes.array.isRequired ,
    contact: PropTypes.array.isRequired
}

const mapStateToProps = state =>({
    contact: state.contact.contacts
})

export default connect(
    mapStateToProps,
    {display_initial}
) (OutputTest);
//koniec OutputTest 





