import React, { Component } from 'react';
import { Row, Col, Icon, Button,Switch,Select,Table } from 'antd';
import './../../css/Page18.css';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {SUBACC_MODEL} from './../../actions/types';
import {getSubAccountModels, matchingInstrumentModel} from './../../actions/SubaccountActions';


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
        //send an action which wysyla payload to reducer reducer as case has got match BK35 or other name, and then filter reducer state where case === match in array[objects]
        this.props.matchingInstrumentModel(value)
        // this.props.selectIntrument(value)
     }
     
    render() {

        const subaccounts = this.props.subbAccounts;
        console.log(subaccounts)
        const  matchinInstruments = this.props;
        const selected = this.props.selectedInstruments;
        console.log('selected',selected)

        //###### data for table ###########################

    const columns = [
        {
          id: 'id',
          title: 'Instrument Id',
          dataIndex: 'instrumentId',
        },
        {
          id: 'id',
          title: 'Name',
          dataIndex: 'name',
        },
        {
          id: 'id',  
          title: 'Allocation',
          dataIndex: 'allocation',
        },
      ];
      const data = selected;


    // ######################################################



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
                                    <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                                        <Link to="/Loops/component/Page18/"><Button style={{float:'right',right:'0px'}}><Icon type="close" /></Button></Link>
                                    </Col>
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
                                <Select placeholder='Please Select a model...'  style={{ minWidth: '100%' }} onChange={this.clickSelect}>
                                        <OptGroup label="Modles">
                                            {/* zrob map przez dane jako value wstaw nazwe jako model nazwa wstaw nazwe */}
                                            {subaccounts.map((model,id)=>
                                                <Option value={model.model} key={id}>{model.model}</Option>
                                            )}
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
    matchingInstrumentModel: PropTypes.func.isRequired,
    selectIntrument: PropTypes.func.isRequired

}
const mapStateToProps = state =>{
    return{
        subbAccounts: state.subAcc.subbAccounts,
        Modelinstruments: state.subAcc.Modelinstruments,
        selectedInstruments: state.subAcc.selectedInstruments,
    }
}
// const mapDispatchToProps = dispatch =>{
//     return{
//         getSubAccountModels: ()=>{dispatch(getSubAccountModels())
//         matchingInstrumentModel:()=>{dispatch(matchingInstrumentModel())}    
//         }
//     }
// }
//export default connect(mapStateToProps,mapDispatchToProps ) (Page19);
export default connect(mapStateToProps,{getSubAccountModels,matchingInstrumentModel}) (Page19);
