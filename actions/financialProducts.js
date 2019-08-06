import {GET_FINPROD} from './types';
import axios from 'axios';


export const getFinProd = () => async dispatch => {

    try{
        
        const res = await axios.get('/Data/products.json');
        // console.log('fetching data from financial products', res.data)

        dispatch({
            type: GET_FINPROD,
            payload: res.data
        })

    }catch (err){

        console.log('sorry no data from financialProducts', err)

    }
}





