import React, { Component } from 'react';
import '../../css/page8.css';
import { Layout, Row, Col,Icon, Button } from 'antd';
import { Table } from 'antd';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getContacts} from './../../actions/ContactActions'
import {print_pdf} from './../../actions/PrintActions';
import {styling,banner} from './../../actions/styleactions';
import {getData} from './../../actions/Getdata';
import { noConflict } from 'q';
import {Link} from 'react-router-dom';


const columns = [
    {
      title: 'Stock Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Value',
      dataIndex:'value',
      key: 'value',
    },
    {
        title: 'Cost',
        dataIndex:'cost',
        key: 'cost',
    },
    {
        title: 'Change (£)',
        dataIndex:'change',
        key: 'change',
    },
    {
        title: 'Change (%)',
        dataIndex:'change',
        key: 'change',
    }

  ];

  const data = [
    {
      key: '1',
      name: 'Gold',
      quantity: 4,
      price: 11.2,
      value: 44.8,
      cost: 5.0,
      change: -1.25,
      change:-0.1
    },
    {
      key: '2',
      name: 'Silver',
      quantity: 4,
      price: 11.2,
      value: 44.8,
      cost: 5.0,
      change: -1.25,
      change:-0.1
    },
    {
      key: '3',
      name: 'Oil',
      quantity: 4,
      price: 11.2,
      value: 44.8,
      cost: 5.0,
      change: -1.25,
      change:-0.1
    },
  ];




const { Header, Footer, Sider, Content } = Layout;



 class Page8 extends Component {
     constructor(props){
         super(props)

         this.state = { 
             pdf: false , 
             popup: false ,
             // working redux state backgroundColor: this.props.style,
             backgroundColor: this.props.style,
             bannerText: this.props.style

            }
         this.handleclick = this.handleclick.bind(this)
         this.handleValuation = this.handleValuation.bind(this)
         //this.handlepdf = this.handlepdf.bind(this);
     }
     
    componentDidMount(){
        this.props.getContacts();
        this.props.print_pdf();
        this.props.styling()
        console.log(this.props.styling())
        this.props.getData()
    }
    
    getData(){
        //console.log('GET DATA CLICKED')
    }
    handleValuation(){
        this.props.banner();
        this.setState(state=>({bannerText: !this.state.bannerText}))
        console.log('value for bannerText:', this.props.style)
    }

    handleclick(){
        this.setState(state =>({popup: !this.state.popup}))
        
        this.props.styling()
        //this.setState(state =>({backgroundColor: !this.state.backgroundColor }))
        this.setState(state =>({backgroundColor: !this.state.backgroundColor}))
        console.log('boolean for icon:',this.props.style.backgroundColor)
    }

    // mozliwe,ze beda potrzebowal tej lifcycle method to update changing state
    // componentDidUpdate(prevProps){
    //     if(this.props.style !== prevProps.style){
    //         this.fetchData(this.props.style)
    //     }
    // }

    handlepdf(){

        var sTable = document.getElementById('output1').innerHTML;

        var style = "<style>";
        style = style + "table {width: 70%;font: 17px Calibri;margin:auto;max-width:700px;}";
        style = style + "table, th, td {border: solid 1px black; border-collapse: collapse;padding:5px}";
        style= style + "div {background-color:powderblue;margin-left:1%;}"
        style= style + "img{width:100px; height:100px;margin-left:1%;background-color:red}"
        //style = style + "{padding:20px;text-align: center;}";
        style = style + "</style>";

        // CREATE A WINDOW OBJECT.
        var win = window.open('', '', 'height=700,width=700');

        win.document.write('<html><head>');
        win.document.write('<title>Table 1</title>');   // <title> FOR PDF HEADER.
        win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
        win.document.write('</body></html>');

        win.document.close(); 	// CLOSE THE CURRENT WINDOW.

        win.print();    // PRINT THE CONTENTS.
         console.log('Printing PDF')
         console.log('onClick works')

         this.setState=({pdf: true})
    }

    render() {

        // ########## dziala obiera dane z redux statu ########
        const dataComponent = this.props.data;
        console.log(dataComponent)
        console.log(this.props.data)

        const dataSource = data;
        console.log(dataSource)

        // const columns = [
        //     {

        //         title: 'Name',
        //         dataIndex:'name',
        //         key:'name'

        //     },
        //     {
        //         title:'UserName',
        //         dataIndex:'username',
        //         key:'username'
        //     },
        //     {
        //         title:'Email',
        //         dataIndex:'email',
        //         key:'email'
        //     }
        // ]
        // ########## KONIEC dziala odbiera dane z redux statu ########


        
        const {contacts} = this.props;
        const {pdf} = this.props;
        const printPDF = this.state.pdf;
        const {style} = this.props
        
        return (
            <div style={{maxWidth:'800px', width:'100%', margin:'0 auto'}}>

                {/* header */}
                    <Row className='headfive'>
                        <Col span={12}>
                            <Row className='headfour'>
                                <Col span={4}></Col>
                                <Col span={16}><p className='paragraph1'>Portfolio: ISA THA0010001 </p></Col>
                                <Col span={4}></Col>
                            </Row>
                            <Row className='headtwo'>
                                <Col span={3} onClick={this.handleclick.bind(this)} style={{backgroundColor: this.state.backgroundColor? 'purple': 'royalblue' }}><Icon type="line-chart" className='icon'/></Col>
                                <Col span={3}><Icon type="codepen" className='icon' onClick={this.getData}/></Col>

                                <Link to={`/Loops/component/Page9`}>
                                {/* http://localhost:3000/Loops/component/Page8/Loops/component/Page9 */}
                                    <Col span={3}><Icon type="snippets" className='icon'/></Col>
                                </Link>
                                
                                <Col span={3}><Icon type="table" className='icon'/></Col>
                                <Col span={3}><Icon type="appstore" className='icon'/></Col>
                                <Col span={3}><Icon type="setting" className='icon'/></Col>
                                <Col span={3}><Icon type="user" className='icon'/></Col>

                            </Row>
                        </Col>
                        <Col span={4}></Col>
                        <Col span={8}>
                            <Row className='headthree'>
                                <Col span={2}></Col>
                                <Col span={20}>
                                {contacts.map(contact =>(
                                    <p key={contact.id} style={{fontWeight:'bold'}}>{contact.name}</p>
                                ))}
                                </Col>
                                <Col span={2}></Col>

                            </Row>
                        </Col>
                    </Row>

                    {/* middle of page */}
                    {/* middle line 1 */}
                    <Row className='contentOne'>
                        <Col span={8}>
                            <Row>
                                <Col span={2}></Col>
                                <Col span={2}><Icon type="snippets" className='iconportfolio'/></Col>
                                <Col span={16} style={{float:'left'}}><p className='paragraph1'>Portfolio Overview</p></Col>
                                <Col span={4}></Col>
                            </Row>
                        </Col>
                        <Col span={6}></Col>
                        <Col span={10} className='contentOne'>
                            <Row>
                                <Button type="primary" className='button1' onClick={this.handlepdf}><Icon type="file-pdf" className='iconButton'/>Download CSV</Button>
                                {/* <Button type="primary" className='button1' onClick={()=>console.log('dziala')}><Icon type="file-pdf" className='iconButton'/>Download CSV</Button> */}
                                <Button type="primary" className='button1' onClick={this.handleValuation}><Icon type="file-pdf" className='iconButton' className='iconButton'/>Valuation PDF</Button>
                            </Row>
                        </Col>
                    </Row>
                    {/* middle line 2 */}
                    <Row className='contentTwo'>
                        <Col span={10}>
                            <Row>
                                <Col span={20}><Icon type="codepen-circle" className='icon'/>Portfolio & Cash Values</Col>
                                <Col span={4}></Col>
                            </Row>
                        </Col>
                        <Col span={4}></Col>
                        <Col span={10}>
                            <Row>
                                <Col span={24}><Icon type="compass" className='icon'/>Overall Performance</Col>
                            </Row>
                        </Col>
                    </Row>
                    {/* midlle line 3 */}
                    <Row style={{backgroundColor:'grey'}}>
                        <Col span={12} className='contentThree'>
                            <Row>
                                <Row>
                                    <Col span={12}>Total Value</Col>
                                    <Col span={12}>£54,740</Col>
                                </Row>
                                <Row>
                                    <Col span={12}>Market Value</Col>
                                    <Col span={12}>£54,541</Col>
                                </Row>
                                <Row>
                                    <Col span={12}>Total Cash</Col>
                                    <Col span={12}>£10,00</Col>
                                </Row>
                            </Row> 
                            <Row>
                                <Col span={24} style={{backgroundColor:'white'}}><p className='paragraph1'>Some text here</p></Col>
                            </Row>
                        </Col>
                        <Col span={2}></Col>
                        <Col span={10}>
                            <div style={{height:'200px',width:'350px',backgroundColor:'pink',margin:'10px'}}>{this.state.bannerText? <h5>clicked</h5> : ""}</div>
                        </Col>   
                    </Row>
                    
                    {/* middle line 4 */}
                    <Row>
                        <Col span={24}><Icon type="bars" className='icon' style={{color:'grey',float:'left'}}/><p className='paragraph1'>Holding performance</p></Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{backgroundColor:'powderblue', height:'100px'}}><Table columns={columns} dataSource={data} /></Col>
                    </Row>

                    

                        <div id='output1' style={{marginTop:'200px',color:'white'}}>
                            <p>{pdf.name}</p>
                            <p>{pdf.age}</p>
                            <p>{pdf.address}</p>
                        </div>

                <Component1 dataComponent={dataComponent}/>

               
                {/* <Row style={{backgroundColor:'rgb(216, 211, 211)',height:'100px', marginTop:'5%'}}>
                    <Col span={4}></Col>
                    <Col span={16}>Footer</Col>
                    <Col span={4}></Col>
                </Row> */}
                
            </div>
        )
    }
}

Page8.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired,
    pdf: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    styling: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    getData: PropTypes.func.isRequired
}

// const mapDispatchToProps = dispatch =>({
//     getContacts: () => dispatch({type: GET_CONTACTS})
// })

const mapStateToProps = state =>({
    contacts: state.contact.contacts,
    pdf: state.pdf.pdf,
    style: state.style.banner,
    data: state.data.data

})

export default connect(
    mapStateToProps,
    {getContacts,print_pdf, styling, banner, getData }
) (Page8);




class Component1 extends Component {

    render() {

        // tworzysz kolumny dla tabeli, a dane przesylasz z Parent to Child - odbierasz jako propsy w child

        const columns = [
            {

                title: 'Name',
                dataIndex:'name',
                key:'name'

            },
            {
                title:'UserName',
                dataIndex:'username',
                key:'username'
            },
            {
                title:'Email',
                dataIndex:'email',
                key:'email'
            }
        ]

        
        
        return (
            <div>
                <Row>
                        <Col span={24} style={{backgroundColor:'powderblue', height:'100px'}}><Table columns={columns} dataSource={this.props.dataComponent} /></Col>
                </Row>
            </div>
        )
    }
}
