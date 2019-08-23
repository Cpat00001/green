import React, { Component, PropTypes } from 'react'
import { Row, Col, Button, Select, Table, Input, Icon, InputNumber, Tooltip, DatePicker, Modal, Spin, Divider} from 'antd';
import moment from 'moment';
import { mms } from '../../../../api/endpoints'
import { apiGetRequest} from '../../../../api/request'


class ModelBuilder extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            modelName: "",
            modelDate: moment(),
            modelId: "",
            mode:"create",
            instruments: [],
            allocationTotal: 0,
            instrumentType: "-",
            searchText:"",
            searchType:"NAME",
            modeHeading:"New Model",
            searchModal: false,
            currentSearchPage: 1,
            searchValid: false,
            searchSkip: 0,
            searchCount: 0,
            searchLimit: 10,
            searchTotal: 0,
            searchInstruments:[],
            searching: false,
        };   
    }
    

    componentWillMount(){
        let updateState = {};
        let update = false;
        if(this.props.hasOwnProperty("modeHeading")){
            update = true;
            updateState.modeHeading = this.props.modeHeading
        }
        if(this.props.hasOwnProperty("mode")){
            update = true;
            updateState.mode = this.props.mode
        }
        if(this.props.hasOwnProperty("modelName")){
            update = true;
            updateState.modelName = this.props.modelName
        }
        if(this.props.hasOwnProperty("modelDate")){
            update = true;
            let modDate = moment();
            if(this.props.modelDate){
                if((this.props.modelDate+"").length == 8){
                    let date = this.props.modelDate + "";

                    modDate = moment(date.substring(0,4))
                }
            }
            
            updateState.modelDate = moment(modDate, "DD-MM-YYYY")
        }
        if(update){
            this.setState(Object.assign({},this.state.updateState))
        }
    }
    
    // MODAL Functions
    buylistTypeSelections(){
        let Items = [];
        const { localSettings } = this.props
        let customerId = localSettings.customer.customerId;
        if(localSettings.customer.hasOwnProperty("buyLists")){
            let buyList = Object.assign({},localSettings.customer.buyLists.find((b)=>{
                return b.customerId === customerId
            }));
            if(buyList){
                 if(buyList.buylistTypes){

                    buyList.buylistTypes.map((type, index)=>{
                        let newType = {
                            key: index,
                            type: type.instrumentType,
                            subType: type.instrumentSubtype,
                        };
                        if(type.instrumentType == "" && type.instrumentSubtype ==""){
                            newType.description = "Any"
                            newType.value = "-"
                        }else{
                            newType.description = (type.desc !="")?type.desc: type.instrumentType;
                            newType.value = type.instrumentType + "-" + type.instrumentSubtype
                        }
                        Items.push(newType);
                    })
                 }
                 
                 
            }
        }
            return Items.map((item, index)=>{
                return <Select.Option key={index} value={item.value}>{item.description}</Select.Option>
            })
    }
    
    showModal(){
        this.setState(Object.assign({},this.state,{
            searchText:"", 
            searchInstruments:[],
            instrumentType: "-", 
            searchType:"NAME",
            searchSkip: 0,
            searchLimit: 10,
            currentSearchPage: 1,
            searchTotal: 0,
            searching: false}),()=>{
                this.setState(Object.assign({},this.state,{searchModal:true}))
            })
    };
    resetModalData(){
        this.setState(Object.assign({},this.state,{
            searchModal:false,
            currentSearchPage: 1
        }))
    }

    handleModalCancel(e){
        this.resetModalData();
    };
    onTypeChange(d){
        //console.log(d)
        this.setState(Object.assign({},this.state,{instrumentType: d, searchSkip:0, currentSearchPage: 1, searchTotal: 0, searchInstruments:[]}));
    }
    onSearchTextChange(d){
        if(d.target){
            this.setState(Object.assign({},this.state,{searchText: d.target.value, searchSkip: 0, currentSearchPage: 1, searchTotal: 0, searchInstruments:[]}));
        }
    }


    // PATcode
    //ANDT way

    // handleReset = () =>{
    //     //this.props.form.resetFields();
    //     this.state.searchText.resetFields();
    //     alert('clear form selected')
    // }


    //function to clear form input fileds
    //clearFrom(){

        // showModal(){
            // this.setState(Object.assign({},this.state,{
            //     searchText:"", 
            //     searchInstruments:[],
            //     instrumentType: "-", 
            //     searchType:"-",
            //     }))
        // };

        // this.setState(state =>({ searchText: ""}))
    //     this.setState(Object.assign({},this.state,{searchText:""}));
    //      console.log('CLEAR FORM CLICKED')
        
    // }
    //end PATcode



    onMatchChange(d){
        //console.log(d)
        this.setState(Object.assign({},this.state,{searchType: d, searchSkip:0, currentSearchPage: 1, searchTotal: 0, searchInstruments:[]}));
    }
    searchButtonShow(){
        let disable = false;
        if(this.state.searchText == "" || this.state.searchText.length < 3){
            disable = true;
        }
        if(this.state.searchType == ""){
            disable = true;
        }
        if(this.state.instrumentType == ""){
            disable = true;
        }
        return disable;
    }
    searchPaginationChange(p,ps){
        // console.log(p,ps)
        let skip  = 0;
        if(p > 1){
            skip = (p-1) * this.state.searchLimit
        }
        this.setState(Object.assign({},this.state,{searchSkip:skip, currentSearchPage: p}), ()=>{
            this.search(true,this.performSearch)
        })
    }
    setSpinner(b,cb){
        if(cb){
            this.setState(Object.assign({},this.state,{searching:b}),cb);
        }else{
            this.setState(Object.assign({},this.state,{searching:b}));
        }
        
    }
    search(){
        this.setSpinner(true,this.performSearch);
    }
    performSearch(){
        let that = this;
        let query = "";
        let instrumentType = this.state.instrumentType.split("-");
        let type = instrumentType[0];
        let subType = instrumentType[1];
        if(type != ""){
            query += "type:{$eq:'"+type+"'}"
        }
        if(subType != ""){
            if(query != ""){
                query += ","
            }
            query += "subType:{$eq:'"+subType+"'}"
        }
        let text = this.state.searchText.toUpperCase();
        let textMinLengthReached = this.searchButtonShow();
        if(this.state.searchType == "SEDOL"){
            if(this.state.searchText.length > 2){
                if(query != ""){
                    query += ","
                }
                query += "sedol:{$regex:'"+text+"'}"
            }
        }else if(this.state.searchType == "NAME"){
            if(this.state.searchText.length > 2){
                if(query != ""){
                    query += ","
                }
                query += "name:{$regex:'"+text+"'}"
            }
        }
        let limit = this.state.searchLimit;
        let skip = this.state.searchSkip;
        let q = encodeURIComponent("{"+query+"}");
        if(!textMinLengthReached){
        let instrumentQuery = apiGetRequest(mms.getInstruments(q, skip, limit),"").then((data)=>{
            if(data){
                let cState = {};
                if(data.hasOwnProperty("rows") && data.status == 200){
                    if(data.rows.length > 0){
                        cState.searchInstruments = data.rows;
                        cState.searchSkip = data.skip;
                        cState.searchCount = data.count;
                        cState.searchLimit = data.limit;
                        cState.searchTotal = data.total;
                    }else{
                        cState.searchInstruments = [];
                        cState.searchSkip = 0;
                        cState.searchCount = 0;
                        cState.searchLimit = 10;
                        cState.searchTotal = 0;
                    }
                }else{
                    cState.searchInstruments = [];
                    cState.searchSkip = 0;
                    cState.searchCount = 0;
                    cState.searchLimit = 10;
                    cState.searchTotal = 0;
                }
                let blankState = {
                    searchInstruments:[],
                    searchSkip:0,
                    searchCount:0,
                    searchLimit:10,
                    searchTotal:0
                }
                that.setState(Object.assign({},that.state,blankState), ()=>{
                    that.setState(Object.assign({},that.state,cState), ()=>{
                        that.setSpinner(false)
                    })
                })
            }
        });
    }else{
        this.setSpinner(false)
    }
    }
    getSearchInstruments(){
        let ri = [];

        this.state.searchInstruments.map((ins,index)=>{
            if(this.state.instruments.length > 0){
                let disabled = false;
                let matchSedol = Object.assign({},this.state.instruments.find((ms)=>{
                    return ms.sedol === ins.sedol
                }));
                if(matchSedol.hasOwnProperty("sedol")){
                    disabled = true;
                }
                ri.push(Object.assign({},ins,{key:index, disabled:disabled}));
            }else{
                ri.push(Object.assign({},ins,{key:index, disabled:false}));
            }
        })
            
        return ri;
        

    }
    



    // MODAL END

    onModelDateChange(d){
        this.setState(Object.assign({},this.state,{modelDate: d}), this.updateParent)
    }
    onchangeModelName(d){
        if(d.target){
            this.setState(Object.assign({},this.state,{modelName: d.target.value}), this.updateParent);
        }
    }
    
    validateBuiltModel(){
        let valid = true;
        return valid;
    }
    buildModelReturnObject(){
        let returnObject = { model:{}, valid:this.validateBuiltModel(), state: this.state }
    }
    getNewAllocationTotal(inst){
        let total = 0;
        inst.map((instrument, index)=>{
                total = total + (instrument.allocation * 1)
            })
        return total
    }
    getAllocationInstruments(){
        let inst = [];
        if(this.state.instruments.length > 0){
            this.state.instruments.map((instrument, index)=>{
                let newO = {};
                newO.key = index;
                newO.instrumentId = instrument.instrumentId;
                newO.sedol = instrument.sedol;
                newO.name = instrument.name;
                newO.allocation = instrument.allocation;
                inst.push(newO);
            })
        }
        return inst
    }
    getDisabledDate(val){
        let yesterday = moment().subtract(1, 'days');
        let tomorrow =  moment();
        if(val.isBefore(yesterday)){
            return true
        }
        if(val.isAfter(tomorrow)){
            return true
        }
        return false
    }
    setInstrumentAllocation(){
        let allT = 0;
        this.state.instruments.map((ind,index)=>{
            allT = allT + (ind.allocation * 1);
        });
        this.setState((Object.assign({},this.state,{allocationTotal : allT})),this.updateParent);
    }
    getInstrumentAllocation(){
        return this.state.allocationTotal
    }
    updateInstrumentAllocation(record, val){
        let updateIndex = -1
        let us = Object.assign({},this.state);
        this.state.instruments.map((ind,index)=>{
            if(record.sedol === ind.sedol){
                updateIndex = index;
            }
        });
        let updateValue = val * 1;
        if(updateValue < 0){
            updateValue = 0
        }
        if(updateIndex != -1){
            us.instruments[updateIndex].allocation = updateValue
            this.setState((Object.assign({},this.state,{instruments : us.instruments})), this.setInstrumentAllocation);
        }
    }

    removeInstrument(record){
        let updateIndex = -1
        let us = Object.assign({},this.state);
        this.state.instruments.map((ind,index)=>{
            if(record.sedol === ind.sedol){
                updateIndex = index;
            }
        });
        if(updateIndex != -1){
            us.instruments.splice(updateIndex,1);
            let updated = [];
            us.instruments.map((inst, index)=>{
                let instrument = Object.assign({},inst)
                instrument.key = index;
                updated.push(instrument)
            })
            let allocationTotal = this.getNewAllocationTotal(updated)
            this.setState((Object.assign({},this.state,{instruments : [],allocationTotal: 0})),()=>{
                this.setState((Object.assign({},this.state,{instruments : updated, allocationTotal: allocationTotal})), this.updateParent)
            } );
        }
    }

    getMaxValueAllocation(){
        let v = 100;
        let allocation = this.getInstrumentAllocation();
        if(allocation == 100){
            return 0;
        }else{
            return v - allocation
        }
    }
    addMoreInstruments(){
        let allocation = this.getInstrumentAllocation();
        if(allocation >= 100){
            return true;
        }
        return false
    }
    noZeroInstruments(){
        let found = false;
        let allocation = this.getInstrumentAllocation();
        this.state.instruments.map((instrument)=>{
            if(allocation == 100 && (((instrument.allocation * 1) === 0) || ((instrument.allocation * 1) < 0))){
                found = true;
            }
        })
        return found
    }
    getInstrumentAllocationStatus(){
        let allocation = this.getInstrumentAllocation();
        let defaultObj = {fontSize: "1.3em", fontStyle:"Bold", marginBottom:"5px", marginTop:"5px", display: "block"};
        if(allocation == 0){
            defaultObj.color = "grey";
            return defaultObj
        }else if(allocation > 0 && allocation < 100){
            defaultObj.color = "grey";
            return defaultObj
        }else if(allocation > 100){
            defaultObj.color = "red";
            return defaultObj
        }else if(allocation == "100"){
            defaultObj.color = "green";
            return defaultObj
        }
    }
    convertModelDatetoServer(dt){
        return this.state.modelDate.format('YYYYMMDD');
    }
    updateParent(){
        if(this.props.returnModel){
            let model = {};
            if(this.state.allocationTotal == 100 && this.state.instruments.length > 0 && this.state.modelName != "" && !this.noZeroInstruments()){
                model.modelDetail = this.state.instruments
                model.modelDate = this.convertModelDatetoServer(this.state.modelDate)
                model.modelName = this.state.modelName
            }else{
                model.modelDetail = []
                model.modelDate = 0
                model.modelName = ""
            }
            this.props.returnModel(model)
        }
    }
    addSearchInstrument(r){
        let newObj = { sedol: r.sedol, instrumentId: r.sedol, name: r.name, allocation: 0 };
        let instruments = this.state.instruments;
        instruments.push(newObj)
        this.setState(Object.assign({},this.state,{instruments: instruments}),this.updateParent);
    }

	render() {
        const { instruments } = this.state;

		return (
            <div className="mb20 mt10">
			<Modal
          title={
              [
                <span><Icon type="search" /> Find Instruments</span>
              ]
          }
          visible={this.state.searchModal}
          onOk={this.resetModalData.bind(this)}
          onCancel={this.resetModalData.bind(this)}
          destroyOnClose = {true}
          closable = {true}
          footer={null}
          width="75%"
        ><Spin spinning={this.state.searching} ><Row gutter={24} style={{ display: "block", marginLeft: "0px"}} className="mt5">
<Col span={24}>
                
                <Row gutter={24} style={{ display: "block", marginTop: "0px" }} className="mb5">

                <Col span={16}>
                <span style={{fontSize: "0.85em", fontStyle:"italic", marginBottom:"5px"}}>Find by type:</span>
                <br/><Select value={this.state.instrumentType} placeholder="Type / Sub-Type" onChange={this.onTypeChange.bind(this)} dropdownMatchSelectWidth={false} allowClear>
                                    {
                                        this.buylistTypeSelections()
                                    }
                                </Select>


                </Col>
                <Col  span={8}>
                <span style={{fontSize: "0.85em", fontStyle:"italic", marginBottom:"5px"}}>Match on:</span>
                {/* HUBCode  <br/><Select value={this.state.searchType} placeholder="Type / Sub-Type" onChange={this.onMatchChange.bind(this)} dropdownMatchSelectWidth={false} > */}
                {/* PATCode */}
                <br/><Select value={this.state.searchType} placeholder="Type / Sub-Type" onChange={this.onMatchChange.bind(this)} dropdownMatchSelectWidth={false} allowClear>
                {/* endPAT  */}
                <Select.Option key={0} value="SEDOL">Sedol</Select.Option>
                <Select.Option key={1} value="NAME">Name</Select.Option>
                </Select>


                </Col>
                
                </Row>
                <Row gutter={24} style={{ display: "block" , marginTop: "0px" }} className="mb5" align="bottom" >
                <Col span={14} style={{verticalAlign: "bottom"}} >
                <span style={{fontSize: "0.85em", fontStyle:"italic", marginBottom:"5px", display: "block"}}>Find anything containing:</span>
                {/*HUBCode <Inut id="searchText" placeholder="Search Text..." onChange={this.onSearchTextChange.bind(this)} defaultValue={this.state.searchText} value={this.state.searchText} onPressEnter={this.search.bind(this)}/> */}

                {/* PATCode */}
                <Input id="searchText" placeholder="Search Text..." onChange={this.onSearchTextChange.bind(this)}  onPressEnter={this.search.bind(this)} allowClear/>
                {/* endPAT */}

                </Col>
                {/* HUBCode <Col span={10} style={{verticalAlign: "bottom"}} >
                <span style={{fontSize: "0.85em", fontStyle:"italic", marginBottom:"5px", display: "block"}}>&nbsp;</span>
                <Button type="primary" onClick={this.search.bind(this)} disabled={this.searchButtonShow()} >Search</Button>
                </Col> */}

                {/* PatCode */}
                <Col span={10} style={{verticalAlign: "bottom"}} >
                    <Row>
                        <span style={{fontSize: "0.85em", fontStyle:"italic", marginBottom:"5px", display: "block"}}>&nbsp;</span>
                            <Button type="primary" onClick={this.search.bind(this)} disabled={this.searchButtonShow()} >Search</Button>
                            <Button onClick={this.handleReset}>Clear form</Button>
                    </Row>
                </Col>
                {/* end of PATcode */}
                </Row>
                {(this.state.searchInstruments.length == 0)
                    ?
                    <Table dataSource={[]} columns={[{title:'Sedol',dataIndex:"sedol", sorter: false},{title:'Name',dataIndex:"name", sorter: false},{
                        title: 'Action',
                        key: 'action'
                      }]} pagination={{ pageSize: this.state.searchLimit, page: 1, hideOnSinglePage: true, total: 0 }} size={"small"} />
                    :
                    <Table dataSource={this.getSearchInstruments()} columns={[{title:'Sedol',dataIndex:"sedol", sorter: false},{title:'Name',dataIndex:"name", sorter: false},{
                        title: 'Action',
                        key: 'action',
                        render: (text, record) => (
                          <span>
                            {(!record.disabled)?<Button type="default" onClick={this.addSearchInstrument.bind(this,record)} size="small" ><Icon type="plus" />Add</Button>:<Button type="dashed" size="small" disabled={true} ><Icon type="check" />Added</Button>}
                          </span>
                        ),
                      }]} pagination={{ pageSize: this.state.searchLimit, page: this.state.currentSearchPage, hideOnSinglePage: true, onChange: this.searchPaginationChange.bind(this), total: this.state.searchTotal }} size={"small"} />
                      }
                
                </Col></Row>
</Spin>
        </Modal>
       
            <Row gutter={24} style={{ display: "block", marginLeft: "0px"}} className="mt10">
                <Col span={10} style={{paddingLeft: "0px", paddingBottom: "5px"}}>
                <span style={{fontSize: "0.85em", fontStyle:"italic", marginBottom:"5px"}}>Model Name: *</span><br/>
                <Input placeholder="Model Name" id="modelName" defaultValue="" onChange={this.onchangeModelName.bind(this)}
                suffix={
                    <Tooltip title="Enter a Descriptive Name">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  } 
                  />
                </Col>
                <Col span={8} style={{paddingBottom: "5px"}}>
                <span style={{fontSize: "0.85em", fontStyle:"italic", marginBottom:"5px"}}>Model Date: *</span><br/>
                <DatePicker onChange={this.onModelDateChange.bind(this)} defaultValue={moment(this.state.modelDate, "DD-MM-YYYY")} format="DD-MM-YYYY" disabledDate={this.getDisabledDate.bind(this)} />
                </Col>
                <Col span={6} style={{paddingBottom: "5px"}}>
                <span style={{fontSize: "0.85em", fontStyle:"italic", marginBottom:"5px"}}>Total Allocation:</span><br/>
                <span style={this.getInstrumentAllocationStatus()}>{this.getInstrumentAllocation()}%</span>
                </Col>
            </Row>
            <Row gutter={24} style={{ display: "block", marginLeft: "0px"}} className="mt10">
                <Col span={24} style={{paddingLeft: "0px"}}>
                <Table dataSource={this.getAllocationInstruments()} columns={[{title:'Sedol',dataIndex:"instrumentId", sorter: false},{title:'Name',dataIndex:"name", sorter: false},
                {
                    title:'% Allocation',
                    dataIndex:"allocation",
                    align: "left",
                    render: (text, record) => {
                        return (
                          <span>
                            <div>
                                <InputNumber defaultValue={record.allocation} max={100} min={0} onChange={this.updateInstrumentAllocation.bind(this, record)} size="small"/> <Divider type="vertical" /> <Button type="default" onClick={this.removeInstrument.bind(this, record)} size="small"><Icon type="close" />Remove</Button>
                            </div>
                          </span>
                        );
                      }
                }]} pagination={false} size={"small"} />
                
                </Col>
            </Row>
            <Row gutter={24} style={{ display: "block", marginLeft: "0px"}} className="mt10">
                <Col span={16} style={{paddingLeft: "0px"}}>
                { (this.noZeroInstruments())? <div style={{textAlign: "left", fontSize:"1em", lineHeight:"1.3em", color:"#f5222d", marginBottom:"5px"}}><strong>NOTE:</strong> You will not be able to proceed if there are any instruments with an allocation of 0% even if the total reaches 100%. Remove any instruments with a zero value.</div> : null }
                <div style={{textAlign: "left", fontSize:"0.7em", fontStyle:"italic", lineHeight:"1.3em"}}>* Required Information.</div>
                </Col>
                <Col span={8} style={{paddingLeft: "0px", textAlign:"right"}}><Button type="default" icon="plus" onClick={this.showModal.bind(this)} disabled={this.addMoreInstruments()}>Add</Button></Col>
            </Row>
            </div>
		)
	}
}


ModelBuilder.propTypes = {
	
    children: PropTypes.array.isRequired, // for parsed in and bespoke building models
    returnModel:  PropTypes.func.isRequired, // return function when model is built
    localSettings: PropTypes.object.isRequired // we get the buylist fund types from this

}

ModelBuilder.defaultProps = {
    children: [],
    localSettings: {},
    returnModel: () =>{
        console.log("");
    }
}

export default ModelBuilder