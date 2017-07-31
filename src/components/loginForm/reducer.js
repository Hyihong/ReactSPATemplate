import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_RESET ,LOGOUT} from './actionTypes.js';

// state ： 初始数据，Type : any 
const initState ={ hasLogin : false ,isLoading : false }

export default (state = initState, action) => {
switch (action.type) {
    case LOGIN_START:
        return {
            ...state,
            status:'logining',
            isLoading : true,
        };
    case LOGIN_SUCCESS:{
        return {
            ...state,
            status:'success',
            isLoading : false,
            hasLogin:true
        };
    }
    case LOGIN_FAILURE:{
        return {
            ...state,
            status:'failure',
            isLoading : false,
            hasLogin:false
        };
    }
    case LOGIN_RESET:{
        return{
            ...state,
            status:'',
        }
       
    }
    case LOGOUT:
        return {
            ...state,
            status:'',
            hasLogin:false
        };
    default:
        return state
}
}
