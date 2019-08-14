import React, { Component } from 'react';
import { Row, Col, Icon, Button,Switch,Select,Table, Radio,Divider } from 'antd';
import './../../css/Page18.css';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {SUBACC_MODEL} from './../../actions/types';
import {getSubAccountModels, matchingInstrumentModel, radioButton, createNewSubModel} from './../../actions/SubaccountActions';
import Page19_selectModelTable from './Page19_selectModelTable';
import Page19_createBespokeModel from './Page19_createBespokeModel';



const { Option, OptGroup } = Select;

 class Page19 extends Component {
     constructor(props){
         super(props)

         this.state = { 
             
            radiovalue: 1,
            bespokeModel: true,
            allocations:''
        
        }

        //  this.clickSelect = this.clickSelect.bind(this)
         this.onRadioChange = this.onRadioChange.bind(this)
         this.handleSwitchClick = this.handleSwitchClick.bind(this)
         this.handleCreateSubModel = this.handleCreateSubModel.bind(this)
     }
     // check if every input field is fulfilled and allocation is 100%. if yes create account button available if not disabled

    
     handleSwitchClick(){
         this.setState({ bespokeModel:!this.state.bespokeModel})
     }
     onRadioChange = event => {

        console.log('radio checked', event.target.value);
        this.setState({
          radiovalue: event.target.value  
         })

         let radiovalue = event.target.value;
         console.log('radiovalue______',radiovalue)

         if(radiovalue === 2){
             let radioMessage = "Reinvest any income into the underlying model."
             this.props.radioButton(radioMessage)
         }else if(radiovalue === 1){
             let radioMessage = "Use as available cash."
             this.props.radioButton(radioMessage)
         }
        
    }
    //handle CreateSubAccount button send all required data to submit data for subAccount
    handleCreateSubModel(){
        const newSubModel = {
            modelName: this.props.ModelName,
            modelDate: this.props.ModelDate,
            sum: this.props.sum,
            radio: this.props.radio

        }
        this.props.createNewSubModel(newSubModel)
    }
 
    render() {

        //bring all required stuff from redux
        const modelName = this.props.ModelName;
        const modelDate = this.props.ModelDate;
        const sum = this.props.sum;
        const radio = this.props.radio

        console.log('all required stuff____',modelName ,modelDate , sum , radio  )

        let SubmitButton;

        if(modelName !== "" && modelDate !== "" && sum === 100 && radio !== ""  ){

            SubmitButton = <Button style={{backgroundColor:'rgb(64, 179, 104)',color:'black',width:'30%', height:'50px'}} onClick={this.handleCreateSubModel}>Create Sub-Account</Button>
        }else{

            SubmitButton = <Button disabled={true} style={{backgroundColor:'grey',color:'white',width:'30%', height:'50px'}} >Cannot Submit</Button>
        }


        const bespokeModel = this.state.bespokeModel;
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
                                <Col span={2}><Switch defaultChecked onClick={this.handleSwitchClick}/></Col>   
                            </Row>
                            <Row>
                                <Col span={24}>{bespokeModel? null:(
                                <Row>
                                <Col span={18}><p style={{float:'left'}}>Please create a bespoke model by adding instruments and setting the allocation values to reach a total of 100%.</p></Col>
                                
                                <Col span={6}>
                                    <p style={{color:'#ffc107',backgroundColor:'#dc3545',borderRadius:'5px',fontWeight:'bold'}}>Creating BespokeModel Mode</p>
                                </Col>
            
                            </Row>
                                
                                )}</Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                { bespokeModel? (
                    <Page19_selectModelTable data={data} columns={columns} subaccounts={subaccounts}/>
                ):(
                    <Page19_createBespokeModel columns={columns} data={data} subaccounts={subaccounts}/>  
                )}


                <div style={{maxWidth:'1100px',margin:'auto'}}>
                <Divider />
                    <Row>
                        <Col span={12}>
                            <Row>
                                <Col span={2}>
                                <Icon type="vertical-right" style={{float:'left'}} className='p18p_icon' />
                                </Col>
                                <Col span={10}><h5 className='text2'>Income Options</h5></Col>
                                <Col span={12}></Col>
                            </Row>
                        </Col>
                        <Col span={12}></Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <p style={{float:'left'}}>Please choose your preferred income option for this account.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                <Radio.Group onChange={this.onRadioChange} radiovalue={this.state.value}>
                                    <Radio value={1}>Use as available cash.</Radio>
                                    <Radio value={2}>Reinvest any income into the underlying model.</Radio> 
                                </Radio.Group>    
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}></Col>
                    </Row>
                    <Divider />
                    <Col span={24}>
                        <Row>
                            <Col span={12}></Col>
                            <Col span={12}>
                                {/* <Button disabled={true} style={{backgroundColor:'black',color:'white',width:'30%', height:'50px'}} size="large">Create Sub-Account</Button> */}
                                {SubmitButton}
                            </Col>
                        </Row>
                    </Col>
                </div>
            </div>
        )
    }
}
Page19.propTypes = {

    subbAccounts:PropTypes.array.isRequired,
    selectIntrument: PropTypes.func.isRequired,
    radioButton: PropTypes.func.isRequired,
    createNewSubModel: PropTypes.func.isRequired,

}
const mapStateToProps = state =>{
    return{
        subbAccounts: state.subAcc.subbAccounts,
        selectedInstruments: state.subAcc.selectedInstruments,
        ModelName: state.subAcc.ModelName,
        ModelDate: state.subAcc.ModelDate,
        sum: state.subAcc.sum,
        radio: state.subAcc.radio,
    }
}

export default connect(mapStateToProps,{getSubAccountModels,matchingInstrumentModel, radioButton, createNewSubModel}) (Page19);
