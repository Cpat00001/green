import React, { Component } from 'react';
import { Row, Col, Icon, Button,Switch,Select,Table } from 'antd';
import './../../css/Page18.css';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {SUBACC_MODEL} from './../../actions/types';
import {getSubAccountModels} from './../../actions/SubaccountActions';


const { Option, OptGroup } = Select;

 class Page19 extends Component {
     constructor(props){
         super(props)

         this.state = {}

         this.clickSelect = this.clickSelect.bind(this)
     }
     componentDidMount(){
         this.props.getSubAccountModels();
         console.log('Page19 mounted',this.props)
     }

     clickSelect(value){
        console.log(`selected ${value}`);
     }
     
    render() {

        const subaccounts = this.props.subbAccounts;
        console.log(subaccounts)

        //###### temporary data for table >> later move to outersourec and call in async/await action

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
      ];

    // #########################################################################



        return (
            <div>
                <Row>
                    <Col xs={1} sm={1} md={1} lg={8} xl={8} style={{minHeight:'100px',height:'auto', backgroundColor:'grey'}}></Col>
                    <Col xs={22} sm={22} md={22} lg={8} xl={8} style={{minHeight:'100px',height:'auto', backgroundColor:'grey'}}>
                        <Row>
                            <Col span={24}><h5 style={{float:'left'}}>Create Sub-Account</h5></Col>
                            <Col span={24}>
                                <Row>
                                    <Col xs={24} sm={24} md={20} lg={20} xl={20}><p style={{float:'left'}}>Create a sub account (CHS) for primary account: Dynamic AO000000119</p></Col>
                                    <Col xs={24} sm={24} md={4} lg={4} xl={4}><Button style={{float:'right',right:'0px'}}><Icon type="close" /></Button></Col>
                                </Row>
                            </Col>
                        </Row>    
                    </Col>
                    <Col xs={1} sm={1} md={1} lg={8} xl={8} style={{minHeight:'100px',height:'auto', backgroundColor:'grey'}}></Col>
                </Row>
                <div style={{maxWidth:'1100px',margin:'auto'}}>
                    <Row style={{marginTop:'100px'}}>
                        <Col span={24}>
                            <Row>
                                <Col span={2}><Icon type="file-protect" className='p18p_icon' /></Col>
                                <Col span={8}><h5 className='text2'>Model Selection</h5></Col>
                                <Col span={6}></Col>
                                <Col span={6}><p style={{float:'right'}}>Create a bespoke Model:</p></Col>
                                <Col span={2}><Switch defaultChecked /></Col>   
                            </Row>
                            <Row>
                                <Col span={12}><p>Please choose from the list of existing models shown below.</p></Col>
                                <Col span={12}></Col>
                            </Row>
                            {/* dropdown list choose a model */}
                            <Row>
                                <Col span={12}>
                                <Select placeholder='Please Seleca a model...'  style={{ minWidth: '100%' }} onChange={this.clickSelect}>
                                        <OptGroup label="Modles">
                                            {/* zrob map przez dane jako value wstaw nazwe jako model nazwa wstaw nazwe */}
                                            {subaccounts.map((model,index)=>
                                                <Option value={model.model}>{model.model}</Option>
                                            )}
                                        {/* <Option value="jack"> Model AC XZC1456</Option>
                                        <Option value="lucy">Model X RFBC2314</Option> */}
                                </OptGroup>
                                </Select>
                                </Col>
                                <Col span={12}></Col>
                            </Row>
                            <Row style={{marginTop:'10px'}}>
                                <Col span={24}>
                                    <div>
                                        <Table columns={columns} dataSource={data} size="small" pagination={false} className='p19_table'/>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        {/* <Col span={12}></Col> */}

                    </Row>
                </div>
            </div>
        )
    }
}
Page19.propTypes = {

    subbAccounts:PropTypes.array.isRequired,
    getSubAccountModels: PropTypes.func.isRequired,

}
const mapStateToProps = state =>{
    return{
        subbAccounts: state.subAcc.subbAccounts
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        getSubAccountModels: ()=>{dispatch(getSubAccountModels()) }
    }
}
export default connect(mapStateToProps,mapDispatchToProps ) (Page19);
