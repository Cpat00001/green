import {ADD_DETAILS, INITIAL_DETAILS, GET_CONTACT} from '../actions/types';

const initialState = {
    
    users: [],

    contact: {}
};

export default function (state = initialState, action){
    switch(action.type){
        case ADD_DETAILS:
   
        return{
            ...state,
            users: [action.payload, ...state.users]
        }
        case GET_CONTACT:
            return{
                ...state,
                contact: action.payload
            }
    default:
        return state;
    }
}



