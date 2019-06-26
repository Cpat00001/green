import React, { Component } from 'react';
import { Button } from 'antd';





class Page6 extends Component {
    constructor(props){
        super(props)
        this.state = { table : false}

        this.showTable = this.showTable.bind(this);
    }
      
showTable(){
        console.log('showtable button wokrs')
        this.setState(state =>({
            table: !state.table
        }))
    }
   
    render() {

        return (
            <div style={{marginTop:'1000px',marginBottom:'500px'}}>
                <h5>Page6: Click a button to get table</h5>
                <Button type="primary" onClick={this.showTable}>Show table</Button>
                {this.state.table? (<Table/>) : <h5></h5>}
            </div>
        )
    }
}
export default Page6;


// component with table
 class Table extends Component {
     constructor(props){
         super(props)

         this.printPDF = this.printPDF.bind(this);
     }

     
    printPDF(){

        var sTable = document.getElementById('tab').innerHTML;

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


        const data = {

            models: [
        
                {date: 20190328, modelDescription: "newModel1", modelId: "AO000000477", customerId: "HUBWISE", date: 20190328, employeeId: "E001311",modelType: "DSP",totalAccounts: 0},
                {date: 20190328, modelDescription: "newModel1", modelId: "AO000000477", customerId: "HUBWISE", date: 20190328, employeeId: "E001311",modelType: "DSP",totalAccounts: 0},
                {date: 20190328, modelDescription: "newModel1", modelId: "AO000000477", customerId: "HUBWISE", date: 20190328, employeeId: "E001311",modelType: "DSP",totalAccounts: 0},
                {date: 20190328, modelDescription: "newModel1", modelId: "AO000000477", customerId: "HUBWISE", date: 20190328, employeeId: "E001311",modelType: "DSP",totalAccounts: 0}
                ],
                
            products: [
                
                    {productId: "EUR",  customerPrefix: "HW",paymentTypes: ["cash", "transfer"], pltAnnChargeCode: "PLT480",productDescription: "Control Posting"},
                    {productId: "EUR",  customerPrefix: "HW",paymentTypes: ["cash", "bitcoin"], pltAnnChargeCode: "PLT480",productDescription: "Control Posting"},
                    {productId: "GBP",  customerPrefix: "HW",paymentTypes: ["cash", "transfer", "bitcoin"], pltAnnChargeCode: "PLT490",productDescription: "Control Posting"},
                    {productId: "GBP",  customerPrefix: "HW",paymentTypes: ["transfer", "bitcoin"], pltAnnChargeCode: "PLT490",productDescription: "Control Posting"},
                    
                ],
            dashboard: [
        
                    {defaultView: "customer1", colIcons: true, dataSource: [
                      {permissionDesc: "Adviser Menu G", permissionId: "main_menu", permissionType: "G"},
                      {permissionDesc: "Adviser Menu F", permissionId: "main_menu", permissionType: "F"},
                      {permissionDesc: "Adviser Menu C", permissionId: "main_menu", permissionType: "C"}
                    ]  },
                    {defaultView: "customer2", colIcons: false, dataSource: [
                      {permissionDesc: "Adviser Menu G", permissionId: "main_menu", permissionType: "G"},
                      {permissionDesc: "Adviser Menu F", permissionId: "main_menu", permissionType: "F"},
                      {permissionDesc: "Adviser Menu C", permissionId: "main_menu", permissionType: "C"}
                    ]  },
                    {defaultView: "customer3", colIcons: true, dataSource: [
                      {permissionDesc: "Adviser Menu G", permissionId: "main_menu", permissionType: "G"},
                      {permissionDesc: "Adviser Menu F", permissionId: "main_menu", permissionType: "F"},
                      {permissionDesc: "Adviser Menu C", permissionId: "main_menu", permissionType: "C"}
                    ]   },
                    {defaultView: "customer4", colIcons: false,dataSource: [
                      {permissionDesc: "Adviser Menu G", permissionId: "main_menu", permissionType: "G"},
                      {permissionDesc: "Adviser Menu F", permissionId: "main_menu", permissionType: "F"},
                      {permissionDesc: "Adviser Menu C", permissionId: "main_menu", permissionType: "C", 
                      typeC: [
                        { model:'A', function:'Z'},
                        { model:'B', function:'Y'},
                        { model:'C', function:'A'},
                        { model:'A', function:'Z'},
                        { model:'B', function:'Y'},
                        { model:'C', function:'X'}
                      ] }
                    ]   }
      
                ],
            details:[
                //{date, description,receipt,payment,Balance}
                {date: 20190101,description:' ISHARES VII PLC ISHARES CORE S&P 500 UCITS ETF USD (ACC)',value: 3125.52, balance: 3163.70},
                {date: 20190102,description:' ISHARES III PLC CORE MSCI WORLD UCITS ETF USD ACC GBP',value: 904.08, balance: 4067.78},
                {date: 20190103,description:' ISHARES III PLC CORE MSCI WORLD UCITS ETF USD ACC GBP',value: 910.02, balance: 4117.78},
                {date: 20190104,description:' ISHARES CORE GBP CORP BD UCITS ETF GBP DIST',value: 945.02, balance: 4227.78},
                {date: 20190105,description:' ISHARES III PLC CORE MSCI WORLD UCITS ETF USD ACC GBP',value: 960.02, balance: 4337.78},
            ]
        
        }

        return (
            <div>
                <h2>Your data in table</h2>
                <div id="tab">
                <table class="table table-striped" style={{marginLeft:'10px',marginRight:'10px',maxWidth:'60%',margin:'auto'}} >
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Nr</th>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Value</th>
                            <th scope="col">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.details.map((obj,index)=>{
                            return(

                             <tr>
                                <th scope="row">{index+1}</th>
                                <th>{obj.date}</th>
                                <th>{obj.description}</th>
                                <th>{obj.value}</th>
                                <th>{obj.balance}</th>
                            </tr>

                            )
                        })}
                    </tbody>
                </table>
                </div>
               <Button type="primary" onClick={this.printPDF}>Print PDF</Button>
            </div>
        )
    }
};

