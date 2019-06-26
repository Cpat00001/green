import React, { Component } from 'react';
import axios from 'axios';
import '../../css/tablepdf.css';
import { Row, Col,Button } from 'antd';

 class Page7 extends Component {
    constructor(props){
        super(props)

        this.printPDF = this.printPDF.bind(this)
    }

    printPDF(){

        var sTable = document.getElementById('table1').innerHTML;

        var style = "<style>";
        style = style + "table {width: 100%;font: 17px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: center;}";
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
    }

    render() {
        return (
            <div style={{marginTop:'1000px', width:'70%',margin:'auto'}}>
                <h5>Page 7 here</h5>
                <Row>
                    <Col span={18}></Col>
                    <Col span={4}> <Button type="danger" className='pdfbut' onClick={this.printPDF}>Print table</Button></Col>
                    <Col span={2}></Col>
                </Row>
                <div id='table1'>
                    <Row >
                        <Col span={2} className="pdf1">Statement up to current date</Col>
                        <Col span={6} className="pdf1">Logo</Col>
                        <Col span={16} className="pdf2">User Name</Col>
                    </Row>
                    <Component1/>
                    <TableFooter/>
                </div>
            </div>
        )
    }
}
export default Page7;



class Component1 extends Component {
    constructor(props){
        super(props)

        this.state= {

            data: []
        }
    }

    componentDidMount(){

        axios.get('/Data/tablepdf1.json')
            .then( res => this.setState({data: res.data}))
            .catch(error => console.log(error))

    }
    render() {

        const {data} = this.state;
        console.log('podaje dane dla data:', data)
        console.log('podaj mi key ', data.index)
        return (
            <div>
                <h5>text form 1st component to page 7 </h5>

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Value</th>
                            <th scope="col">Balance</th>
                        </tr>
                    </thead>
                    <tbody>

                    {data.map((row,index)=>(

                        <Component2
                        key={row}
                        row={row}

                        />
                    
                    ))}     

                    </tbody>
                </table>
            </div>
        )
    }
}


class Component2 extends Component {
    render() {

        const {key,date,description,value,balance} = this.props.row;
        console.log('wywal data from component2 : ', description, value)
        console.log('podaj index wartosc:' ,key)
        return (
            
                        <tr>
                            <td>{key}</td>
                            <td>{date}</td>
                            <td>{description}</td>
                            <td>{value}</td> 
                            <td>{balance}</td>
                             
                        </tr>
                   
            
        )
    }
}



class TableFooter extends Component {
    render() {
        return (
            <div>
               <Row>
                    <Col span={24}>Table footer</Col>   
                </Row>
                <Row >
                    <Col span={4}></Col>
                    <Col span={16} className="foot"><p><strong>Notes</strong></p></Col>
                    <Col span={4}></Col>
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16} className="foot"><p>a. Cash postings are shown on a contractual basis and will include items pending clearance at the statement period end.</p>
                                <p>b. Please notify us of any possible errors or omissions promptly.</p>
                                <p>c. Adjustments can occur for various reasons primarily where we have received a late dividend or tax adjustment after the period end date:
                                   These could impact opening balances when producing adhoc statements.</p>
                    </Col>
                    <Col span={4}></Col>
                </Row>

            </div>
        )
    }
}





