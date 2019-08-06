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

        return (
            <div>
                <Row>
                    <Col span={24} style={{height:'100px', backgroundColor:'grey'}}><h5></h5></Col>
                </Row>
                <div style={{maxWidth:'1100px',margin:'auto'}}>
                    <Row gutter={16} style={{marginTop:'100px'}}>
                        <Col sm={12} className='p18_left'>
                            <Row>
                                <Col span={24} style={{height:'100px', backgroundColor:'rgb(245,245,245)', margin:'5px' , borderRadius:'5px'}}></Col>
                            </Row> 
                            <Row>
                                <Col span={24} style={{height:'400px', backgroundColor:'rgb(245,245,245)', margin:'5px', borderRadius:'5px'}}></Col>
                            </Row> 
                             <Row>
                                <Col span={24} style={{height:'200px', backgroundColor:'rgb(200,245,245)', margin:'5px', borderRadius:'5px'}}></Col>
                            </Row>
                            <Row>
                                <Col span={24} style={{height:'100px', backgroundColor:'rgb(245,245,245)', margin:'5px', borderRadius:'5px'}}></Col>
                            </Row> 
                        </Col>

                        {/* column right with products */}
                        <Col sm={12} className='p18_right'>
                            <div style={{width:'100%', height:'800px', borderRadius:'5px'}}>
                            <Row>
                                <Col span={1}></Col>
                                <Col span={22} style={{minHeight:'100px',backgroundColor:'rgb(245,245,245)',marginTop:'10px',borderRadius:'5px'}}>
                                    {financialProd.map( (product,key) =>(
                                        < Page18_Product key={key} desc={product.productDescription} cur={product.currency} symbol={product.symbol} backgroundColor={this.props.style}/>
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
    style: PropTypes.object.isRequired

}

const mapStateToProps = state =>{
    return{
        financialProd: state.financialProd.finProducts,
        style: state.style
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
