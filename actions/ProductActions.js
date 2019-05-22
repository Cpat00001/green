import {ADD_PRODUCT, GET_PRODUCTS} from './types';

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