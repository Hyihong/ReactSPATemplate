import { LOGININ ,LOGINOUT} from './actionTypes.js';

// state ： 初始数据，Type : any 
const initState ={ hasLogin : false }

export default (state = initState, action) => {
switch (action.type) {
    case LOGININ:
        return {
            ...state,
            hasLogin:true
        };
    case LOGINOUT:
        return {
            ...state,
            hasLogin:false
        };
    default:
        return state
}
}
