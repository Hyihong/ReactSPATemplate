//action对象
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,LOGOUT} from './actionTypes.js';

//无参数，触发LOGOUT类型的reducer
export const loginout = () => ({
    type: LOGOUT
});


export const fakeLogin = () =>{
    return{
        promise: new Promise(function(resolve, reject) {

             let isSuccess = Math.random() > 0.4 ;
             if ( isSuccess ){
                    setTimeout( () =>resolve("success"),3000 );
                    
                } else {
                    setTimeout( () => reject("failure"),3000 );
                }
        }),
        types:[LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE]
    }
}