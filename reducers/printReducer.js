import {PRINT_PDF} from './../actions/types';

const initialState = {

    pdf: {
        name: 'UserName',
        age: 'notGiven',
        address: 'provided'
    }
}

export default function(state = initialState,action){
    switch(action.type){
        case PRINT_PDF:

        return{
            ...state,
        };
        default:
            return state;

    }
}