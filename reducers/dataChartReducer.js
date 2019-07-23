import {FETCH_DATA} from './../actions/types';

const initialState = {

    dataChart : [

        {"date": 20190101,"description":"ISHARES VII PLC ISHARES CORE S&P 500 UCITS ETF USD (ACC)","value": 3125.52, "balance": 3163.70},
        {"date": 20190102,"description":" ISHARES III PLC CORE MSCI WORLD UCITS ETF USD ACC GBP","value": 904.08, "balance": 4067.78},
        {"date": 20190103,"description":" ISHARES III PLC CORE MSCI WORLD UCITS ETF USD ACC GBP","value": 910.02, "balance": 4117.78},
        {"date": 20190104,"description":" ISHARES CORE GBP CORP BD UCITS ETF GBP DIST","value": 95.02, "balance": 4227.78}

    ]

    //dataChart:[]
}

export default function(state = initialState, action){

    switch(action.type){

        case FETCH_DATA:

            return{
                ...state,
                //dataChart: action.payload
            }
        default:
            return state
            
    }
}