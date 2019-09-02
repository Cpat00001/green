import {GET_ADVISORS} from './types';
import axios from 'axios';

export const getAdvisors = () => async dispatch =>{
    try {
        
        const response = await axios.get('/Data/Advisor.json');

        dispatch({
            type: GET_ADVISORS,
            payload:response.data
        })
    } catch (error) {

        console.log('cannot bring advisors', error)
        
    }
}