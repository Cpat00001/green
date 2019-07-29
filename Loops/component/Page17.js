import React, { Component } from 'react';
import { Row, Col, Icon, Divider,Table } from 'antd';
import './../../css/Page16_17.css';


 class Page17 extends Component {
    render() {
        return (
            <div>
                <Row>
                    
                    <div style={{maxWidth:'1100px',margin:'auto'}}>
                        <Col span={2} className='p17div2'></Col>
                        <Col span={2} className='p17div2'><span><Icon type="diff" className='p17icon1'/></span></Col>
                        <Col span={20} className='p17div2'><p>Props Dynamic Product name</p></Col>
                    </div>
                </Row>
                 <div className='p17div1'>
                    <Row>
                        <Col span={6} className='div3'>
                            <div className='p17div4'>
                                <Row>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={24} style={{textAlign:'left'}}><p>Type</p></Col>
                                            <Col span={24}><h5>Hubwise ISA</h5></Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={24} style={{textAlign:'left'}}><p>Reference Nr.</p></Col>
                                            <Col span={24}><h5>HW000000394</h5></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={6} className='div3'>
                            <div className='p17div5'>
                                <Row>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={24} style={{textAlign:'left'}}><p>Props Account Name</p></Col>
                                            <Col span={24}><h5>Props User Name</h5></Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={24} style={{textAlign:'left'}}><p>Currency</p></Col>
                                            <Col span={24}><h5>GBP</h5></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={6} className='div3'>
                            <div className='p17div6'>
                                <Row>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={24}><p>text text text</p></Col>
                                            <Col span={24}><h5>text text text</h5></Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={24} style={{textAlign:'left'}}><p>Created</p></Col>
                                            <Col span={24}><h5>Props Date Product</h5></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={6} className='div3'>
                        <div className='p17div7'>
                                <Row>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={23} style={{textAlign:'left'}}><p>Payments In/yr</p></Col>
                                            <Col span={23}><h5><span>£</span>6000</h5></Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={23} style={{textAlign:'left'}}><p>Payments Out/yr</p></Col>
                                            <Col span={23}><h5><span>£</span>0.0</h5></Col>
                                        </Row>   
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col span={6}><p className='p17txt1'>Product Subscription</p></Col>
                        <Col span={18}></Col>
                    </Row>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={22}>
                            <div className='p17div8'>
                                <p className='p17txt2'>
                                (Combined subscription capabilty in current tax year)<br></br>
                                You have subscribed <span><b>£20,000.00</b></span> and have no more subscription capability until the next tax year.
                                </p>
                            </div>
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                    <Row>
                        <Col span={22}><p className='p17txt1'>Regular Payments In</p></Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={10}>
                            <div className='p17div9'>
                               some green pillars here                             
                            </div>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={9}>
                            <div className='p17div10'>
                                <p>
                                <span><b>Direct Debit of <span><h5>£500.00</h5></span> every month.</b></span><br></br>
                                Payment will be made by Direct Debit from account number: 44500960 and sort code: 772725. This payment will start on or around 18th Aug 19.
                                </p>
                            </div>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <Col span={22}><p className='p17txt1'>Regular Withdrawals</p></Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={22}>
                            <div className='p17div11'>
                                <Icon type="left-square" className='p17icon2'/>     
                                <p>No regular withdrawals are active on this account at present</p>
                            </div>
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                    <Row>
                        <Col span={22}><p className='p17txt1'>Income</p></Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={22}>
                            <div className='p17div8'>
                                <p className='p17txt2'>
                                The account is currently set to reinvest any income into the underlying portfolio holdings.
                                </p>
                            </div>
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                    <Row>
                        <Col span={22}><p className='p17txt1'>Portfolio</p></Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <div className='p17div8'>
                            <Col span={24}><p className='p17txt3'>Model</p></Col>
                            <Col span={24}><h5 className='p17txt4'>Props Dynamic Model Name</h5></Col>
                        <Table />
                        </div>  
                    </Row>

                {/* below is ending div keeping value width:1100px */}
                </div>
            </div>
           
        )
    }
}
export default Page17;
