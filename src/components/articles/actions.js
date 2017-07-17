//action对象
import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';

//Function类型的action,在不加中间件的情况下，会比捕获报错，但是加上中间件（异步请求用 redux-thunk ）
export const fetchArticles = () =>{
    const apiUrl = "https://api.github.com/search/repositories?q=javascript&sort=stars";
    return {
        promise:fetch( apiUrl ).then(response => {
            if( response.status !== 200){
                throw new Error("获取失败")
            }

            return response.json().then( responseJson  => responseJson )
        }),
        types: [FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE]
    }
}