import React, { Component } from 'react'
import './css/greenstyle.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addProduct} from './actions/ProductActions';
import uuid from 'uuid';
import { getContacts } from './actions/ContactActions';
import { Icon, Row,Col,Tooltip, Button } from 'antd';
import './css/product3.css';



 class Product3 extends Component {

    state={}

    addProduct = (name) => {

      const {value} = this.props;
      //create newContact
    const newProduct = {
          id: uuid(),
          name,
          value,
          date: new Date()
  }
  this.props.addProduct(newProduct)
      //console.log(name)

    }

   

  render() {

    const {investor} = this.props;
    console.log('INVESTOR NAME FROM PRODUCT 3',investor)

    const {id,name, description, value, contacts} = this.props;
    //console.log(name)
    console.log('Products 2 , contacts:', contacts[0].id )
    //const {contacts} = this.props;
    console.log('produkty z product3,',contacts)
    const date = this.props.date;
    const properDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    console.log('data zalozenia produktu',date)
    console.log('data zalozenia produktu',properDate)
    
    const text = <span>Edit</span>;
    const text2 = <span>Delete</span>;
    return (
      <div>
                   <Row className='cl1'>
                   <Row >
                       <Col span={24}>
                           <Row>
                               <Col span={12}>
                                   <Row>
                                       <Col span={12}>
                                            <p className='product3_text'>{name}</p>
                                       </Col>
                                       <Col span={12}>
                                            <p className='product3_text'><b>{investor}</b></p>
                                       </Col>
                                   </Row>   
                               </Col>
                               <Col span={10} offset={2}>
                               <Row>
                                    <Col span={12}>
                                        <Tooltip placement="bottom" title={text}>
                                                        <Button className='product3button'>
                                                            <Icon type="edit" className='product3icon1'  />
                                                        </Button>
                                        </Tooltip>
                                    </Col>
                                    <Col span={12}>
                                        <Tooltip placement="bottom" title={text2}>
                                                    <Button className='product3button'>
                                                        <Icon type="delete" className='product3icon1' />
                                                    </Button>
                                        </Tooltip>        
                                    </Col>
                               </Row>
                           </Col>
                           </Row>
                       </Col>
                       </Row>
                       <Row>
                           <Col span={8} offset={0}>
                                <p className='product3_text'style={{float:'left'}}>Value: ${parseFloat(value).toFixed(2)}</p>
                           </Col>
                           <Col span={8} offset={0}>
                                <p className='product3_text'style={{float:'left'}}>Started: {properDate}</p>
                           </Col>
                           
                       </Row>
                       </Row>
                   
        
      </div>
    )
  }
}
Product3.propTypes = {
  addProduct: PropTypes.func.isRequired,
  //product: PropTypes.object.isRequired,
  getContacts: PropTypes.func.isRequired
}
const mapStateToProps = state =>({
  products: state.product.products,
  contacts: state.contact.contacts
})

export default connect(
  mapStateToProps,
  {addProduct, getContacts}
) (Product3);

