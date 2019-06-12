import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../../css/Page.css';
import Search from 'antd/lib/input/Search';

class Page5 extends Component {

  state = {

      search: true,

  }

  componentDidMount(){
    this.setState({ search: false});
  }
 
  render() {
    const json = {
      squadName: 'Super hero squad',
      homeTown: 'Metro City',
      formed: 2016,
      secretBase: 'Super tower',
      active: true,
      members: [
        {
          name: 'Molecule Man',
          age: 29,
          secretIdentity: 'Dan Jukes',
          powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast']
        },
        {
          name: 'Madame Uppercut',
          age: 39,
          secretIdentity: 'Jane Wilson',
          powers: [
            'Million tonne punch',
            'Damage resistance',
            'Superhuman reflexes'
          ]
        },
        {
          name: 'Eternal Flame',
          age: 45,
          secretIdentity: 'Unknown',
          powers: [
            'Immortality',
            'Heat Immunity',
            'Inferno',
            'Teleportation',
            'Interdimensional travel'
          ]
        },
        {
          name: 'Johhny Five',
          age: 33,
          secretIdentity: 'SilverHand',
          powers: [
            'Immortality',
            'Heat Immunity',
            'Inferno',
            'Teleportation',
            'Invisible'
          ]
        }
      ]
    };


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
                  { model:'C', function:'X'},
                  { model:'A', function:'Z'},
                  { model:'B', function:'Y'},
                  { model:'C', function:'X'}
                ] }
              ]   }

          ]
  
  }

  //search for model C with function X
  const lev1 = data.dashboard;
  console.log(lev1);
  const level1 = lev1.filter(customer => customer.defaultView === "customer4")
  console.log('Level1',level1)
  const lev2 = level1[0].dataSource;
  console.log('Lev2',lev2)
  const level2 = lev2.filter(type => type.permissionType === "C")
  console.log("Level2",level2)
  const lev3 = level2[0].typeC;
  console.log('Lev3',lev3)
  const level3 = lev3.filter(model => model.model === "C" && model.function === "X");
  const count = level3.length;
  console.log('Liczba wyszukanych elementow',count)
  //wyszukalo tylko model C z funckja 
  console.log('Level3',level3);
  const finalLevel = level3[0].function;
  console.log('finalLevel',finalLevel);

  //warunkowe wyswietlanie
  function display(d){

    if( count > 0){
      return(
      `X function exists ${count}`
      )
      
    }else{
      return(
       <p>theres no X</p>
      )
    }

  };
  

  //search for model C with function X in loop method
  let l1 = data.dashboard;

  
  {data.dashboard.map((obj,index)=>{
    console.log(obj)
    {obj.dataSource.map((permision,index)=>{
      console.log(permision)
    })}
  })}

  {data.products.map((pay,index)=>{

    //console.log(pay.paymentTypes);
    const paa = pay.paymentTypes;
    {paa.map((method,index)=>{
      console.log('Payment method',method)
    })}
    const metoda = paa.filter(elem => elem === "cash")
    console.log(metoda.slice(0,1).toString());
  })}


  {data.products.slice(0,1).map((desc,index)=>{
    return(

      desc.productDescription,
      console.log(desc.productDescription)

    )   
  })}
  data.products.forEach(function(product){
    let productDescription = "";
    console.log(product.productDescription);
  })

  const GBP = data.products.filter(function(product){
    if(product.productId === "GBP"){
      return true;
    }
  })
 

  //########### loop everything by everything ##########
  // for( var key in data ){
  //   var arr = data[key];
  //   for( var i = 0 ; i < arr.length; i ++ ){
  //     var obj = arr[i];
  //     for(var prop in obj){
  //       if(obj.hasOwnProperty(prop)){
  //         console.log(prop + " = " + obj[prop])
  //       }
  //     }
  //     }
  //   }
    // #########################################

    for(var productId in data.products){

      if(productId.productId === "EUR"){

        console.log(data.products[productId])

      }
    }
    //###################

    const keys = Object.keys(data)
    console.log(keys)
  
    const {search} = this.state;

    return (
      <div>
        <Row>
          <Col span={6} style={{backgroundColor:'rgb(16, 72, 163)'}}>
              <h5>Left side</h5>
          </Col>
          <Col span={12}>
          <h5>Table header</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Permision Type</th>
                    <th scope="col">permissionDesc</th>
                    <th scope="col">Only type C</th>
                    <th scope="col">Model  && Function</th>
                  </tr>
                </thead>
                <tbody>
                
                      {data.dashboard.map((obj,index)=>{
                        //console.log(obj)
                        return(
                          <tr>
                            <td scope="row">{index + 1}</td>
                            <td>{obj.defaultView}</td>
                            <td>{obj.dataSource.map((type,index)=>
                                {return (
                                  <tr><td key={index}>{type.permissionType}</td></tr>
                                  )})}
                            </td>
                            <td>
                              {obj.dataSource.map((perm, index)=>{
                                return(<tr><td key={index}>{perm.permissionDesc}</td></tr>)
                              })}
                            </td>
                            <td>
                              <p>--</p>
                            </td>
                            {/* testing area */}
                            <td>
                              {/* <b>{display()}</b> */}
                              <b>{display()}</b>
                            </td>
                            
                            {/* {end of testing area} */}
                          </tr>
                        )

                      })}
                      
            
                </tbody>
              </table>
          </Col>
          <Col span={6} style={{backgroundColor:'rgb(16, 72, 163)'}}>
            <h5>Right side</h5>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={4}>
            <table className="table table-hover" >
              <thead style={{backgroundColor:'black',color:'white'}}>
                <tr>
                  <th col="scope">Nr</th>
                  <th col="scope">productId</th>
                  <th col="scope">customerPrefix</th>
                  <th col="scope">paymentTypes</th>
                  <th col="scope">pltAnnChargeCode</th>
                  <th col="scope">productDescription</th>
                </tr>
              </thead>
              <tbody>
                {data.products.map((product,index)=>{
                  return(
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.productId}</td>
                        <td>{product.customerPrefix}</td>
                        <td class="d-flex justify-content-center">
                          {product.paymentTypes.map((type,index)=>{
                            return(
                              <tr key={index}>
                                <td>{type}</td>
                              </tr>
                            )
                          })}
                        </td>
                        <td>
                          {product.pltAnnChargeCode}
                        </td>
                        <td>{product.productDescription}</td>
                      </tr>
                  )
                })}
              </tbody>
            </table>
          </Col>
          <Col span={12} offset={4} style={{backgroundColor:'pink',marginBottom:'100px'}}>  
                <h5>End of table</h5>
          </Col>
        </Row>
        
            <Row>
              <Col span={12} offset={4}>
                  <table className="table table-hover" style={{width:'500px', margin:'auto'}}>
                      <thead className="thead-dark">
                        <tr>
                          <th col='scope'>Nr</th>
                          <th col="scope">Model ID</th>
                          <th col="scope">Description</th>
                          <th col="scope">Currency</th>
                          <th col="scope">Payment method</th>
                        </tr>
                      </thead>
                      <tbody>
                            {data.models.map((model,index)=>{
                              return(
                                    <tr key={index}>
                                        <td>
                                          {index+1}
                                        </td>
                                        <td>
                                          {model.modelId}
                                        </td>
                                        <td>
                                        {model.modelDescription}
                                        </td>
                                        {data.products.slice(0,3).map((cur,index)=>{
                                          if(cur.productId === "GBP"){
                                            return(
                                              <tr key={index}>
                                                <td>{cur.productId}</td>
                                              </tr>
                                            )
                                          }
                                        })}
                                        <td>
                                        {data.products.map((pay,index)=>{

                                          console.log(pay.paymentTypes.join('-'))
                                            
                                            return(
                                              <tr key={index}>
                                              <td>
                                                {pay.paymentTypes.join('-')}
                                            </td>
                                            </tr>
                                            )
                                          })}
                                        </td>
                                        
                                    </tr>
                              )
                            })}
                      </tbody>
                  </table>
              </Col>
            </Row>
                
        <Row>
          <Col span={16} offset={4}>
             <h5 style={{backgroundColor:'powderblue'}}>Table with heros and powers</h5>
          </Col>
        </Row>    
            
        <Row>
          <Col span={24}>
          <table className="table table-bordered table-hover" style={{width:"50%" ,maxWidth:'500px',margin:'auto'}}>
          <thead className="thead-dark">
            <th scope="col">Nr</th>
            <th scope="col">Name</th>
            <th scope="col">Powers</th>
          </thead>
          <tbody>
            {json.members.map((member,index)=>{
              return(

                <tr>
                <td>{index+1}</td>
                <td>{member.name}</td>
                <td>
                  {member.powers.map((power,index)=>{
                    return(
                      <ul>
                        <li key={index}>
                          {power}
                        </li>
                      </ul>  
                    )
                  })}
                </td>
              </tr>
              )
            })}
          </tbody>
        </table>
          
          </Col>
        </Row>
        


        {/* <h5>Page 5</h5>
        <table className='table table-striped' style={{ maxWidth:'500px',margin:'auto'}}>
          <thead>
            <tr>
              <th scope='col'>Nr</th>
              <th scope='col'>Name</th>
              <th scope='col'>Power</th>
            </tr>
          </thead>
          <tbody>
           {json.members.map((member,index)=>{
             return(

              <tr>
                <td>{index + 1}</td>
                <td>{member.name}</td>
                {member.powers.map((power,index)=>{
                  return(
                    <ul>
                      <li>
                        <td>{power}</td>
                      </li>
                    </ul>
                  )
                })}
              </tr>
             )

           })}
            <tr />
          </tbody>
        </table> */}
      </div>
    );
  }
}
export default Page5;
