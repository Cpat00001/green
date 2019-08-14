import {SUBACC_MODEL,MATCH_INSTRUMENT,FILTER_INSTRUMENTS,SEARCH_BYTYPE,ADD_INSTRU, ALLOCATION,DELETE_RECORD,INSERT_ALLOCATION,ALLOCATIN_SUM} from './../actions/types';

const initialState = {

    subbAccounts: [],
    Modelinstruments:[],
    selectedInstruments:[],
    search_type: [],
    tableInstruments:[],
    sum: []
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
            
                let copy = Object.assign({},state);
                let intruments = copy.tableInstruments.filter( instr => instr.id === action.instrumentId)[0]
                intruments.allocation.push(action.payload)

        case ALLOCATIN_SUM:
        //loop through arrays of allocation, get values and push to one array. then add all element of this big array to check if sum is >100 or less
        let loop = state.tableInstruments[0].allocation.forEach(function(element){console.log(element)})
                    
        default:
            return state
    }
}
