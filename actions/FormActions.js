import {INSERT_USER,FETCH_USERS, DELETE_USER,SEARCH_RESULT} from './types';
import axios from 'axios';

export const insertUser = (user) =>{
    return{
        type: INSERT_USER,
        payload: user
    }
}
export const fetchUsers = () =>{
    return{
        type: FETCH_USERS
    }
}
export const deleteUser = (id) =>{
    return{
        type: DELETE_USER,
        payload: id
    }
}



