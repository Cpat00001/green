import {ADD_DETAILS, INITIAL_DETAILS, GET_CONTACT} from './types';

export const add_details = (user) => {
    return{
        type: ADD_DETAILS,
        payload:user
    }
}

export const display_initial = (contact) =>{
    return{
        type: INITIAL_DETAILS,
        payload: contact
    }
}
export const get_contact = id => {
    return{
        type: GET_CONTACT,
        payload: id
    }
}




