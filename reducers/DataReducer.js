import {GETDATA, PULLDATA, MODEL_DATA,MODEL_DETAILS} from './../actions/types';

const initialState = {

data:[],

data2:[],

modelName:{"name":"European Crystal"},

modelDetails:{},

data3:[]

}

export default function(state = initialState,action){
    switch(action.type){
        case GETDATA:

        return{
            ...state,
            data: action.payload
        };
        case PULLDATA:
            return{
                ...state,
                data2: action.payload

            };
        case MODEL_DATA:
            return{
                ...state,
                data3: action.payload
            };
        case MODEL_DETAILS:
            return{
                ...state,
                modelDetails: action.payload
                
            }

        default:
            return state;

    }
}