import React from 'react';
import { Row, Col,Icon,Input } from 'antd';
import {Link} from 'react-router-dom';


export default function Page23_subcompany(props) {

    //console.log(props)
    return (
            <Col span={6} className='div23_subComponent'>
                <Link to='#'>
                    <Row>
                        <Col span={24}>
                            <div className='div23_SBLogo'></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            
                                <div key={props.id}>
                                    <h5 style={{fontSize:'12px', marginTop:'5px'}}>{props.brand}</h5>
                                    <p style={{fontSize:'12px',  marginTop:'5px'}}>{props.fname}</p>
                                </div>
                        </Col>
                    </Row>
                </Link>
            </Col>
              
    )
}
