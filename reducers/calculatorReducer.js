import {HANDLESUBMIT,HANDLEREDUCER,NORMALSTATE,CLEAR} from '../actions/types';

const calculatorState = { 
                          
                          value: 0, 
                          result: 44,
                          minus:''
                        
                        };

export default function(state = calculatorState, action){
    switch(action.type){
        case NORMALSTATE:
            return{
                ...state, 
            }
        case HANDLESUBMIT:
            return{
                ...state,
                value: state.value == 0 ? action.payload : state.value + action.payload
            }
            case HANDLEREDUCER:
                return{
                    ...state,
                    value: state.value == 0 ? action.payload : state.value - action.payload
                }
            case CLEAR:
                return{
                    ...state,
                    value: 0,
                    minus:0
                } 
            default:
                return state;
            
        }

    }
    
    