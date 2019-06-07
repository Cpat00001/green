import { ADD_PRODUCT, GET_PRODUCTS} from '../actions/types';

const initialState = {

    products : [
        {
          id: 1,
          name: "Financial Product_1",
          description: "short description of product_1",
          value:'150.22',
          backgroundColor:'pink',
        },
        {
          id: 2,
          name: "Financial Product_2",
          description: "short description of product_2",
          value:'200.99',
          backgroundColor:'green'
        },
        {
          id: 3 ,
          name: "Financial Product_3",
          description: "short description of product_3",
          value:'322.05'
        },
        {
          id: 4,
          name: "Financial Product_4",
          description: "short description of product_4",
          value:'400.55'
        }
      
      ],

      portfolio : [],
};

export default function( state = initialState, action){
    switch (action.type){
        case ADD_PRODUCT:
            return{
                ...state,
                portfolio : [action.payload,...state.portfolio]
                
                
            }
        case GET_PRODUCTS:
            return{
                ...state,
            };
        default:
            return state;

    }
}