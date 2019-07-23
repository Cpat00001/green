import {combineReducers} from 'redux';
import contactReducer from './contactReducer';
import detailReducer from './detailReducer';
import productReducer from './productReducer';
import printReducer from './printReducer';
import styleReducer from './styleReducer';
import dataReducer from './DataReducer';
import calculatorReducer from './calculatorReducer';
import prodReducer from './prodReducer';
import dataChartReducer from './dataChartReducer';

export default combineReducers({
    contact: contactReducer,
    detail: detailReducer,
    product: productReducer,
    pdf: printReducer,
    style: styleReducer,
    data: dataReducer,
    value: calculatorReducer,
    produkt: prodReducer,
    fetchData: dataChartReducer
})



