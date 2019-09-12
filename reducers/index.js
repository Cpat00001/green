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
import financialReducer from './financialReducer';
import subaccountReducer from './subaccountReducer';
import formReducer from './formReducer';
import Form22Reducer from './Form22Reducer';
import Company23Reducer from './companies23Reducer';



export default combineReducers({
    contact: contactReducer,
    detail: detailReducer,
    product: productReducer,
    pdf: printReducer,
    style: styleReducer,
    data: dataReducer,
    value: calculatorReducer,
    produkt: prodReducer,
    fetchData: dataChartReducer,
    financialProd: financialReducer,
    subAcc: subaccountReducer,
    register:formReducer,
    form22: Form22Reducer,
    company: Company23Reducer
})



