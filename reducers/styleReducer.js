import {STYLE,BANNER} from './../actions/types';

const initialState = { 
    
    backgroundColor: 'pink',
    banner: false,
}

export default function(state = initialState,action){
    switch(action.type){
        case STYLE:
            return{
                ...state,
            }
        case BANNER:
            return{
                ...state
            }
            default:
                return state;
    }
}