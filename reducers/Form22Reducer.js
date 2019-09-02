import { GET_ADVISORS } from '../actions/types';

const initialState = {

    advisors:[]

}

export default function(state = initialState,action){
    switch(action.type){
        case GET_ADVISORS:
            return{
                ...state,
                advisors: action.payload
            }
        default:
            return state


    }
}