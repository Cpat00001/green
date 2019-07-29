import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { Row, Col, Table } from 'antd';
import './../../css/Page16_17.css';

 class Page15 extends Component {
    constructor(prop){
        super(prop)
        this.state = {

        }
    }

    abc(){
        this.props.dane.forEach(function(elem){
            console.log(elem)  
            return <p>elem.name</p>
        })
    }
    
    render() {
    console.log(this.props.dane)
    console.log(this.props.backColor)
    console.log('throw profit ',this.props.dane.profit)

    const columns = [
        {
          title: 'Cost',
          dataIndex: 'cost',
        },
        {
          title: 'Profit',
          dataIndex: 'profit',
        },
      ];
    const data = this.props.dane
    

        return (
            <div>
                <div style={{backgroundColor: this.props.backgroundColor1, height:'auto',width:'450px'}}>
                     <p>page15</p>
                     <h5>Display name/date:</h5>
                     {this.props.dane.map(elem => ( <h5>{elem.name}</h5>))}
                     {/* {this.props.dane.forEach(function(elem){ const xxx = <p>elem.name</p> })} */}
                     {/* {this.props.dane.map(elem => <h5>{elem.name}</h5>)} */}
                     <h5>Display cost:</h5>
                     {this.props.dane.map(elem => (

                        <Page16 elem={elem} color={this.props.backColor} backColor={this.props.backgroundColor2}/>

                     ))}
                     <h5>Table</h5>
                     <Table dataSource={data} columns={columns} pagination={false} bordered={true} style={{padding:'20px', border:'1px solid pink', height:'auto', verticalAlign:'top',borderBottom:'3px solid purple'}} />
                     
                    
                    
                 <div style={{backgroundColor: this.props.backColor , height:this.props.height, width: this.props.width, marginTop:'300px'}}>
                     <p>div 2</p>
                 </div>
         </div>
                
            </div>
        )
    }
}
Page15.propsTypes = {
        backgroundColor1: PropTypes.string.isRequired,
        backColor: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        dane:PropTypes.array.isRequired,
        backgroundColor2: PropTypes.string.isRequired


    
    }
    
    const mapStateToProps = state => {
        return{
            backgroundColor1 : state.style.backgroundColor1,
            backgroundColor2:state.style.backgroundColor2,
            backColor: state.style.backColor,
            height: state.style.height,
            width:state.style.width,
            dane: state.style.name
        }
    }


export default connect(mapStateToProps) (Page15);



function Page16(props) {

    const d = props.elem;
    // console.log('throw d', d)

    const columns = [
        {
          title: 'Cost',
          dataIndex: 'cpst',
        },
        {
          title: 'Profit',
          dataIndex: 'profit',
        },
      ];
    const data = [d];
    console.log(data)
    

    return (
        <div>
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <div style={{backgroundColor:props.backColor, height:'auto',width:'auto'}}>
                        <h5 style={{color:props.color}}>{props.elem.cost}</h5>
                    </div>
                </Col>
                <Col span={2}></Col>
            </Row>
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    {/* <Table columns={columns} dataSource={data} /> */}
                </Col>
                <Col span={2}></Col>

            </Row>
        </div>
    )
}

