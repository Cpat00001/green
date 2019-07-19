import {SHOWPRODUCTS,DELETEPRODUCT}  from './types';

// export const showProducts = () =>{
//     return{
//         type: SHOWPRODUCTS

//     }
// }
export const handleDelete =(id) =>{
    return{
        type: DELETEPRODUCT,
        payload:id
    }
}