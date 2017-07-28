
import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';
export default (state = {status:'loading'} , action) =>{
    switch(action.type){
        case FETCH_STARTED:
          return {status:'loading'}
        case FETCH_SUCCESS:{
            return {
                ...state,
                status:'sucess',
                ...action.result
            }
        }
        case FETCH_FAILURE:{
            return {
                status:'failure',
            }
        }
        default:{
            return state;
        }
    }
}
