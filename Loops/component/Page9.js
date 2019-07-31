import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './../../css/Page9.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {pullData}  from './../../actions/Getdata';
import { Table,Button } from 'antd';
import Page10 from './Page10';

 class Page9 extends Component {


    componentDidMount(){

        this.props.pullData();
        console.log(this.props.pullData())
    }

    render() {
        const data2 = this.props.data2
        console.log(data2)
        const normalState = this.props.value
        console.log(normalState)

        const dataSource = data2;
        const columns = [
            {
                title:'Date',
                dataIndex:'date',
                key:'date'
            },
            {
                title:'Description',
                dataIndex:'description',
                key:'description'
            },
            {
                title:'Value',
                dataIndex:'value',
                key:'value'
            },
            {
                title:'Balance',
                dataIndex:'balance',
                key:'balance'
            }
        ]


        return (
            <div>
                <Row>
                    <Col span={12} className='div1'></Col>
                    <Col span={12} className='div2'></Col>
                </Row>


                <Page10 />


                <Row style={{marginBottom:'100px'}}>
                    <Col span={2} className='div3'></Col>
                    <Col span={20} className='div4'>
                        <h5>table with data from API</h5>
                        <Table dataSource={dataSource} columns={columns} pagination={{pageSize:50}}/>
                    </Col>
                    <Col span={2} className='div3'></Col>
                </Row>
                <Row>
                    <Col span={24} className='div5'><h5>Footer</h5>
                    </Col>
                </Row>
            </div>
        )
    }
}

Page9.propTypes = {
    normalState: PropTypes.func.isRequired,
    value: PropTypes.object.isReuired


}

const mapStateToProps = state => ({
    data2: state.data.data2,
    value: state.value.value
})

export default connect(
    mapStateToProps,
    {pullData}
) (Page9);


// wszystkie wolanie akcji i props robie teraz w parent i  podam do child



