import React, { Component } from 'react'
import './css/greenstyle.css';
import Product from './Product';

class Performance extends Component {
  

  state = {
    // changeColor: false,
    // backgroundColor: 'rgb(67, 123, 187)',
    // backgroundColor1:'rgb(132, 132, 194)',
    // backgroundColor2:'rgb(188, 90, 233)',
    // backgroundColor3:'rgb(206, 65, 65)'
    products : [
      {
        id:1,
        name: "product_1",
        description: "short description of product_1",
      },
      {
        id:2,
        name: "product_2",
        description: "short description of product_2",
      },
      {
        id:3,
        name: "product_3",
        description: "short description of product_3",
      },
      {
        id:1,
        name: "product_4",
        description: "short description of product_4",
      }
    
    ]

  };

  render() {

    const {products} = this.state;

    return (
      <div>{/* opening tag of TJX */}
        <div className="container-fluid" id="pr1">
           <h3 id="pr2">Performance page</h3>
           <h5 id="pr2">Choose and add a product to your basket</h5>
         </div>
         <div className="container-fluid ">
            
                  {/* <div className="d-flex justify-content-center"> */}
                  <div className="row">

                      {products.map(product => (
                          <Product 
                            key={product.id}
                            name={product.name}
                            description={product.description}
                          />

                      ))}

                        {/* <Product style={{backgroundColor:'pink'}} /> */}

                        {/* <div className="col-sm-6" id="pr3" style={{backgroundColor:this.state.backgroundColor}} >
                          <div className="row">
                          <div id="pr5" className="col-sm-5">
                              <h4>prod 1</h4>
                              <p>Short Product description</p>
                          </div>
                          <div id="pr4" className="col-sm-5" style={{backgroundColor:'black', width:'90%',margin:'auto', height:'100px', cursor:'pointer'}}>
                                Add me
                            <i class="fas fa-plus fa-2x"></i>
                         </div>
                         </div>
                        </div> */}

                        {/* <Product /> */}

                        {/* <div className="col-sm-6" id="pr3" style={{backgroundColor:this.state.backgroundColor1}}>
                            <div className="row">
                                  <div id="pr5" className="col-sm-5">
                                      <h4>prod 2</h4>
                                      <p>Short Product description</p>
                                  </div>
                                  <div id="pr4" className="col-sm-5" style={{backgroundColor:'black', width:'90%',margin:'auto', height:'100px', cursor:'pointer'}}>
                                      Add me
                                  <i class="fas fa-plus fa-2x"></i>
                                </div>
                            </div>
                        </div> */}



                      </div>
                  {/* </div> */}
                  
         
                  {/* <div className="d-flex justify-content-center"> */}

                      
                        {/* <div className="row">
                              <Product />
                              <Product /> */}

                        {/* <div className="col-sm-6" id="pr3" style={{backgroundColor:this.state.backgroundColor2}}>
                            <h4>prod 3</h4>
                          </div>
                          <div className="col-sm-6" id="pr3" style={{backgroundColor:this.state.backgroundColor3}}>
                            <h4>prod 4</h4>
                          </div> */}
                        
                        {/* </div> */}
                    
                {/* </div> */}
         </div>

       {/* closing tag of TJX */}
       </div> 
    )
  }
}

export default Performance;
