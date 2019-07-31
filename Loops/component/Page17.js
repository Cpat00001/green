import React, { Component } from 'react';
import { Row, Col, Icon, Divider,Table } from 'antd';
import './../../css/Page16_17.css';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {modelsData, modelDetails} from './../../actions/Getdata';
import './../../css/Page16_17.css';


 class Page17 extends Component {


    componentDidMount(){
        this.props.modelsData();
        console.log(this.props.modelsData())
        this.props.modelDetails();


        // ################################

        const investors = this.props.contact;
        console.log('throw PAGE17 INVESTOR detailS',investors)

        const id = this.props.match.params;
        console.log('THROW ID page17', id)

        
        const match = async function(){

            console.log('INVESTORS',investors)
            console.log('ID',id)

            try{

                 const result = await investors.filter(investor => investor.id === id.id)
        
                console.log('RESULT PAGE17', result)

                if(result){
                    let name = result[0].name;
                    console.log('THROW NAME PAGE17', name)
                }else{
                    console.log('SORRY NAME NOT FOUND')
                }

            }catch(err){
                console.log('something went wrong', err.message)
            }  
        }
        match(id,investors);

        // ##################################

    }

    render() {

        

    
        const data = this.props.data3;
        //console.log(data)
        const dataSource = data;
        const model = this.props.modelName.name;
        //console.log(model)

        const mdtype = this.props.md.type;
        //console.log(mdtype)
        const mdAccount = this.props.md.accountId;
        //console.log(mdAccount)
        const currency = this.props.md.currency;

        // ########## user data
        const user = this.props.user
        //console.log('throw USER from page17',user)

         // ######## set gender and martialStatus

        const martialStatus = user.martialStatus;
        //console.log('MARTIAL STATUS',martialStatus)
        const gender = user.gender;
        //console.log('GENDER',gender)
        
        let ms;

            if(!martialStatus){
                ms = 'martialStatus not set';
            }else{
                ms = martialStatus;
                //console.log('Throw MS', ms)
            }
        let gen;
        if(!gender){
            gen = 'Gender not set'
        }else{
            gen = gender;
        }
        
        // set column in table 
        const columns = [
            {
                title:'Model',
                dataIndex:'model',
                key:'model'
            },
            {
                title:'Description',
                dataIndex:'description',
                key:'description'
            }
        ]



        return (
            <div>
                <Row>
                    
                    <div style={{maxWidth:'1100px',margin:'auto'}}>
                        <Col span={2} className='p17div2'></Col>
                        <Col span={2} className='p17div2'><span><Icon type="diff" className='p17icon1'/></span></Col>
                        <Col span={20} className='p17div2'><p><span>Details - </span><span>{mdAccount}</span></p></Col>
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
                                            <Col span={24}><h5>{mdtype}</h5></Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={24} style={{textAlign:'left'}}><p>Reference Nr.</p></Col>
                                            <Col span={24}><h5>{mdAccount}</h5></Col>
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
                                            <Col span={24}><h5>{user.name}</h5></Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={24} style={{textAlign:'left'}}><p>Currency</p></Col>
                                            <Col span={24}><h5>{currency}</h5></Col>
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
                                            <Col span={23}><h5><span>£</span>{user.contribution}</h5></Col>
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
                                <span><b>Direct Debit of <span>£500.00</span> every month.</b></span><br></br>
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
                            <Col span={24}><h5 className='p17txt4'>{model}</h5></Col>
                        <Table dataSource={dataSource} columns={columns} pagination={false} bordered={true} style={{padding:'20px', border:'1px solid pink', height:'auto', verticalAlign:'top'}} rowKey="urn"/>
                        </div>  
                    </Row>
                    <Row>
                        <Col span={22}><p className='p17txt1'>Pension Specific Information</p></Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <Col span={22}><p className='p17txt3'>Pension Detail</p></Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div className='p17div12'>
                            <Row>
                                <Col span={12}><p className='p17txt5'>Retirement Date</p></Col>
                                <Col span={12}><p className='p17txt5'>Pension Paid</p></Col>
                            </Row>
                            <Row>
                                <Col span={12}><p className='p17txt6'> - </p></Col>
                                <Col span={12}><p className='p17txt6'>Yearly(arrears)</p></Col>
                            </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={22}><p className='p17txt3'>Beneficieries</p></Col>
                        <Col span={2}></Col>
                    </Row>
                    <div className='p17div12'>
                        <Row>
                            
                            <Col span={1}><Icon type="user" className='p17icon3'/></Col>    
                            <Col span={23}><p className='p17txt6'>Dynamic title: {user.name}</p></Col>
                        </Row>
                        <Row>
                            <Col span={12}><p className='p17txt5'>{ms}</p></Col>
                            <Col span={12}><p className='p17txt5'>Allocation</p></Col>
                        </Row>
                        <Row>
                            <Col span={12}><p className='p17txt6'>{gen}</p></Col>
                            <Col span={12}><p className='p17txt6'>100%</p></Col>
                        </Row>
                    </div>
                    

                {/* below is ending div keeping value width:1100px */}
                </div>
            </div>
           
        )
    }
}
Page17.propTypes = {
    modelsData: PropTypes.func.isRequired,
    data3: PropTypes.array.isRequired,
    modelDetails: PropTypes.func.isRequired,
    md:PropTypes.object.isRequired,
    contact: PropTypes.array.isRequired,
    user:PropTypes.object.isRequired
}
const mapStateToProps = state =>{
    return{
        data3: state.data.data3,
        modelName:state.data.modelName,
        md: state.data.modelDetails,
        contact:state.contact.contacts,
        user: state.contact.contact
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        modelsData: ()=> dispatch(modelsData()),
        modelDetails: ()=> dispatch(modelDetails())
    }
}
export default connect( mapStateToProps, mapDispatchToProps) (Page17);
