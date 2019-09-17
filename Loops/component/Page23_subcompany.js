import React from 'react';
import { Row, Col,Icon,Input } from 'antd';
import {Link} from 'react-router-dom';


export default function Page23_subcompany(props) {

    //console.log(props)
    console.log('rzuc wybrancow:',props.selected)
    return (
            <Col xs={24} sm={24} md={6} lg={8} xl={8} className='div23_subComponent'>
                <Link to='#'>
                    <Row>
                        <Col span={24}>
                            <div className='div23_SBLogo'>
                            <img src={props.logo} style={{width:"100%",height:"100%"}}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            
                                <div key={props.id}>
                                    <h5 style={{fontSize:'18px',fontWeight:'bold', marginTop:'30px'}}>{props.brand}</h5>
                                    <p style={{fontSize:'12px',  marginTop:'5px'}}>{props.fname}</p>
                                </div>
                        </Col>
                    </Row>
                </Link>
            </Col>
    )
}
