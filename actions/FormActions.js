import {INSERT_USER,FETCH_USERS} from './types';
import axios from 'axios';

// export const inserUser = () => async dispatch =>{

//     try{

//         const res = await axios.post('/Data/FormUsers.json');
        
//         dispatch({
//             type: INSERT_USER,
//             payload: res.data
//         })
//     }catch(err){
//         console.log('sorry couldnt INSERT USER to file', err)
//     }
// } 

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

