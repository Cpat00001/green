import {STYLE, BANNER} from './types';

export const styling = () => {
    return {
        type: STYLE,
        // payload: color
    }
}

export const banner = () =>{
    return{
        type: BANNER
    }
}
