import {GETDATA, PULLDATA} from './types';
import axios from 'axios';


export const getData = () => async dispatch => {

    const res = await axios.get('https://jsonplaceholder.typicode.com/users')

    dispatch({
        type: GETDATA,
        payload: res.data
    })

}
export const pullData = () => async dispatch =>{

    const res = await axios.get('/Data/tablepdf1.json')

    dispatch({
        type: PULLDATA,
        payload:res.data
    })
}
