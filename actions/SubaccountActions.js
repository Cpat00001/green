import {SUBACC_MODEL,MATCH_INSTRUMENT,FILTER_INSTRUMENTS, SEARCH_BYTYPE,ADD_INSTRU, ALLOCATION,DELETE_RECORD,INSERT_ALLOCATION, ALLOCATIN_SUM, SET_DATE, MODEL_NAME, RADIO_BUTTON, CREATE_SUBMODEL}  from './types';
import axios from 'axios';
import { relativeTimeRounding } from 'moment';

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
// actions for popup window >> MODAL >> search by TYPE search by Name , search by SEDOL 

export const searchByType = () => async dispatch =>{
    let result = await axios.get('/Data/ModelDetails2.json')
    console.log('SEARCH BY TYPE FOR MODAL', result.data)
    dispatch({
        type: SEARCH_BYTYPE,
        payload:result.data
    })
}
//add  a row (with instrument) from table to reducer state.
export const addInstrument = (newInstrument) =>{
    return{
        type: ADD_INSTRU,
        payload: newInstrument
    }
}

// this acction will be used for allocation
export const allocations = (allo) => {
    return{
        type: ALLOCATION,
        payload: allo

    }
}
//delete row/record from table
export const deleteRecord = id => {
    return{
        type: DELETE_RECORD,
        payload: id
    }
}
//INSERT ALLOCATION
export const insertAllocation = (instrumentId,value) =>{
    return{
        type: INSERT_ALLOCATION,
        instrumentId: instrumentId,
        payload: value
    }
}
// ALLOCATIN_SUM
export const allocationSum = () => {
    return{
        type:ALLOCATIN_SUM
    }
}
// SET DATE FOR SUBMITED MODEL
export const setDate = (date) =>{
    return{
        type: SET_DATE,
        payload:date
    }
}
// SET MODEL_NAME
export const modelDate = (modelName) =>{
    return{
        type: MODEL_NAME,
        payload: modelName
    }
}
export const radioButton = (radioMessage) =>{
    return{
        type:RADIO_BUTTON,
        payload: radioMessage  
    }
}
export const createNewSubModel = (newSubModel) =>{
    return{
        type: CREATE_SUBMODEL,
        payload: newSubModel
    }
}

