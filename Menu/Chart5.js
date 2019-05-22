import React, { Component } from 'react'
import axios from 'axios';

// ten komponent jest wklejony do Chart3.js ale poki co skomentowany wiec sie nie wyswietla - powoduje problem,jesli zalaczony,to pusta strona

 class Chart5 extends Component {

    state = {

        result : []

    }
    
  componentWillMount(){
        const result = axios.get('/Data/Data1.json')
            .then(response => {
                this.setState({result: response.data});
                console.log(result)
            })
            .catch(function(error){
                console.log(error)
            });
    }

  render() {

        const {result} = this.state;
        console.log(result)

        let displayTable = '';

        if(result.length > 0 ){
            displayTable = result.map(obj =>(
                <tr>
                    <td>{obj.date}</td> 
                    <td>{obj.value}</td>
                </tr>
            ))

    return (
      <div>
        <div style={{marginTop:'150px'}}>
            <h5>Chart5/Table will be here</h5>
            <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Value</th>
                </tr>
            </thead>
            </table>
        </div>
      </div>
    )
  }
}
}

export default Chart5;
