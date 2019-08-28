import {INSERT_USER,FETCH_USERS,DELETE_USER} from './../actions/types';

const initialState = {

    users : []

}

export default function(state = initialState, action){
    switch(action.type){

        case FETCH_USERS:
            return{
                ...state
            }
            

        // needed only if decide to add to Redux-State >> Store
        case INSERT_USER:
            return {
                ...state,
                users:[action.payload, ...state.users]
            }
        case  DELETE_USER:
            return{
                ...state,
                users: state.users.filter(x => x.key !== action.payload) 
            }
        default:
            return state

    }
}

