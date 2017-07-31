//action对象
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,LOGIN_RESET,LOGOUT} from './actionTypes.js';

//无参数，触发LOGOUT类型的reducer
export const loginout = () => ({
    type: LOGOUT
});

export const loginReset =() =>({
    type:LOGIN_RESET
})

export const fakeLogin = () =>{
    return{
        promise: new Promise(function(resolve, reject) {

             let isSuccess = Math.random() > 0.4 ;
             if ( isSuccess ){
                    setTimeout( () =>resolve("success"),3000 );
                    
                } else {
                    setTimeout( () => reject("failure"),1000 );
                }
        }),
        types:[LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE]
    }
}