import {SUBACC_MODEL} from './../actions/types';

const initialState = {

    subbAccounts: []
};

export default function(state = initialState , action){

    switch(action.type){

        case SUBACC_MODEL:
            return{
                ...state,
                subbAccounts: action.payload 
            } 
        default:
            return state

    }
}
