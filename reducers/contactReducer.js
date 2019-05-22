import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, INITIAL_DETAILS, GET_CONTACT, INSERT_PRODUCT, MORE_DETAILS} from '../actions/types';



const initialState = {
    contacts : [],

    contact: {  
            id:1,
            name:'',
            email: '',
            city: '',
            contribution: 0
        },
};

export default function (state = initialState , action){
    switch (action.type){
        case GET_CONTACTS:
            return{
                ...state
            }
        case ADD_CONTACT:
            return{
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        case INSERT_PRODUCT:

       
        let next = Object.assign({}, state)

        let contact = next.contacts.filter(c => c.id === action.contactId)[0]
           
        contact.products.push(action.payload)

        return next

        case GET_CONTACT:
            return {
                ...state,
                contact: action.payload
            }


        case MORE_DETAILS:
                  
        return{
            ...state,
            contacts: state.contacts.map(contact => contact.id === action.payload.id ?
            (contact = action.payload): contact) 
        }
        

        case DELETE_CONTACT:
            return{
                ...state,
                  contacts: state.contacts.filter(
                    contact => contact.id !== action.payload)    
            }
            case INITIAL_DETAILS:
            let ns = Object.assign({},state)
            if(ns.contacts.length > 0){
                ns.contact = ns.contacts.filter(contact => contact.id === action.payload)[0]
            }
            return Object.assign({}, state, ns)
           
        default:
            return state;
    }
}


