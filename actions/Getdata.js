import {GETDATA, PULLDATA, MODEL_DATA, MODEL_DETAILS} from './types';
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

export const modelsData = () => async dispatch => {

    const res = await axios.get('/Data/models.json')

    dispatch({
        type: MODEL_DATA,
        payload: res.data
    })
}
export const modelDetails = () => async dispatch => {

    const res = await axios.get('/Data/modelDetails.json')

    dispatch({
        type: MODEL_DETAILS,
        payload: res.data
    })
}