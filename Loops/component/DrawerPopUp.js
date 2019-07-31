import React, { Component } from 'react';
import { Row, Col,Button , Icon, Drawer, Form, Input, Table} from 'antd';
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import './../../css/Page11.css';
import DrawerChart from './DrawerChart'
import Product3 from './../../Product3';
import Replacement from './Replacement';
import {Link} from 'react-router-dom';


// import {fetchData} from './../../actions/fetchDataActions';
//import {FETCH_DATA} from './../../actions/types';

 class DrawerPopUp extends Component {
     constructor(props){
         super(props)

         this.state={
             
            icon1: true,
        
        }

         this.state = { visible: this.props.visible}
         this.onClose = this.onClose.bind(this)
         this.changePic1 = this.changePic1.bind(this)
         //this.fetchData = this.fetchData.bind(this)
     }
    
     changePic1(){
         //console.log('icon was clicked')
         this.setState(state =>({ icon1: !state.icon1}))
         //console.log('this.state.icon1:',this.state.icon1)
     }

     onClose(){
        this.setState({visible: false})
         //console.log('close button was clicked')
     }

    render() {

        //console.log('throw products to display:', this.props.products)
        //console.log('throw props from parent', this.state.visible)
        //console.log('data for table: this.props.chart1', this.props.chart1)

        const id = this.props.investor[0].id;
        console.log('throw this.props.investor',this.props.investor[0].id)

        const products = this.props.products;    

        let button;
        if(products.length > 0){

            button = <Col span={20}>
                                
            {/* <div style={{backgroundColor:'rgb(209, 218, 232)', height:'200px', width:'100%', marginTop:'50px'}} className='productList'> */}
            <div className='productList'>
                <h5>List of your products</h5>
                {products.map((product,index) => 
                <Product3 
                            
                    key={index} key={index}
                    name={product.name}
                    value={product.value}
                    date={product.date}/> )}
            </div>
        </Col>

        }else{

            button = <Replacement />

        }



        const dataSource = this.props.chart1;

        const columns = [
            {
                title: 'Date',
                dataIndex: 'date',
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
            <div >
                <Drawer 
                        title="Find radioactive icon"
                        width={720}
                        visible={this.state.visible}
                        onClose={this.onClose}    
                        >

                        <div style={{color:'red',backgroundColor:'rgb(209, 218, 232)', height:'100%',padding:'10px'}}>
                        <h5>PopUp Drawer</h5>
                        <Row style={{padding:'10px'}}>
                            <Col span={2}></Col>
                            <Col span={6} onClick={this.changePic1} className='drawiconBackground'>{this.state.icon1? (<Icon type="table" className='drawericon'/>) : <Icon type="fund" className='drawericon'/> }</Col>
                            {/* <Col span={5}><Icon type="snippets" className='drawericon' onClick={this.fetchData}/></Col> */}
                            <Link to={`/Loops/component/Page17/${id}`}>
                                <Col span={6} className='drawiconBackground'><Icon type="snippets" className='drawericon'/></Col>
                            </Link>
                            
                            <Link to={`/Loops/component/Page12`}>
                                    <Col span={6} className='drawiconBackground'><Icon type="user" className='drawericon' /></Col>
                            </Link>
                            <Col span={2}></Col>
                        </Row>
                        <Row>
                                <Col span={2}></Col>
                                {/* <Col span={14}>{this.state.icon1? (<div style={{backgroundColor:'#69c0ff',height:'300px',width:'100%'}}><h5>Chart</h5></div>): <p>Table</p>}</Col> */}
                                <Col span={20}>{this.state.icon1? (<div style={{backgroundColor:'rgb(209, 218, 232)',height:'300px',width:'100%'}}><DrawerChart dataSource={dataSource}/></div>): <Table dataSource={dataSource} columns={columns} pagination={false} className='table1'/>}</Col>
                                <Col span={2}></Col>
                        </Row>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={20}>{button}</Col>
                            <Col span={2}></Col>

                        </Row>
                        <Row style={{height:'50px', marginTop:'100px'}}>
                            <Col span={14}></Col>
                            <Col span={4}><Button type="primary">Primary</Button></Col>
                            <Col span={4}><Button type="danger">Brexit</Button></Col>
                            <Col span={2}></Col>


                        </Row>

                        </div>        
                </Drawer>
                
            </div>
        )
    }
}
DrawerPopUp.propTypes = {
    //fetchData: PropTypes.func.isRequired
    // contact: PropTypes.array.isRequired
}
const mapStateToProps = state =>({
    //data2: state.data2.dataChart
})
const mapDispatchToProps = dispatch =>{
    return{
        //fetchData: () => dispatch({type: FETCH_DATA})
    }
}

export default DrawerPopUp;
