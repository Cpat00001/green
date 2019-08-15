import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import './../../css/Page18.css';
import {getFinProd} from './../../actions/financialProducts';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {GET_FINPROD} from './../../actions/types';
import Page18_Product from './Page18_Product';




 class Page18 extends Component {

componentDidMount(){

    this.props.getFinProd()
    console.log(this.props)
}
render() {

        const financialProd = this.props.financialProd;
        console.log(financialProd)
        console.log(this.props.style)

        const newSubAccount = this.props.newSubModel
        console.log('newSubAccount______',newSubAccount)

        return (
            <div>
                <Row>
                    <Col span={24} style={{height:'100px', backgroundColor:'grey'}}><h5></h5></Col>
                </Row>
                <div style={{maxWidth:'1100px',margin:'auto'}}>
                    <Row gutter={16} style={{marginTop:'100px'}}>
                        <Col sm={12} className='p18_left'>
                            <Row>
                                <Col span={24} style={{height:'100px', backgroundColor:'rgb(245,245,245)', margin:'5px' , borderRadius:'5px'}}>
                                    <Row>
                                        <Col span={12}><h5>Total value</h5></Col>
                                        <Col span={12}><h5><span style={{fontSize:'15px', fontWeight:'bold'}}>£</span>00.00</h5></Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}><h5>Total cash</h5></Col>
                                        <Col span={12}><h5><span style={{fontSize:'15px', fontWeight:'bold'}}>£</span>300.00</h5></Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}></Col>
                                        <Col span={20}><p style={{fontSize:'12px'}}>Combined values of all active accounts. Market Value uses latest closing prices.</p></Col>
                                        <Col span={2}></Col>
                                    </Row>
                                </Col>
                            </Row> 
                            <Row>
                                <Col span={24} style={{minHeight:'400px',height:'auto', backgroundColor:'rgb(245,245,245)', margin:'5px', borderRadius:'5px', height:'auto'}}></Col>
                            </Row> 
                             <Row>
                                <Col span={24} style={{minHeight:'50px',height:'auto', backgroundColor:'rgba(113, 90, 200, 0.1)',color:'#715ac8',boxShadow:'0px 0px 0px 1px #715ac8', margin:'5px', borderRadius:'5px'}}>
                                    <Icon type="arrow-down" style={{fontSize:'20px',float:'left',padding: "10px 0"}}/>
                                    <p style={{float:'left', textAlign:'center', padding: "10px 0"}}><span style={{fontWeight:'bold'}}>20,000.00 GBP</span> ISA funding available in this period.</p>
                                </Col>
                            </Row>
                            <Row>
                                <div className='p18smallBox'><Icon type="user" style={{float:'left'}}/><p>Contact Details</p></div>
                                <Col span={24} style={{minHeight:'100px',height:'auto', backgroundColor:'rgb(245,245,245)', margin:'20px', borderRadius:'5px'}}>
                                    <Row style={{marginTop:'60px',padding:'20px'}}>
                                        <Col span={2}></Col>
                                        <Col span={2}>
                                            <Row>
                                                <Col span={24}><Icon type="home" /></Col>
                                                <Col span={24}><Icon type="phone" /></Col>
                                                <Col span={24}><Icon type="mail" /></Col>        
                                            </Row>
                                        </Col>
                                        <Col span={18}>
                                            <Row>
                                                <Col span={24}><p>adres details</p></Col>
                                                <Col span={24}><p>mobile</p></Col>
                                                <Col span={24}><p>email</p></Col>        
                                            </Row>
                                        </Col>
                                        <Col span={2}></Col>
                                    </Row>
                                </Col>
                            </Row> 
                        </Col>

                        {/* column right with products */}
                        <Col sm={12} className='p18_right'>
                            <div style={{width:'100%', height:'800px', borderRadius:'5px'}}>
                            <Row>
                                <Col span={1}></Col>
                                <Col span={22} style={{minHeight:'100px',backgroundColor:'rgb(245,245,245)',marginTop:'10px',borderRadius:'5px'}}>
                                    {financialProd.map( (product,key) =>(
                                        < Page18_Product key={key} desc={product.productDescription} cur={product.currency} symbol={product.symbol} backgroundColor={this.props.style} newSubAccount={newSubAccount}/>
                                    ))}
                                    

                                </Col>
                                <Col span={1}></Col>
                            </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}></Col>
                        <Col span={12}>
                            <Row className='p18applications'>
                                <Col span={2}><Icon type="inbox" style={{ fontSize: '30px', color: '#08c' }}/></Col>
                                <Col span={20}><h5 className='p18applicationsText'>Applications</h5></Col>
                                <Col span={2}></Col>
                            </Row>
                        </Col>
                    </Row>
                    
                </div>
            </div>
        )
    }
}
Page18.propTypes = {

    financialProd: PropTypes.array.isRequired,
    style: PropTypes.object.isRequired,
    newSubModel: PropTypes.array.isRequired,
    

}

const mapStateToProps = state =>{
    return{
        financialProd: state.financialProd.finProducts,
        style: state.style,
        newSubModel:state.subAcc.newSubModel
    }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
    //   getFinProd: () => dispatch({ type: "GET_FINPROD"})
    getFinProd: () => dispatch(getFinProd())
    }
  }

// dzialajaca linia kodu export default connect( mapStateToProps,{getFinProd} ) (Page18);
export default connect( mapStateToProps,mapDispatchToProps ) (Page18);
