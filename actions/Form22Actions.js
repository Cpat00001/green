import {GET_ADVISORS,GET_COUNTRY,GET_NATION,GET_TAX,GET_TITLE} from './types';
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
//fetch countries for a dropdownList
export const getCountry = () => async dispatch => {
    try {
        
        const response = await axios.get('/Data/Country.json');

        dispatch({
            type:GET_COUNTRY,
            payload: response.data
        })
    } catch (error) {
        console.log('cannot bring countries', error)
    }
}
//fetch nationality from external file for dropdownList
export const getNation = () => async dispatch =>{

    try {
            const response = await axios.get('/Data/Nation.json');

        dispatch({
            type:GET_NATION,
            payload: response.data
        })    
    } catch (error) {
        console.log('cannot fetch Nation',error)
    }

    
}
export const getTax = () => async dispatch =>{
    try {
            const response = await axios.get('/Data/TaxCountry.json');

        dispatch({
            type: GET_TAX,
            payload: response.data
        })
    } catch (error) {
        console.log('cannot fetch Taxation', error)
    }
}
export const getTitle = () => async dispatch =>{
    try {
        const response = await axios.get('/Data/Title.json');
        dispatch({
            type:GET_TITLE,
            payload:response.data
        })
    } catch (error) {
        console.log('sorry but couldnt fetch titles', error)
    }
}