import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,LOGOUT} from './actionTypes.js';

// state ： 初始数据，Type : any 
const initState ={ hasLogin : false ,isLoading : false }

export default (state = initState, action) => {
switch (action.type) {
    case LOGIN_START:
        return {
            ...state,
            isLoading : true,
        };
    case LOGIN_SUCCESS:{
        return {
            ...state,
            isLoading : false,
            hasLogin:true
        };
    }
    case LOGIN_FAILURE:{
        return {
            ...state,
            isLoading : false,
            hasLogin:false
        };
    }
    case LOGOUT:
        return {
            ...state,
            hasLogin:false
        };
    default:
        return state
}
}
