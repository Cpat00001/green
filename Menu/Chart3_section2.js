import React, { Component } from 'react'
import '../css/greenstyle.css';
import C3s2CircleChart from './chart1/C3s2CircleChart';
import axios from 'axios';

class Chart3_section2 extends Component {

  
  render() {
     const {data2} = this.props;
    return (
      <div className="container" id="c3s2id1">
         <div className="col-md-12" id="c3s2id2">
                <h3 id="c3s2text2">Investment Allocation</h3>
            </div>
         <div className="row" id="c3s2id3">
            <div className="col-sm-12 justify-content-center">
              < C3s2CircleChart/>
            </div>
        </div>
      </div>
    )
  }
}


export default Chart3_section2;
