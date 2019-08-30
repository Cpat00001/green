import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {deleteUser,fetchUsers} from './../../actions/FormActions'
import './../../css/Page18.css';
import { Form, Input, Button, Checkbox, Row,Col,Select,Icon,Table, Divider } from 'antd';
const { Search } = Input;

 class Page20_table extends Component {
     constructor(props){
         super(props);

         this.state = {
          search:''
         }

         this.HandleOnClickSearch = this.HandleOnClickSearch.bind(this);
     }
   

     HandleOnClickSearch(){
       const searchBy = this.state.search;

       if(searchBy.length < 1){
         alert('Insert any txt to get results')
       }
      //  }else{
      //     this.props.searchResult(searchBy)
      //  }
       console.log('this.state.search______',this.state.search)
       console.log('HandleOnClickSearch CLICKED')
     }

     updateSearch(event) {

      this.setState({search:event.target.value.substr(0,20)});
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
      // console.log('podaj id zawodnikow', users)
      // console.log('this.state.search', this.state.search)
      
      //linia ponizej filtruje przez users List from local state podany from ParentComponent, nastepnie return ONLY these matching to this.state.search
      // ktory jest tekstem wpisanym z okna wyszukiwania
      //DZIALAJACE wyszukiwanie po IMIENIU
      const dataSource = this.props.users.filter((user)=>{ return user.fname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1});
      console.log('dataSource',dataSource)

          
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
                editable: true,
            },
            {
                title:'Manage',
                key:'manage',
                width: 100,
                // dzialajacy code na guzikach zostaw to skomentowane dla potrzeb innych testow
                render:(text,record) => (<span><Button type="danger" onClick={e => this.deleteUser(record)}>Delete</Button>
                                    <Divider type="vertical" />
                                    </span>)
            }
          ];

        return (
            <div >
              {this.props.users.length !== 0?(
              <div>
              <div style={{maxWidth:'500px', margin:'auto' , marginTop:'50px'}}>
              <Search placeholder="search in table by name" enterButton="Search" size="large" name='search' value={this.state.search} onChange={this.updateSearch.bind(this)} onSearch={this.HandleOnClickSearch} />
              </div>
              <Table rowKey="key" dataSource={dataSource} columns={columns} pagination={false} className='p19_table' scroll={{ x: 1300 }}/></div>):(null)}        
            </div>          
      )
    }
}
Page20_table.propTypes = {

  deleteUser: PropTypes.func.isRequired,
  users:PropTypes.object.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  searchResult: PropTypes.func.isRequired
}

const mapStateToProps = state =>{
  return{
    users: state.register.users
  }
}

export default connect(mapStateToProps, {deleteUser,fetchUsers}) (Page20_table);









//PONIZEJ CALY DZIALAJACY KOMPONENT ODKOMENTUJ I BEDZIE OK
// import React, { Component } from 'react';
// import {PropTypes} from 'prop-types';
// import {connect} from 'react-redux';
// import {deleteUser,fetchUsers,searchResult} from './../../actions/FormActions'
// import './../../css/Page18.css';
// import { Form, Input, Button, Checkbox, Row,Col,Select,Icon,Table, Divider } from 'antd';
// const { Search } = Input;

//  class Page20_table extends Component {
//      constructor(props){
//          super(props);

//          this.state = {
//           search:''
//          }

//          this.HandleOnClickSearch = this.HandleOnClickSearch.bind(this);
//          //this.handleInputChange = this.handleInputChange.bind(this);
//      }
   

//      HandleOnClickSearch(){
//        const searchBy = this.state.search;

//        if(searchBy.length < 1){
//          alert('Provide more than 3 characters')
//        }else{
//           this.props.searchResult(searchBy)
//        }
//        console.log('this.state.search______',this.state.search)
//        console.log('HandleOnClickSearch CLICKED')
//      }

//      updateSearch(event) {

//       this.setState({search:event.target.value.substr(0,20)});
//     }


//      deleteUser = record => {
//          console.log('TABLE DELETE CLICKED___ show ID', record.key)
//          const id = record.key
//          this.props.deleteUser(id)
//      }


//     render() {

//       let table;

//       if(this.props.users.length !== 0){
//         table = <Table rowKey="key" dataSource={dataSource} columns={columns} pagination={false} className='p19_table' scroll={{ x: 1300 }}/>
//       }else{
//         table = <h5>lipa</h5>
//       }

//       const users = this.props.users
//       console.log('podaj id zawodnikow', users)
//       console.log('this.state.search', this.state.search)
//         //dzialajacy dataSource dla tabeli - wszystko OK
//         const dataSource = this.props.users;
//         console.log('dataSource',dataSource)

//         //przefiltruj najpierw this.props.users i pozniej mapowanych podaj jako dataSource
          
//           const columns = [
            
//             {
//               title: 'Name',
//               dataIndex: 'fname',
//               key: 'fname',
//             },
//             {
//               title: 'email',
//               dataIndex: 'email',
//               key: 'email',
//             },
//             {
//               title: 'Citizenship',
//               dataIndex: 'nation',
//               key: 'nation',
//             },
//             {
//                 title: 'Contribution',
//                 dataIndex: 'value',
//                 key: 'value',
//             },
//             {
//                 title: 'Workplace',
//                 dataIndex: 'workplace',
//                 key: 'workplace',
//                 editable: true,
//             },
//             {
//                 title:'Manage',
//                 key:'manage',
//                 width: 100,
//                 // dzialajacy code na guzikach zostaw to skomentowane dla potrzeb innych testow
//                 render:(text,record) => (<span><Button type="danger" onClick={e => this.deleteUser(record)}>Delete</Button>
//                                     <Divider type="vertical" />
//                                     </span>)
//             }
//           ];

//         return (
//             <div >
//               {this.props.users.length !== 0?(
//               <div>
//               <div style={{maxWidth:'500px', margin:'auto' , marginTop:'50px'}}>
//               <Search placeholder="search in table by name, email or city" enterButton="Search" size="large" name='search' value={this.state.search} onChange={this.updateSearch.bind(this)} onSearch={this.HandleOnClickSearch} />
//               </div>
//               <Table rowKey="key" dataSource={dataSource} columns={columns} pagination={false} className='p19_table' scroll={{ x: 1300 }}/></div>):(null)}        
//             </div>          
//       )
//     }
// }
// Page20_table.propTypes = {

//   deleteUser: PropTypes.func.isRequired,
//   users:PropTypes.object.isRequired,
//   fetchUsers: PropTypes.func.isRequired,
//   searchResult: PropTypes.func.isRequired
// }

// const mapStateToProps = state =>{
//   return{
//     users: state.register.users
//   }
// }

// export default connect(mapStateToProps, {deleteUser,fetchUsers,searchResult}) (Page20_table);
