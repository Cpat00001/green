import React, { Component } from 'react';
import { Row, Col,Button , Icon,Drawer,Form, Input} from 'antd';
import './../../css/Page11.css';
import {connect} from 'react-redux';
import {SHOWPRODUCTS}  from './../../actions/types';
import {showProducts,handleDelete} from './../../actions/ProductActions';
import PropTypes from "prop-types";
import DrawerPopUp from './DrawerPopUp';


import {FETCH_DATA, GET_PRODUCTS} from './../../actions/types';
import {fetchData} from './../../actions/fetchDataActions';
import {getProducts} from '../../actions/ProductActions';


 class Page11 extends Component {
     constructor(props){
         super(props)

         this.state = { visible : false}
         this.handleMenu = this.handleMenu.bind(this)
         
     }


handleMenu(){
    console.log('Menu button was clicked')
    this.setState({ visible: !this.state.visible })
    console.log(this.state.visible)
}

componentDidMount(){

    this.props.showProducts();
    this.props.fetchData();
    console.log(this.props)
    this.props.getProducts()
}

handleDelete(id){

    console.log('was clicked productID:', id)
    this.props.handleDelete(id)
}


    render() {

        const {products} = this.props;
        console.log(products)
        const{name,description,value,id,date} = this.props;
        //const{id} = this.props.id;
        console.log('ProductID', this.props.id)
        const {chart1} = this.props;
        console.log(chart1)

        return (
            <div className="gutter" >

                        {this.state.visible? 
                        <div>

                        <DrawerPopUp visible={this.state.visible} chart1={chart1} products={products}/>
                        
                        </div>
                        
                        : ''}
                        


                    <Row style={{height:'50px',backgroundColor:'#44b3ae'}}>
                        <Col span={2}></Col>
                        <Col span={10}></Col>
                        <Col span={8}></Col>
                        <Col span={2}>Menu<Icon type="menu" style={{fontSize:'30px'}} onClick={this.handleMenu}/></Col>
                        <Col span={2}></Col>
                    </Row>
                    <Row className='row1'>
                        <h5>Page 11</h5>
                        <Col span={1}></Col>
                        <Col span={10} className='colLeft'>
                            <h5>Column left</h5>
                            <Row>
                                <Col span={20}className='col1'>Your wallet</Col>
                                <Col span={20}className='col2'>All charts with results here</Col>
                            </Row>
                        </Col>
                        
                        <Col span={10} className='colRight'>
                            <h5>Column right</h5>
                            {products.map((product,index)=>(

                                        <Row key={index}>
                                        <Col span={2}></Col>
                                        <Col span={20} className="prod1">
                                            <p className='text1'>{product.name}</p>
                                            <p>ProductName: {product.name}</p>
                                            <p>Value:{product.value}</p>
                                            {/* <p>Started: {product.date}</p> */}
                                            <Button type="danger" className="login-form-button" className='but1' onClick={this.handleDelete.bind(this,product.id)}>
                                            Delete {/*  {product.id} */}
                                            </Button>

                                        </Col>
                                        <Col span={2}></Col>
                                        </Row>

                            ))}
                            
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                
            </div>
        )
    }
}

Page11.propTypes = {
    products: PropTypes.array.isRequired,
    showProducts: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,

    fetchData: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    products: state.produkt.products,

    //data2: state.fetchData.dataChart,
    chart1:state.fetchData.dataChart,
    products: state.product.portfolio
})

const mapDispatchToProps = dispatch =>({
    showProducts: () => dispatch({ type: SHOWPRODUCTS}),
    handleDelete: (id) => dispatch(handleDelete(id)),

    fetchData: () => dispatch({type: FETCH_DATA}),
    getProducts:() => dispatch({ type: GET_PRODUCTS})

})
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Page11);





