import {SUBACC_MODEL,MATCH_INSTRUMENT,FILTER_INSTRUMENTS}  from './types';
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
        console.log('throw an error refuse to get sub account models', err)

    }

}

export const matchingInstrumentModel = (value) => async dispatch =>{

    let result = await axios.get('/Data/ModelDetails2.json')
    console.log('fetching all instruments for model', result.data)

    // bring in data from external source
    dispatch({

        type: MATCH_INSTRUMENT,
        payload: result.data
    })
    //dispatch second action to reducer and filter data already brought in first dispatch
    dispatch({
        type:FILTER_INSTRUMENTS,
        payload:value

    })
}

