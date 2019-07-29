import {STYLE,BANNER} from './../actions/types';

const initialState = { 
    
    backgroundColor1: 'grey',
    backgroundColor2: 'black',
    backColor:'powderblue',
    width: '500px',
    height:'300px',
    banner: false,

    name: [
    
        {"name": "20180427", "income": 3000.54, "cost": 2100.54, "profit": 900.00},
        {"name": "20180429", "income": 2222.00, "cost": 2222.00, "profit": 0.00},
        {"name": "20180501", "income": 4050.22, "cost": 2605.22, "profit": 1400.00},
        {"name": "20180503", "income": 3800.43, "cost": 3000.43, "profit": 800.00},
        {"name": "20180505", "income": 4173.94, "cost": 3444.94, "profit": 720.00},
        {"name": "20180507", "income": 4113.94, "cost": 3350.23, "profit": 800.00}
  ]

    
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