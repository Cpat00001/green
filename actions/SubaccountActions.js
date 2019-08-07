import {SUBACC_MODEL}  from './types';
import axios from 'axios';

export const getSubAccountModels = () => async dispatch => {

    try{

        let result = await axios.get('/Data/models.json')
        console.log('fetching data for suaccounts', result.data)

        dispatch({

            type:SUBACC_MODEL,
            payload: result.data
        })

    }catch(err){
        console.log('throw an error refuse get sub account models', err)

    }

}