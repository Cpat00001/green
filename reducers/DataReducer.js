import {GETDATA, PULLDATA} from './../actions/types';

const initialState = {

data:[],

data2:[]

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

            }
        default:
            return state;

    }
}