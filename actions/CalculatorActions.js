import {ADDNUMBER,HANDLEREDUCER,NORMALSTATE,CLEAR,HANDLESUBMIT} from './types';

export const handleSubmit = (value) => {
    return {
        type: HANDLESUBMIT,
        payload: value
    }
} 
export const handleReducer = (value) =>{
    return{
        type: HANDLEREDUCER,
        payload: value
    }
}
// export const normalState = () =>{
//     return{
//         type:  NORMALSTATE
//     }
// }
export const handleClear = () =>{
    return{
        type: CLEAR
    }
}

