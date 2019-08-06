import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import './../../css/Page18.css';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

 class Page18_Product extends Component {
     constructor(props){
         super(props)
         
         this.state = {
            displaying: false
         };

         this.handleClick = this.handleClick.bind(this);
     }
     handleClick(){
        this.setState(state=>({ displaying:!state.displaying}))
        console.log('wrench clicked')

     }



    render() {

        const desc = this.props.desc;
        //console.log(desc)
        const cur = this.props.cur;
        //console.log(cur)
        const symbol = this.props.symbol;
        //console.log(symbol)
        const backgroundColor = this.props.backgroundColor;
        //console.log(backgroundColor)


        let matchColor;
            if(symbol === 'PG'){
                matchColor = backgroundColor.backgroundColor1;
            }else if(symbol === 'BC'){
                matchColor = backgroundColor.backgroundColor2;
            }else if(symbol === 'SEG'){
                matchColor = backgroundColor.backColor;
            }else{
                matchColor = backgroundColor.backgroundColor3;
            }
            console.log(matchColor)
            console.log(symbol)

        return (
            
            <div style={{border:'1px solid grey', backgroundColor:matchColor,height:'auto',minHeight:'100px',marginBottom:'10px',borderRadius:'5px',boxShadow:'3px 3px #888888'}}>
             <Row>
                 <Col span={2}></Col>
                 <Col span={20}>
                     <Row style={{marginTop:'10px'}}>
                         <Col span={8}>
                         <h5 style={{float:'left', fontSize:'20px'}} className='text1'>{symbol}</h5>{' '}
                         </Col>
                         <Col span={8}>
                             <p className='text1'>{desc}</p>
                         </Col>
                         <Col span={8}>
                             <h5 className='text1' style={{float:'right'}} >{cur}</h5>
                         </Col>
                     </Row>
                 </Col>
                 <Col span={2}></Col>
             </Row>
             <Row> 
                 <Col span={2}></Col>
                 <Col span={20}>
                     <Row gutter={16} style={{marginTop:'20px',marginBottom:'10px', backgroundColor:'white', borderRadius:'3px', minHeight:'100px',padding:'10px'}}>
                         <Row>
                             <Col span={24}>
                                 <Row style={{marginTop:'30px'}}>
                                     <Col span={16}><p style={{float:'left',fontWeight:'6'}}>Advised Account | Uses Model</p></Col>
                                     <Col span={6}><p style={{float:'right',fontWeight:'6'}}>Cash: £30,000.00</p></Col>
                                 </Row>
                             </Col>
                         </Row>
                        <Row> 
                        
                         <Col span={2} className='p18p_icon'>
                             <Icon type="dashboard" style={{ fontSize: '30px', color: '#08c' }}/>
                         </Col>
                         <Col span={2} className='p18p_icon'>
                             <Icon type="inbox" style={{ fontSize: '30px', color: '#08c' }}/>
                         </Col>
                         <Col span={2} className='p18p_icon'>
                             <Icon type="down-square" style={{ fontSize: '30px', color: '#08c' }}/>
                         </Col>
                         <Col span={2} className='p18p_icon'>
                             <Icon type="table" style={{ fontSize: '30px', color: '#08c' }}/>
                         </Col>
                         <Col span={2}>
                             <Icon type="interaction" style={{ fontSize: '30px', color: '#08c' }}/>
                         </Col>

                         <Col span={10}></Col>
                         <Col span={2} className='p18p_icon' style={{float:'right'}}>
                             <Icon type="tool" theme="twoTone" style={{ fontSize: '30px', color: '#08c' }} onClick={this.handleClick}/>
                         </Col>
                         </Row>
                         {this.state.displaying ? (
                         
                         
                         <div style={{marginTop:'15px'}}>
                             <Col span={24}>
                             <Row>
                                <div style={{width:'100%',height:'200px',backgroundColor:'#286966'}}>
                                 <Col span={12}>
                                    <Row>
                                        <Col span={2}><Icon type="medicine-box" className='p18p_icon' style={{margin:'5px', fontSize:'20px'}}/></Col>
                                        <Col span={22} className='text1'>Create Sub-Account</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}><Icon type="medicine-box" className='p18p_icon' style={{margin:'5px', fontSize:'20px'}}/></Col>
                                        <Col span={22} className='text1'>Create Sub-Account</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}><Icon type="medicine-box" className='p18p_icon' style={{margin:'5px', fontSize:'20px'}}/></Col>
                                        <Col span={22} className='text1'>Create Sub-Account</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}><Icon type="medicine-box" className='p18p_icon' style={{margin:'5px', fontSize:'20px'}}/></Col>
                                        <Col span={22} className='text1'>Create Sub-Account</Col>
                                    </Row>
                                 </Col>
                                 <Col span={12}>
                                    <Row>
                                        <Col span={2}><Icon type="medicine-box" className='p18p_icon' style={{margin:'5px', fontSize:'20px'}}/></Col>
                                        <Col span={22} className='text1'>Create Sub-Account</Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}><Icon type="medicine-box" className='p18p_icon' style={{margin:'5px', fontSize:'20px'}}/></Col>
                                        <Col span={22} className='text1'>Create Sub-Account</Col>
                                    </Row>
                                    <Link to='/Loops/component/Page19/'>
                                        <Row>
                                            <Col span={2}>
                                                    <Icon type="medicine-box" className='p18p_icon' style={{margin:'5px', fontSize:'20px'}}/>
                                            </Col>
                                            <Col span={22} className='text1'>Create Sub-Account</Col>
                                        </Row>
                                    </Link>
                                 </Col>
                                </div>
                             </Row>
                         </Col>

                         </div> 
                         ):null}
                     </Row>
                 </Col>
                 <Col span={2}></Col>
             </Row>
         </div>



        )
    }
}
Page18_Product.propTypes = {

}

const mapStateToProps = state =>{

    return{

        financialProd: state.financialProd.finProducts,
        style: state.style
    }  
}


export default connect(mapStateToProps,null) (Page18_Product);



// dzialajacy caly komponent ale functional...musze go zrobic na Class

// import React from 'react';
// import { Row, Col, Icon } from 'antd';
// import './../../css/Page18.css';


// function Page18_Product({desc,cur,symbol,backgroundColor}) {
 

//     console.log(desc)
//     console.log(backgroundColor)
//     console.log('podaj backgroundcolor1 >> #44b3ae',backgroundColor.backgroundColor1)
    

    
//             let matchColor;
//             if(symbol === 'PG'){
//                 matchColor = backgroundColor.backgroundColor1;
//             }else if(symbol === 'BC'){
//                 matchColor = backgroundColor.backgroundColor2;
//             }else if(symbol === 'SEG'){
//                 matchColor = backgroundColor.backColor;
//             }else{
//                 matchColor = backgroundColor.backgroundColor3;
//             }
//             console.log(matchColor)
//             console.log(symbol)
    

//     return (
//         <div style={{border:'1px solid grey', backgroundColor:matchColor,height:'auto',minHeight:'100px',marginBottom:'10px',borderRadius:'5px',boxShadow:'3px 3px #888888'}}>
//             <Row>
//                 <Col span={2}></Col>
//                 <Col span={20}>
//                     <Row style={{marginTop:'10px'}}>
//                         <Col span={8}>
//                         <h5 style={{float:'left', fontSize:'20px'}} className='text1'>{symbol}</h5>{' '}
//                         </Col>
//                         <Col span={8}>
//                             <p className='text1'>{desc}</p>
//                         </Col>
//                         <Col span={8}>
//                             <h5 className='text1' style={{float:'right'}} >{cur}</h5>
//                         </Col>
//                     </Row>
//                 </Col>
//                 <Col span={2}></Col>
//             </Row>
//             <Row> 
//                 <Col span={2}></Col>
//                 <Col span={20}>
//                     <Row gutter={16} style={{marginTop:'20px',marginBottom:'10px', backgroundColor:'white', borderRadius:'3px', minHeight:'100px',padding:'10px'}}>
//                         <Row>
//                             <Col span={24}>
//                                 <Row style={{marginTop:'30px'}}>
//                                     <Col span={16}><p style={{float:'left',fontWeight:'6'}}>Advised Account | Uses Model</p></Col>
//                                     <Col span={6}><p style={{float:'right',fontWeight:'6'}}>Cash: £30,000.00</p></Col>
//                                 </Row>
//                             </Col>
//                         </Row>
//                        <Row> 
                        
//                         <Col span={2} className='p18p_icon'>
//                             <Icon type="dashboard" style={{ fontSize: '30px', color: '#08c' }}/>
//                         </Col>
//                         <Col span={2} className='p18p_icon'>
//                             <Icon type="inbox" style={{ fontSize: '30px', color: '#08c' }}/>
//                         </Col>
//                         <Col span={2} className='p18p_icon'>
//                             <Icon type="down-square" style={{ fontSize: '30px', color: '#08c' }}/>
//                         </Col>
//                         <Col span={2} className='p18p_icon'>
//                             <Icon type="table" style={{ fontSize: '30px', color: '#08c' }}/>
//                         </Col>
//                         <Col span={2}>
//                             <Icon type="interaction" style={{ fontSize: '30px', color: '#08c' }}/>
//                         </Col>

//                         <Col span={10}></Col>
//                         <Col span={2} className='p18p_icon' style={{float:'right'}}>
//                             <Icon type="tool" theme="twoTone" style={{ fontSize: '30px', color: '#08c' }}/>
//                         </Col>
                        
//                         </Row>
//                     </Row>
//                 </Col>
//                 <Col span={2}></Col>

//             </Row>
//         </div>
//     )
// }
// export default Page18_Product;
