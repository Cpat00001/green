import React, { Component } from 'react';
import '../css/greenstyle.css';
import { connect} from "react-redux";
import PropTypes from "prop-types";
import {getContacts} from '../actions/ContactActions';
import C3s3LineChart from './chart1/C3s3LineChart';


 class Chart3_section3 extends Component {

    state = {

        startday: '',
        endday:'',
        showPeriod: false,
        profit: '',
        performance: '',
        performPercent:'',
        displayBanner: false,
    }

    componentDidMount(){
        this.props.getContacts();
    }

    onChange = (event) =>{
        this.setState({[event.target.name]:event.target.value});
    }
    onSubmit = (event) =>{
        event.preventDefault();
        //console.log(this.state)
        this.setState({showPeriod: !this.state.showPeriod})

        const date1 = new Date(this.state.startday);
        const date2 = new Date(this.state.endday);
        console.log(date1)
   
       //funckcja ktora liczy dni
        //    const one_day = 1000 * 60 * 60 * 24;
           const one_month = 1000 * 60 * 60 *24 *30;
           const startday1 = date1.getTime();
           const endday1 = date2.getTime();
   
           const difference = Math.abs(endday1 - startday1);
        // liczy liczbe dni z okresu
        // const wynikDaty =  Math.floor(difference/one_day)

        // liczy liczbe miesiecy z okresu
        let wynikDaty =  Math.floor(difference/one_month);
           console.log(wynikDaty)

        //liczy compound interest from chosen time frame => interest rate is Fixed 0.01 === 1%/monthly
        //compoundInterest();
        const invest = this.props.contacts[0].contribution
        console.log(invest)
        const interest = 1 + (0.01/1);
        console.log(interest)
        const okresInwestycji = wynikDaty * 1;
        console.log(okresInwestycji);
        const potega = Math.pow(interest,okresInwestycji);
        console.log(potega)
        const wynik = (invest * potega).toFixed(2);
        console.log(wynik)
        this.setState({profit : wynik})

        //performance of investment %
        const performance = parseFloat(wynik - invest).toFixed(2);
        console.log(performance)
        this.setState({performance: performance})

        const performPercent = ((performance/invest)*100).toFixed(2)
        console.log(performPercent)
        this.setState({performPercent: performPercent})

        //displaying chart with performance: yes : no
        console.log(`ready to display chart ${this.state.displayBanner}`)
        this.setState(state=>({displayBanner: !state.displayBanner}))
    }
    // compoundInterest(){
    //     const invest = this.props.contacts[0].contribution
    //         console.log(invest)
    // };
 
    
    // function which count end value

  render() {

    const {showPeriod, profit, performance, performPercent , endday, displayBanner} = this.state;
    console.log(endday)
    console.log(performPercent)
   
    return (
      <div className="container" id="c3s3container">
        <div className="row">
            <div className="col-md-12">
                <h3 style={{float:'left'}}>Investment Performance</h3><p style={{float:'left'}}>(With Date Range)</p>
            </div>
            <div className="col-md-5" id="c3s3id1">
            <div className="col-md-11 d-flex justify-content-center" id="c3s3id3">
                <div className="col-sm-12">
                <form onSubmit={this.onSubmit}>
                                    <div className="row">
                                    
                                        <div className="col-sm-4">
                                            <div className="row">
                                                <div className="col-sm-2" >
                                                    <i className="far fa-calendar-alt" style={{float:'left'}}></i>
                                                </div>
                                                <div className="col-sm-10">
                                                <p style={{textAlign:'left',fontSize:'14px'}}>Start date</p>
                                                <input type="date" name="startday" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={this.onChange} style={{fontSize:'10px',width:'100%',minWidth:'120px'}}/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <div className="row">
                                                <div className="col-sm-2" >
                                                    <i className="far fa-calendar-alt" style={{float:'left'}}></i>
                                                </div>
                                                <div className="col-sm-10">
                                                <p style={{textAlign:'left',fontSize:'14px'}}>End date</p>
                                                <input type="date" name="endday" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={this.onChange} style={{fontSize:'10px',width:'100%',minWidth:'120px'}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4" style={{width:'100%'}}>
                                            <button className="btn" style={{backgroundColor:'#6a348a',borderColor:'#51246b', color:'white', marginTop:'50px'}}>Display</button>
                                        </div>
                                    {/* </form> */}
                                    </div>  
                    </form>
                </div>
            </div>
            
                    <div className="col-md-12" style={{backgroundColor:'#e6e9ef'}}>
                        <div id="c3s3id4">
                            {showPeriod ? (<h6 id='c3s3text'>Chosen time frame {this.state.startday} - {this.state.endday}</h6>) : null} 
                            {/* <h5>{this.state.startday} - { this.state.endday}</h5> */}
                        </div>
                            <div className="container">
                                <div className="row" id="c3s3id6">
                                    <div className="col-md-5" id="c3s3id5">
                                        <h5 id='c3s3text'>Start value:</h5> {showPeriod? (<h5>{this.props.user[0].contribution}</h5>):  <h5>{this.props.user[0].contribution}</h5>}
                                       
                                    </div>
                                    <div className="col-md-5" id="c3s3id5">
                                            <h5 id='c3s3text'>End value: £ </h5> {profit ? (<h5>{profit}</h5>) : null }
                                    </div>
                                </div>

                                
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h5 id='c3s3text'>Performance %</h5>  {performPercent? (<h5>{performPercent} % </h5>): <h5>0.0 %</h5>}
                                            </div>
                                            <div className="col-md-6">
                                                <h5 id='c3s3text'>Value growth:</h5> {performance? (<h5>£ {performance} </h5>  ): <h5>£ 0.0</h5> }
                                            </div>
                                        </div>
                                    </div> 
                            </div>
                    </div>
                </div>
            
            <div className="col-md-6" id="c3s3id2">
                <h5>Performance</h5>
                {displayBanner?  <C3s3LineChart date={endday} performance={performPercent}/>: (<h5 id='c3s3text'>Choose a time frame to see you performance</h5>) }
                {/* <C3s3LineChart date={endday} performance={performPercent}/>  */}
            </div>
            </div>
       
        
      </div>
    )
  }
}
const mapStateToProps = state =>({ contacts: state.contact.contacts })

Chart3_section3.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
}

export default connect(mapStateToProps,{getContacts}) (Chart3_section3);



