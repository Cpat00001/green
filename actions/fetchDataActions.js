import {FETCH_DATA} from './types';
import axios from 'axios';

// export const fetchData = () => async dispatch =>{

//     const res = await axios.get('/Data/tablepdf1.json')
    
    
//     dispatch({
//         type: FETCH_DATA,
//         payload:res.data
//     })
// }

async function fetchData() {
    try {
      const response = await axios.get('/Data/tablepdf1.json');
      console.log(response);
      //payload: response;
    } catch (error) {
      console.error(error);
    }
  }




