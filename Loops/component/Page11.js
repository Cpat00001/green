import React, { Component } from 'react';
import { Row, Col,Button } from 'antd';
import './../../css/Page11.css';
import {connect} from 'react-redux';
import {SHOWPRODUCTS}  from './../../actions/types';
import {showProducts,handleDelete} from './../../actions/prodActions';
import PropTypes from "prop-types";



 class Page11 extends Component {

componentDidMount(){

    this.props.showProducts()
}

handleDelete(id){

    console.log('was clicked productID:', id)
    this.props.handleDelete(id)
}


    render() {

        const {products} = this.props;
        console.log(products)
        const{name,description,value,id} = this.props;
        //const{id} = this.props.id;
        console.log('ProductID', this.props.id)



        return (
            <div className="gutter" >
                
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
                            {products.map(product=>(

                                        <Row>
                                        <Col span={2}></Col>
                                        <Col span={20} className="prod1">
                                            <p className='text1'>{product.name}</p>
                                            <p>ProductID: {product.id}</p>
                                            <p>Value:{product.value}</p>
                                            <Button type="danger" className="login-form-button" className='but1' onClick={this.handleDelete.bind(this,product.id)}>
                                                Delete {product.id}
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
    handleDelete: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    products: state.produkt.products
})

const mapDispatchToProps = dispatch =>({
    showProducts: () => dispatch({ type: SHOWPRODUCTS}),
    handleDelete: (id) => dispatch(handleDelete(id))

})
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Page11);





