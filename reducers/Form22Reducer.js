import { GET_ADVISORS,GET_COUNTRY,GET_NATION,GET_TAX,GET_TITLE } from '../actions/types';

const initialState = {

    advisors:[],
    country:[],
    nation:[],
    tax:[],
    title:[]

}

export default function(state = initialState,action){
    switch(action.type){
        case GET_ADVISORS:
            return{
                ...state,
                advisors: action.payload
            }
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
        
        default:
            return state


    }
}