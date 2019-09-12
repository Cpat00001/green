import {GET_COMPANIES} from './types';
import axios from 'axios';
import ActionButton from 'antd/lib/modal/ActionButton';



export const getCompanies = () => async dispatch =>{
    try {
        
        const result = await axios.get('/Data/Company.json');

        dispatch({
            type: GET_COMPANIES,
            payload: result.data
        })
        
    } catch (error) {
        console.log(error)
    }
}