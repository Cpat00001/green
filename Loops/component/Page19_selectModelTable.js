import React, { Component } from 'react';
import { Row, Col, Icon, Button,Switch,Select,Table, Radio,Divider } from 'antd';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {getSubAccountModels, matchingInstrumentModel} from './../../actions/SubaccountActions';


 class Page19_selectModelTable extends Component {
     constructor(props){
         super(props)

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

        const subaccounts = this.props.subaccounts;
        console.log('SUBACCOUNTS', subaccounts)
        const data = this.props.data;
        const columns = this.props.columns;
        // line below Option, OptGroup come from andt select you need it to have working dropdownlist
        const { Option, OptGroup } = Select;


        return (
            <div>
                 {/* beginning of subComponent */}
                 <div style={{maxWidth:'1100px',margin:'auto'}}>

                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={12}><p style={{float:'left'}}>Please choose from the list of existing models shown below.</p></Col>
                                <Col span={12}></Col>
                            </Row>
                        </Col>

                        
                            {/* switch change select a model and create a model */}
                        

                            {/* dropdown list choose a model */}
                            <Col span={24}>
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
                        
                    </Row>
                    </div>
                    {/* end of subComponent */}
            </div>
        )
    }
}
Page19_selectModelTable.propTypes = {

    
    getSubAccountModels: PropTypes.func.isRequired,
    matchingInstrumentModel: PropTypes.func.isRequired,
    
}
const mapStateToProps = state =>{
    return{
        
        Modelinstruments: state.subAcc.Modelinstruments,
    }
}
export default connect(mapStateToProps,{getSubAccountModels,matchingInstrumentModel}) (Page19_selectModelTable);
 
