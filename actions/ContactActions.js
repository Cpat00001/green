import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, INITIAL_DETAILS, GET_CONTACT , INSERT_PRODUCT, MORE_DETAILS } from './types';

export const getContacts = () => {
    return {
        type: GET_CONTACTS
    };
};

export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact
    }
}

export const deleteContact = id => {
    return {
        type: DELETE_CONTACT,
        payload: id
    }
}
export const display_initial = (contact) =>{
    return{
        type: INITIAL_DETAILS,
        payload: contact
    }
}
export const get_contact = (contact) => {
    return{
        type:GET_CONTACT,
        payload: contact
    }
}
export const insert_product = (contactId, product) => {
    //console.log(contactId, product)
    return{
        type: INSERT_PRODUCT,
        contactId: contactId,
        payload: product,
    }
}
export const more_details = (user) => {
    return{
        type: MORE_DETAILS,
        payload: user
    }
}



