import React, { Component } from 'react';
import { Table, Divider, Button } from 'antd';
import './../../css/Page18.css';

 class Page20_table extends Component {
     constructor(props){
         super(props);

         this.state = {}
     }
     editUser = () =>{
        console.log('TABLE EDIT CLICKED___')
     }
     deleteUser = () => {
         console.log('TABLE DELETE CLICKED___')
     }


    render() {

        console.log('users from 20table___',this.props.users)
        console.log('this.props.users.name',this.props.fname)

        const dataSource = this.props.users;
          
          const columns = [
            {
              title: 'Name',
              dataIndex: 'fname',
              key: 'fname',
            },
            {
              title: 'email',
              dataIndex: 'email',
              key: 'email',
            },
            {
              title: 'Citizenship',
              dataIndex: 'nation',
              key: 'nation',
            },
            {
                title: 'Contribution',
                dataIndex: 'value',
                key: 'value',
            },
            {
                title: 'Workplace',
                dataIndex: 'workplace',
                key: 'workplace',
            },
            {
                title:'Manage',
                key:'manage',
                width: 300,
                render:() => (<span><Button type="danger" onClick={this.deleteUser}>Delete</Button>
                                    <Divider type="vertical" />
                                    <Button type="primary" onClick={this.editUser}>Edit</Button>
                                    </span>)
            }
          ];

        return (
            <div>
                <Table dataSource={dataSource} columns={columns} pagination={false} className='p19_table'/>
            </div>
        )
    }
}
export default Page20_table;
