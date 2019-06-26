import React, { Component } from 'react';
import Page5 from './component/Page5';
import Page6 from './component/Page6';
import Page7 from './component/Page7';

export default class Loops2 extends Component {
    render() {

        const data1 = { 
            "stuff": {
                "onetype": [
                    {"id":1,"name":"John Doe"},
                    {"id":2,"name":"Don Joeh"}
                ],
                "othertype": {"id":2,"company":"ACME"}
            }, 
            "otherstuff": {
                "thing": [[1,42],[2,2]]
             }
        }

        const display = ( Object.keys(data1).map((stuff,index)=>{ return (<p key={index}>{stuff}</p>)}))
        const display2 = (Object.keys(data1.stuff).map((type,index)=>{ return (<p key={index}>{type}</p>)}))
        let display3 = ((data1.stuff.onetype).map((item,index)=>{return(<p key={index} style={{color:'red'}}>{item.id}{' '}{item.name}</p>)}))

        const display4 = (

            Object.keys(data1).forEach(key => {

                return(<tr><h5>key</h5></tr>)
            })

        )

        const deep = (Object.keys(data1.stuff).map((type,index)=>{
            return(<p style={{color:'orange'}} key={index}>{type}</p>)
        }))

       

        // const display4 = (Object.keys(data1).forEach(key => {

        //     console.log(key);
        //     const keys = key;
        //     console.log(data1[key])
        //     const data1key = data1[key];
        //     console.log(Object.keys(data1[key]))
        //     const objData1key = Object.keys(data1[key])

        //    const type = objData1key.map((type,index)=>{

        //         console.log('line 39 type',type)
        //     })})
            


        // }))


        // if(deep.length > 0){
        //     alert(deep.length)
        //     let len = deep.length;
        //     let dis2 = display3;
        //     let result = '';
        //     for( var i in dis2){
        //        if(dis2.hasOwnProperty(i)){
        //            console.log( i + " -> " + dis2[i])
        //        }
        //     }
        // }

        // const display = Object.keys(data1).map((row,index)=>{
        //         return (<tr><p key={index}>{row}</p></tr>)
        //     })

        // const item = data1.stuff.onetype[0].name;
        // const item2 = data1.otherstuff.thing[0][1];
    

        // const display1 = (Object.keys(data1).map((disp,index)=>{

        //     return ( <tr>
        //                 <tr>
        //                     <td>
        //                         {Object.keys(data1.stuff).map((item,index)=>{
        //                             return(<h5>{item}</h5>)
                                    
        //                             })}
        //                     </td>
        //                 </tr>

        //             </tr>

        // )}));

        

        // const validmess = (Object.keys(vm).map((key,index)=>{
        //     return(

        //         <p key={index}>{key}</p>
                
        //     )
        // })) 
        // const validmess = (Object.keys(vm).forEach(key => {
            
        //     console.log(key);
        //     console.log(vm[key])
       
        //    )
        // }))


        var vm = {
            "key_1": {
                "name": "jimmy",
                "msg": "hello world"
            },
            "key_2": {
                "name": "billy",
                "msg": "foo equals bar"
            },
            "key_3":{
                "name": "jedi",
                "msg": "say hello to your journey"

            }
        }

        // for( const x in vm){
        //     if(vm.hasOwnProperty(x)){

        //         const newer = vm[x];

        //         for( const y in newer){
        //             if(newer.hasOwnProperty(y)){
        //                 console.log('values from nested vm',newer[y])
        //             }
        //         }
        //     }
        // }

        // for(var key in vm){

        //     if(vm.hasOwnProperty(key)){

        //         const newObject = vm[key];
        //         for( var prop in newObject){
        //             if(newObject.hasOwnProperty(prop)){
        //                 console.log(newObject[prop])
        //             }
        //         }
        //     }
        // }

        // for( var key in vm){
        //     if(vm.hasOwnProperty(key)){

        //         const obj = vm[key];
        //         for( var prop in obj){
        //             if(obj.hasOwnProperty(prop)){
        //                 console.log(prop + ":" + obj[prop])
                        
        //             }
        //         }
        //     }
        // }
        


        // for( var prop in vm){
        //     if(vm.hasOwnProperty(prop)){
    
        //         console.log(prop)
                
        //     }
        // }
        // for( var key in vm){
        //     if(vm.hasOwnProperty(key)){

        //         var obj = vm[key];

        //         for( var prop in obj){
        //             if(obj.hasOwnProperty(prop)){
        //                 console.log(prop + ":" + obj[prop])
        //             }
        //         }
        //     }
        // }

        var myObj = {
            "name":"John",
            "age":30,
            "cars": {
              "car1":"Ford",
              "car2":"BMW",
              "car3":"Fiat"
            }
           }
        let x;
        let txt = "";

        for( const item in myObj){
            if(myObj.hasOwnProperty(item)){
                //console.log('vartosci z myObj',myObj[item])
            }
        }

        for(const car in myObj.cars){
            if(myObj.cars.hasOwnProperty(car)){
                //console.log('modele aut z cars:', myObj.cars[car])
            }
        }

        for( const auto in myObj){
            if(myObj.hasOwnProperty(auto)){

                const cars = myObj[auto];

                for(const model in cars){
                    if(cars.hasOwnProperty(model))
                    console.log('modele aut: ',cars[model])
                }
            }
            
        }
        const cars = Object.values(myObj.cars);
        //console.log(cars)
        const druk = <table>
                        <thead><h5>Cars Table</h5></thead>
                            <tr style={{color:'red'}}><td>{cars}</td></tr>
                        </table>


        // for(const sam in myObj.cars){

        //     const druk = Object.value(myObj.cars);
        //     console.log('DRUKUJ: ', druk)

        //     if(myObj.cars.hasOwnProperty(sam)){

                
        //         // const druk = <p key={myObj.cars[sam]}>{myObj.cars[sam]}</p>
                
        //     }
        // }

        // for( x in myObj.cars){
        //     txt += myObj.cars[x] + " ";
        //     console.log(txt)
        // }
        const xars = myObj.cars;
        //console.log(xars)

        const keys = Object.keys(myObj.cars);
        //console.log(keys)
        const objects = Object.values(myObj.cars);
        //console.log(objects)



        // for ( x = 0 ; x < myObj.cars.length; x++){

        //     txt += myObj.cars[x];
        //     console.log(txt);

        // }

        //#####################################################

        class Table extends Component {

            state = {

                headName: 'Tabela produktow',
                backgroundColor:'#7491bf'
            }
            
            render() {
                
                return (
                    <div style={{border:'2px solid black', backgroundColor:'powderblue'}}>
                    <Header/>
                    <div style={{marginLeft:'300px'}}>
                        <table style={{width:'300px', backgroundColor: this.state.backgroundColor}}>
                            <thead>
                            <h5>{this.state.headName}</h5>
                            </thead>
                            <tbody>
                                <Row/>
                            </tbody>
                        </table>    
                    </div>


                    </div>
                    
                )
            }
        }

        class Row extends Component {

            state = {

                border:'1px solid green', 
                padding:'20px',
                backgroundColor:'grey',
                color:'white'
            }

            render() {
            
                var produkty = [
                    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
                  ];

                  const wydruki = produkty.map(item =>
                        
                            <tr style={{ backgroundColor: this.state.backgroundColor, padding: this.state.padding, border: this.state.border}}>
                            <tr><td>{item.name}</td><td>{item.price}</td></tr>
                            {/* <tr><td>{item.stocked}</td></tr> */}
                            </tr> 
                          
                    )

                    //console.log(wydruki)
                   
                return (
                    <div style={{marginLeft:'100px'}}>
                        {wydruki}   
                    </div>
                )
            }
        }

        class Header extends Component {
            state = {

                header:'Naglowek 1',
                backgroundColor: 'purple', 
            }

            render(){

                return(
                    <div style={{backgroundColor: this.state.backgroundColor, color: this.state.color}}>
                        <h6>{this.state.header}</h6>
                    </div>
                )
            }
        }

        
        class Table2 extends Component {
            render() {
                return (
                    <div style={{marginTop:'100px'}}>
                        <h6>Table 2</h6>
                        <h6>Users Table</h6>
                        <Header2/>
                        <Row2/>
                    </div>
                )
            }
        }
        class Header2 extends Component{
            render(){
                return(
                    <div style={{border:'2px solid black', backgroundColor:'#8ead85', width:'50%', margin:'auto',padding:'10px'}}>
                        <tr>
                            <th><td style={{border: '1px solid black',width:'140px'}}>User id</td><td style={{border: '1px solid black',width:'140px'}}>Email</td><td style={{border: '1px solid black',width:'140px'}}>Address</td></th>
                        </tr>
                    </div>
                )
            }
        }

        class Row2 extends Component {

            render(){

                const user = [{
                    id: 101,
                    email: 'jack@dev.com',
                    personalInfo: {
                        name: 'Jack',
                        address: {
                            line1: 'westwish st',
                            line2: 'washmasher',
                            city: 'wallas',
                            state: 'WX',
                            food: [ 'apples' , 'paprika', 'grapes' ]
                        }
                    }
                },
                {
                    id: 102,
                    email: 'tom@gmail.com',
                    personalInfo: {
                        name: 'Tom',
                        address: {
                            line1: 'new street',
                            line2: '92',
                            city: 'london',
                            state: 'LON',
                            food: [ 'carrot' , 'grapes', 'bananas' ]
                        }
                    }
                },
                {
                    id: 103,
                    email: 'joanna@gmail.com',
                    personalInfo: {
                        name: 'Joanna',
                        address: {
                            line1: 'AcornRoad',
                            line2: '14',
                            city: 'Stone',
                            state: 'STN',
                            food: [ 'carrot' , 'paprika', 'bananas' ]
                        }
                    }
                }
            ]

            const client = user.map((user,index) =>{

                //const newUser = {};
                
                const test = user.id;
                const email =  user.email;
                const string1 = user.personalInfo.toString();
                //console.log(string1)
                const address = user.personalInfo.address.city.toString();
               // console.log(address)

                //console.log(newUser)
                //console.log(test);
               // console.log(email)
                
              return(
                            <tr>
                                <td key={index} style={{border:'1px solid black',width:'50%', padding:'10px'}}>{test}</td>
                                <td style={{border:'1px solid black', width:'100%',padding:'10px'}}>{email}</td>
                                <td>{address}</td>
                            </tr>
                        )  
            })
            
                return(
                    <div style={{border:'2px solid black', backgroundColor:'powderblue', width:'50%', margin:'auto', padding:'10px'}}>
                        {client}
                    </div>
                )
            }
        }

        class Table3 extends Component {

            render(){

                return(

                    <div style={{marginTop:'100px'}}>
                        <h6>Table 3</h6>
                        <table style={{border:'1px solid blue',margin:'auto', marginBottom:'100px'}}>
                            <thead style={{backgroundColor:'powderblue',padding:'10px'}}>
                                <Header3 />
                            </thead>
                            <tbody style={{backgroundColor:'pink', border:'1px solid black', padding:'10px'}}>
                                <Row3 />
                            </tbody>
                        </table>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Food</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <Row3 />     
                                    </tr>
                                </tbody>
                            </thead>
                        </table>
                        
                        
                    </div>
                )
            }
        }
        class Header3 extends Component{

            render(){

                return(
                    <div>
                        <h6>Header 3</h6>
                    </div>
                )
            }
        }
        class Row3 extends Component{

    
        render(){

            const investors = [{
                id: 101,
                email: 'jack@dev.com',
                personalInfo: {
                    name: 'Jack',
                    address: {
                        line1: 'westwish st',
                        line2: 'washmasher',
                        city: 'wallas',
                        state: 'WX',
                        food: [ 'apples' , 'paprika', 'grapes' ]
                    }
                }
            },
            {
                id: 102,
                email: 'tom@gmail.com',
                personalInfo: {
                    name: 'Tom',
                    address: {
                        line1: 'new street',
                        line2: '92',
                        city: 'london',
                        state: 'LON',
                        food: [ 'carrot' , 'grapes', 'bananas' ]
                    }
                }
            },
            {
                id: 103,
                email: 'joanna@gmail.com',
                personalInfo: {
                    name: 'Joanna',
                    address: {
                        line1: 'AcornRoad',
                        line2: '14',
                        city: 'Stone',
                        state: 'STN',
                        food: [ 'carrot' , 'paprika', 'bananas' ]
                    }
                }
            }
        ]
        
        const imiona = (

            <tr>
                {investors.map(obj =>{
                    //console.log(obj)
                    return(<tr><td style={{border:'1px solid black'}}>{obj.personalInfo.name}</td>
                    
                        {obj.personalInfo.address.food.map(obj2 => {

                            //console.log(obj2)
                            return(<td style={{color:'orange',border:'1px solid black',padding:'10px'}}>{obj2}</td>)
                        })}
                        </tr>
                    )
                })}
            </tr>
        )
                return(
                    <div style={{margin:'20px'}}>
                        <h6>Row 3</h6>
                        <tr>
                                <td>{imiona}</td>
                        </tr> 
                    </div>
                )
            }
        }
        

        //#####################################################################
        
        return (    
            <div>
               
                {/* {display} */}
                {/* <p>here is a result : {item}</p>
                <p>here should be 42 : {item2}</p> */}
                {display2}
                {display3}
                {display4}
                {druk}
                <Table/>
                <Table2/>
                <Table3/> 
                <Page5/>
                <Page6/>
                <Page7/>
                
        
            </div>
        )
    }
}



