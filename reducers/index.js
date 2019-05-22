import {combineReducers} from 'redux';
import contactReducer from './contactReducer';
import detailReducer from './detailReducer';
import productReducer from './productReducer';

export default combineReducers({
    contact: contactReducer,
    detail: detailReducer,
    product: productReducer,
})



