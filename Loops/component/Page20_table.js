import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {deleteUser,fetchUsers} from './../../actions/FormActions'
import './../../css/Page18.css';
import { Form, Input, Button, Checkbox, Row,Col,Select,Icon,Table, Divider } from 'antd';

 class Page20_table extends Component {
     constructor(props){
         super(props);

         this.state = {}
     }
     componentDidMount(){
      this.props.fetchUsers();
  }


     editUser = record =>{
        console.log('TABLE EDIT CLICKED___ID', record.key)
        const id = record.key;
     }
     deleteUser = record => {
         console.log('TABLE DELETE CLICKED___ show ID', record.key)
         const id = record.key
         this.props.deleteUser(id)
     }


    render() {

      let table;

      if(this.props.users.length !== 0){
        table = <Table rowKey="key" dataSource={dataSource} columns={columns} pagination={false} className='p19_table' scroll={{ x: 1300 }}/>
      }else{
        table = <h5>lipa</h5>
      }

      const users = this.props.users
      console.log('podaj id zawodnikow', users)

      const id = this.props.users.map(user => user.key)
      console.log('ID from 20table___',id)
        

        const dataSource = this.props.users;
        console.log('dataSource',dataSource)
          
          const columns = [
            {
              title:'key',
              dataIndex:'key',
              key: 'key'
            },
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
                // dzialajacy code na guzikach zostaw to skomentowane dla potrzeb innych testow
                render:(text,record) => (<span><Button type="danger" onClick={e => this.deleteUser(record)}>Delete</Button>
                                    <Divider type="vertical" />
                                    <Button type="primary" onClick={e => this.editUser(record)}>Edit</Button>
                                    </span>)
            }
          ];

        return (
            <div>
              {this.props.users.length !== 0?(<Table rowKey="key" dataSource={dataSource} columns={columns} pagination={false} className='p19_table' scroll={{ x: 1300 }}/>):(null)}        
            </div>          
      )
    }
}
Page20_table.propTypes = {

  deleteUser: PropTypes.func.isRequired,
  users:PropTypes.object.isRequired,
  fetchUsers: PropTypes.func.isRequired
}

const mapStateToProps = state =>{
  return{
    users: state.register.users
  }
}

export default connect(mapStateToProps, {deleteUser,fetchUsers}) (Page20_table);
