import {SUBACC_MODEL,MATCH_INSTRUMENT,FILTER_INSTRUMENTS,SEARCH_BYTYPE,ADD_INSTRU, ALLOCATION,DELETE_RECORD,INSERT_ALLOCATION} from './../actions/types';

const initialState = {

    subbAccounts: [],
    Modelinstruments:[],
    selectedInstruments:[],
    search_type: [],
    // allocation:[],
    tableInstruments:[],
    sum: ''
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
        case DELETE_RECORD:
            return{
                ...state,
                tableInstruments: state.tableInstruments.filter(record => record.id !== action.payload)
            }
        case INSERT_ALLOCATION:
            return{
                ...state,
                sum: action.payload
                //allocation: state.subAcc.tableInstruments.allocation.push(action.payload)

            }
        default:
            return state
    }
}
