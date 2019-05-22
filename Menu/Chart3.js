/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';
import axios from 'axios';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getContacts} from '../actions/ContactActions';


import Chart5 from './Chart5';
import Chart3_section1 from './Chart3_section1';
import Chart3_section2 from './Chart3_section2';
import Chart3_section3 from './Chart3_section3';


class CustomizedLabel extends PureComponent {
  render() {
    const {
      x, y, stroke, value,
    } = this.props;

    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>;
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}

 class Chart3 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/5br7g9d6/';

state = {

  data: []
}
  //call data from json file,the same as API
  componentDidMount(){

    //dziala wezwanie axios
    axios.get('/Data/Data1.json')
      .then(res => this.setState({data: res.data}))
  }
  //call contacts from state
  componentDidMount(){
    this.props.getContacts();
  }



  render(){

    const data = this.state.data; 
    console.log(data)

    const {contacts} = this.props;
    console.log(contacts)
    const {id} = this.props.match.params
    console.log(id)

    if(id){
        const {contacts} = this.props;
        console.log(contacts)
        //const {id} = this.props.match.params
        console.log(id)
        // console.log(this.props.match.params)
        var xxx = contacts.filter(contact =>(contact.id === id))
        console.log(xxx[0])
    }

   
    return (
      <div style={{width:'100%'}}>
      
            <Chart3_section1 user={xxx} id={id}/>
            <Chart3_section2 />
            <Chart3_section3 user={xxx}/>
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contact.contacts
})


Chart3.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps, {getContacts}
) (Chart3);