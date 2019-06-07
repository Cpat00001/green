import React, { Component } from 'react';
import MyTable from '../CreateTable';
import { Table, Divider, Tag } from 'antd';
import Loops2 from './Loops2';



export class TableAnt extends Component {
    render() {

        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a href="javascript:;">{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            }
          ];
          
          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
            {
                key: '4',
                name:'Jack Tester',
                age: 24,
                address: 'Lichfied',
                tags: ['developer']
            }
          ];

        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}


export class Table3 extends Component {
    render() {

        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a href="javascript:;">{text}</a>,
            },
            {
              title: 'Surname',
              dataIndex: 'surname',
              key: 'surname',
            },
            {
              title: 'Occupation',
              dataIndex: 'occupation',
              key: 'occupation',
            }
          ];
          
          const data = [
            {
              key: '1',
              name: 'John',
              surname:'Brown',
              occupation:'pilot'
            },
            {
              key: '2',
              name: 'Jim',
              surname:'Green',
              occupation:'doctor'
            },
            {
              key: '3',
              name: 'Joe Black',
              surname:'Black',
              occupation:'electrician'
            },
            
          ];

       


        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}



 class Looper extends Component {
    render() {
        return (
            <div>
                <p><b>looper is here</b></p>
                 <Table3/>
                 <TableAnt/>
                 <MyTable/>
                 <Loops2/>
               
            </div>
        )
    }
}
export default Looper;
