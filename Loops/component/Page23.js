import React, { Component } from 'react';
import { Row, Col,Icon,Input } from 'antd';
import {connect} from 'react-redux';
import '../../css/Page23.css';
import Page23_subcompany from './Page23_subcompany';
import {getCompanies} from '../../actions/companies23Actions'
import PropTypes from 'prop-types';
const { Search } = Input;


 class Page23 extends Component {
     constructor(props){
         super(props)

         this.state = {}
     }

     componentDidMount(){
         this.props.getCompanies();
     }
    render() {

        const {company} = this.props;
        console.log(company)

        return (
            <Row>
                <Col xs={4} sm={4} md={4} lg={8} xl={8} className='div23'></Col>
                {/* central column >> all stuff inHere */}
                <Col xs={16} sm={16} lg={8} xl={8}>
                        <div style={{maxWidth:'1100px',margin:'auto'}}> 
                        <Row>
                            <Col span={24}>
                                <Row className='div23_1'>
                                    <Col span={24}><h5 className='txt23_1' >Launch company Session</h5></Col>
                                </Row>
                                <Row style={{marginTop:'10px'}}>
                                    <Col xs={24} sm={24}md={12} lg={12}>
                                        <Row>
                                            <Col span={16}><Icon type="shop" className='icon23_1'/><h5 className='txt23_2'>Companies</h5></Col>
                                            <Col span={8}></Col>
                                        </Row>
                                    </Col>
                                    <Col xs={24} sm={24}md={12} lg={12}><Search
                                        placeholder="input search text"
                                        onSearch={value => console.log(value)}
                                        className='div23_2'
                                    /></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{marginTop:'60px'}}>
                            <Col span={24}><Icon type="align-left" className='icon23_1'/><p className='txt23_3'><strong>205 Companies</strong></p></Col>
                        </Row>
                        {/* import subcomponent displaying companies */}
                        <Row>
                            <Col span={24}>
                                {company.map((comp,index)=>(
                                    <Page23_subcompany key={index} brand={comp.details.brandId} fname={comp.details.fullname}/>
                                ))}
                                
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={4} sm={4} md={4} lg={8} xl={8} className='div23'></Col>
            </Row>
            
        )
    }
}
Page23.propTypes = {
    getCompanies: PropTypes.func.isRequired,
    company:PropTypes.array.isRequired
}
const mapStateToProps = state => {
    return {
        company: state.company.companies
    }
}
export default connect(mapStateToProps,{getCompanies}) (Page23);
