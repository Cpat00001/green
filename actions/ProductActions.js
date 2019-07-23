import {ADD_PRODUCT, GET_PRODUCTS,DELETEPRODUCT} from './types';

export const getProducts = () => {
    return{
        type: GET_PRODUCTS
    }
}

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
export const handleDelete =(id) =>{
    return{
        type: DELETEPRODUCT,
        payload:id
    }
}