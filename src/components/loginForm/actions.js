//action对象
import * as ActionTypes from './actionTypes.js';

//无参数，触发TYPEONE类型的reducer
export const loginin = () => ({
    type: ActionTypes.LOGININ
});

export const loginout = () => ({
    type: ActionTypes.LOGINOUT
});