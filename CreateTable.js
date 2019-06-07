import React from 'react';
import { Table, Divider, Tag } from 'antd';

export default class MyTable extends React.Component {


  render() {

    //####### looping through object >> object with objects and array and display in table #########

    const templates = {
        Header1: {
          items: [1, 2]
        },
        Header2: {
          items: [2, 3, 4,5,6,7]
        },
      };


    const table2 = (

        <table>
            <tbody>
                {Object.keys(templates).map(header =>{
                    return(
                        <tr key={header}>
                            <tr>
                                <td>
                                    <b>Header: {' '}{header}</b>
                                </td>
                            </tr>
                            {templates[header].items.map(item =>{
                                return(<tr key={item.id}><td>{item}</td></tr>)
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>

    )

     //####### END of looping through object >> bobject with array and display in table #########


    //###### looping through array of objects input in table ###########

    var links = [
        { endpoint: 'america' },
        { endpoint: 'canada' },
        { endpoint: 'norway' },
        { endpoint: 'bahamas' }
      ];
   
    const atlas = (

        <table style={{backgroundColor:'powderblue',margin:'auto',width:'90%'}}>
            <tbody>
                <th >Atlas</th>
                {links.map(kraj => {
                    return (
                        <tr key={kraj.endpoint}>{kraj.endpoint}</tr>
                    )
                })}
            </tbody>
        </table>
    )
    //###### END of looping through array of objects input in table ###########

    
//############# data do tabeli z tekstem i foto. nested arrays ##########################
  const dataItems = [
            {
              title: "title1",
              content: [
                {
                  imageUrl: "http://placehold.it/300x300",
                  title: "Campaigns",
                  description:
                    "Short description explaining the use of this design in a single sentence."
                },
                {
                  imageUrl: "http://placehold.it/300x300",
                  title: "Events",
                  description:
                    "Short description explaining the use of this design in a single sentence."
                },
                {
                  imageUrl: "http://placehold.it/300x300",
                  title: "General",
                  description:
                    "Short description explaining the use of this design in a single sentence."
                }
              ]
            },
            {
              title: "title2",
              content: [
                {
                  imageUrl: "http://placehold.it/300x300",
                  title: "Video Template A",
                  description:
                    "Short description explaining the use of this design in a single sentence."
                },
                {
                  imageUrl: "http://placehold.it/300x300",
                  title: "Video Template A",
                  description:
                    "Short description explaining the use of this design in a single sentence."
                }
              ]
            }
          ]
   
    const tabela = (

            <table style={{border:'1px solid black', maxWidth:'500px',margin:'auto'}}>
                <tbody>
                    {dataItems.map((item,index)=>{
                        return (<tr>
                                <tr key={index} >
                                    <th style={{backgroundColor:'pink', width:'500px',textAlign:'center',marginTop:'20px'}}><h3>{item.title}</h3></th>
                                </tr>
                                {item.content.map((cont,index)=>{
                                    return(
                                        <div>
                                            <h5>{cont.title}</h5>
                                            <div style={{backgroundColor:'powderblue'}}>
                                                <div style={{backgroundColor:'grey',width:'70%',maxWidth:'300px',float:'left'}}>
                                                    <span><p>{cont.description}</p></span>
                                                </div>
                                                <div>
                                                     <img src={cont.imageUrl} style={{width:'100px',height:'100px'}} />
                                                </div>
                                            </div>
                                        </div>
                                        
                                    )
                                })}     
                        </tr>)
                    })}
                </tbody>
            </table>

    
    
    )
    //############# END OF data do tabeli z tekstem i foto. nested arrays ##########################


  


    return(
            <div>
                <p>create table component</p>
                {tabela}
                <h5 style={{marginTop:'20px'}}>atlas data</h5>
                <div style={{backgroundColor:'powderblue',width:'150px',margin:'auto'}}>{atlas}</div>
                <h5 style={{marginTop:'20px'}}>other data</h5>
                <div style={{backgroundColor:'grey',width:'150px',margin:'auto'}}>{table2}</div>
            </div>
    )
  }

}

