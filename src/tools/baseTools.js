export const isArray = function isArray(object){
    return object && typeof object==='object' &&
            Array === object.constructor;
}

