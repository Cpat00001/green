import {SUBACC_MODEL,MATCH_INSTRUMENT,FILTER_INSTRUMENTS,SEARCH_BYTYPE,ADD_INSTRU, ALLOCATION} from './../actions/types';

const initialState = {

    subbAccounts: [],
    Modelinstruments:[],
    selectedInstruments:[],
    search_type: [],
    allocation:'',
    tableInstruments:[]
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
        case SEARCH_BYTYPE:
            return{
                ...state,
                search_type: action.payload
            }
        case ALLOCATION:
            return{
                ...state,
                allocation: state.allocation == 0 ? action.payload : state.allocation + action.payload
            }
        case ADD_INSTRU:
            return{
                ...state,
                tableInstruments: [action.payload, ...state.tableInstruments]
            }
        default:
            return state
    }
}
