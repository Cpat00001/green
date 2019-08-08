import {SUBACC_MODEL,MATCH_INSTRUMENT,FILTER_INSTRUMENTS} from './../actions/types';

const initialState = {

    subbAccounts: [],
    Modelinstruments:[],
    selectedInstruments:[]
};

export default function(state = initialState , action){

    switch(action.type){

        case SUBACC_MODEL:
            return{
                ...state,
                subbAccounts: action.payload 
            }
        case MATCH_INSTRUMENT:
            return{
                ...state,
                Modelinstruments: action.payload

            }
        case FILTER_INSTRUMENTS:
            return{
                ...state,
                selectedInstruments: state.Modelinstruments.filter( model => model.match === action.payload )
                

            }
        default:
            return state

    }
}
