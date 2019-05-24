import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../../css/andtCharts.css';
import GlobalChart1 from './GlobalChart/GlobalChart1';
import GlobalChart2 from './GlobalChart/GlobalChart2';
import GlobalChart3 from './GlobalChart/GlobalChart3';
import GlobalChart4 from './GlobalChart/GlobalChart4';
import axios from 'axios';

class GlobalData extends Component {

    state = {

        // totalMarketValue: []
        data:[],
        data2:[]
    }

    componentDidMount(){
  
    axios.get('/Data/GlobalChart1Data.json')
    // .then(res => this.setState({totalMarketValue: res.totalMarketValue}))
    .then(res => this.setState({data: res.data}));

    //call data from GlobalChart3Cash.json
    axios.get('/Data/GlobalChart3Cash.json')
    .then(res => this.setState({data2: res.data}) )
    }

    render() {

    let {data} = this.state;
    // console.log(data)
    // console.log(typeof data)

    
    //get current month
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let date = new Date();
    let result = months[date.getMonth()];
    console.log("name of month:" ,result)

        // find an object in array
    let ra = data.filter(month => month.name === 'May')
    // console.log("result from ra", ra)
    // console.log("type of ra", typeof ra)
    // console.log("result ra.name",ra.name)
    const A = ra[0];
    // console.log(A)
    // console.log("typeof ra[0]:", typeof A)
    // const AN = A.name;
    if( typeof A === "object" ){
        if(A.hasOwnProperty("name")){
            // console.log("result of A.name:",A.name)
            let newValue = A.name;
            if( result == A.name ){
                // console.log("Ready to GO")
                var totalAssets = A.totalMarketValue;
                var period = A.name;
            }
        }else{
            console.log("no value from A.name")
        }
    }else{
        console.log("type of A is not an object")
    }

    //data2 from GlobalChart3Cash.json
    const {data2} = this.state;
    console.log(data2);
    console.log(typeof data2)
    const AC = data2.filter(month => month.name === result)
    console.log('object for cash:', AC)
    const OC = AC[0];
    console.log("rzekomy object AC:", OC)
    
    if( typeof OC === "object"){
        if(OC.hasOwnProperty("name")){
            console.log("Cash ready to GO");
            var totalCash = (OC.totalCashIn) - (OC.totalCashOut)
            console.log("obliczenia gotowki:", totalCash);
            console.log("typ obliczen gotowki:", typeof totalCash)
        }else{
            console.log("cannot calculate GOTOWKI")
        }
    }else{
        console.log('AC IS NOT AN OBJECT')
    }

    return (
      <div>
        <Col span={12} offset={6}>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={2} xs={4}>
                            <Icon type="camera" className="icon1" />
                        </Col>
                        <Col span={22} xs={20} style={{float:'left'}}>
                            <h4 className="Glob1">Hubwise - {period} 2019</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{marginBottom:'20px'}}>
                <Col span={10} xs={24} sm={24} md={24} lg={10} xl={10} >
                    <Row>
                        <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24} style={{backgroundColor:'powderblue'}} className="Glob2">
                            <h2>Total Assets on Platform</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} xs={24} sm={24} md={24} lg={10} xl={10}>
                            <span><p>Market Value</p></span>
                        </Col>
                        <Col span={12} xs={24} sm={24} md={24} lg={10} xl={10}>
                            <h2>£ {totalAssets}</h2>
                        </Col>   
                    </Row>
                    <Row>
                        <Col span={12} xs={24} sm={24} md={24} lg={10} xl={10}>
                            <span><p>Total Cash</p></span>
                        </Col>
                        <Col span={12} xs={24} sm={24} md={24} lg={10} xl={10}>
                            <h3>£ {totalCash}*</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} xs={24} sm={24} md={24} lg={10} xl={10}>
                            <p>some text here</p>
                        </Col>
                        <Col span={12} xs={24} sm={24} md={24} lg={10} xl={10}>
                            <h4>£99,577,312.47</h4>
                        </Col> 
                    </Row>
                    <Col>
                        <Row>
                            <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24} className="Glob4">* The Market value shown above acts as a guide and was calculated on 20 May 2019.</Col>
                        </Row>
                        <Row>
                            <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24} className="Glob4">† Figures shown relate to the month of May 2019 and were calculated on 20 May 2019</Col>
                        </Row>
                        <Row>
                            <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24} className="Glob4">‡ Estimates calculated on figures up to 20 May 2019.</Col>
                        </Row>
                    </Col>

                </Col>
                
                <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14}style={{backgroundColor:'rgb(227, 230, 234)'}} className="Glob3">
                    <h3>Products on Platform</h3>
                    <GlobalChart4/>
                </Col>
            </Row>


            <Row style={{marginBottom:'20px'}} gutter={16}>
                <Col span={2} xs={2} sm={2} md={2} lg={2}><Icon type="clock-circle" className="icon1"/></Col>
                <Col span={20} offset={2} xs={20} sm={20} md={20} lg={20}><h5 className="Glob1">31 May 2018 to 20 may 2019 for Hubwise</h5></Col>
            </Row>
            <Row style={{marginBottom:'100px'}} gutter={16}>
                <Col span={8} xs={24} sm={24} md={24} lg={8} xl={8} style={{backgroundColor:'rgb(227, 230, 234)'}}>
                    <h3 className="Glob1">Total Stocks</h3>
                    <GlobalChart2 />
                </Col>
                <Col span={8} xs={24} sm={24} md={24} lg={8} xl={8} style={{backgroundColor:'rgb(227, 230, 244)'}}>
                <h3 className="Glob1">Total cash</h3>
                    <GlobalChart3/>
                </Col>
                <Col span={8}  xs={24} sm={24} md={24} lg={8} xl={8} style={{backgroundColor:'rgb(227, 230, 234)'}}>
                    <h3 className="Glob1" >Market value and fees</h3>
                    <GlobalChart1 />
                </Col>
            </Row>
        </Col>
        <Col span={6}></Col>     
      </div>
    )
  }
}
export default GlobalData;
