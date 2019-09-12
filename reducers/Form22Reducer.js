import { GET_ADVISORS,GET_COUNTRY,GET_NATION,GET_TAX,GET_TITLE,USER22FORM } from '../actions/types';

const initialState = {

    advisors:[],
    country:[],
    nation:[],
    tax:[],
    title:[],
    user:[]

}

export default function(state = initialState,action){
    switch(action.type){
        case GET_ADVISORS:
            return{
                ...state,
                advisors: action.payload
            }
            // JESLI POZOSTALE CASE ROBIA TO SAME SPROBUJ WIEC PRZYPISAC WIELE CASE DO JEDNEGO >> ZMIEN TYLKO GDZIE WYSYLASZ DATA NP country,nation,tax,title etc
        case GET_COUNTRY:
            return{
                ...state,
                country: action.payload
            }
        case GET_NATION:
            return{
                ...state,
                nation: action.payload
            }
        case GET_TAX:
            return{
                ...state,
                tax:action.payload
            }
        case GET_TITLE:
            return{
                ...state,
                title: action.payload
            }
        case USER22FORM:
            return{
                ...state,
                users: action.payload
            }
                
        default:
            return state


    }
}