function isPromise(obj){
    return obj && typeof obj.then === 'function';
}

export default function promiseMiddleware( {dispatch} ) {
      return function (next){
          return function(action){
              const { types,promise,...rest } = action;
              
              if( !isPromise(promise) || !(action.types && action.types.length === 3)){
                  return next(action)
              }
            
               const [pending, done, fail] = types;

               dispatch({...rest,type:pending});
               
               return action.promise.then( 
                   result => { 
                       dispatch({...rest,result,type:done})
                    },
                   error => dispatch({...rest,error,type:fail})
               )
                // return action.promise.then( response => {
                //     if( response.status === 200){
                //           response.json()
                //               .then( 
                //                     responseJson => { 
                //                         const result = responseJson.weatherinfo ;
                //                         dispatch({...rest,result,type:done})
                //                     },
                //                     error => dispatch({...rest,error,type:fail})
                //               )
                //     }else{
                //         dispatch({...rest,type:fail})
                //     }
                // }
          }
      }
}