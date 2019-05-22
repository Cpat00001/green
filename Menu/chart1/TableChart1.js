import React, { Component } from 'react'
import '../../css/greenstyle.css';
import {ResponsiveContainer} from 'recharts'

 class TableChart1 extends Component {
  render() {

    // some data to loop throught should be here
    return (
   

    
                            <div>
                             {/* <div className="col-sm-12" id="table1"> */}
                                {/* <table className="table table-striped justify-content-center"> */}
                                <table class="table table-sm table-striped table-hover">
                                    <thead className="thead-primary">
                                        <tr>
                                            <th scope="col">Nr</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Value $$</th>
                                            <th scope="col">Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>04/07/2019</td>
                                            <td>402,083,14</td>
                                            {/* if result is on plus display green */}
                                            <td>+ 3% </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>04/06/2019</td>
                                            <td>402,080,14</td>
                                            {/* if result is minus display red */}
                                            <td>- 1% </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>04/05/2019</td>
                                            <td>402,078,14</td>
                                            <td>- 1% </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>04/04/2019</td>
                                            <td>402,080,14</td>
                                            <td>0% </td>
                                        </tr>
                                    </tbody>
                                </table>
                            {/* </div>  */}
                            </div>
    
    )
  }
}

export default TableChart1;
