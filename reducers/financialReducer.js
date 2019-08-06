import {GET_FINPROD} from './../actions/types';


const initialState = {

    finProducts: [],

}


export default function(state = initialState, action){
    switch(action.type){

        case GET_FINPROD:
            return{
                ...state,
                finProducts: action.payload
            }
        default:
            return state
    }
}



