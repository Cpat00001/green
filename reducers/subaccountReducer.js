import {SUBACC_MODEL,MATCH_INSTRUMENT,FILTER_INSTRUMENTS,SEARCH_BYTYPE,ADD_INSTRU, ALLOCATION,DELETE_RECORD,INSERT_ALLOCATION,ALLOCATIN_SUM, SET_DATE,MODEL_NAME, RADIO_BUTTON, CREATE_SUBMODEL} from './../actions/types';

const initialState = {

    subbAccounts: [],
    Modelinstruments:[],
    selectedInstruments:[],
    search_type: [],
    tableInstruments:[],
    sum: "",
    ModelDate:'',
    ModelName:'',
    radio:'',
    newSubModel:[]
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
                let instruments = copy.tableInstruments.filter( instr => instr.id === action.instrumentId)[0]
                //intruments.allocation.push(action.payload)
                instruments.allocation = action.payload

        case ALLOCATIN_SUM:
        
        
            // let loop = state.tableInstruments.map( element => parseInt(element.allocation))
            // console.log('podaj looooop___', loop)
            // let sum = loop.reduce((a, b)=> a + b, 0 )
            // console.log('suuuuuuummm___',sum)
            return{
                ...state,
                sum: state.tableInstruments.map(element => parseInt(element.allocation)).reduce((a, b)=> a + b, 0)
                
                // inny test
                //sum: state.tableInstruments.map( (element) => { parseInt(element.allocation) }).reduce((a, b)=> {
                    // if(typeof b === "undefined" || b === ''){

                    //     b = 0;

                    //     console.log(`a value ${a}`)
                    //     console.log(`b value ${b}`)

                    //     console.log(`sum ${a + b}`)

                    //     return a + b

                    // }else{

                    //     console.log(`a value ${a}`)
                    //     console.log(`b value ${b}`)

                    //     console.log(`sum ${a + b}`)

                    //     return a + b

                    // }

                //}, 0 )
            }
        case SET_DATE:
            return{
                ...state,
                ModelDate: action.payload

            }
        case MODEL_NAME:
            return{
                ...state,
                ModelName: action.payload

            }
        case RADIO_BUTTON:
            return{
                ...state,
                radio: action.payload

            }
        case CREATE_SUBMODEL:
            return{
                ...state,
                newSubModel: [action.payload]
            }
        
            
        
        default:
            return state
    }
}
