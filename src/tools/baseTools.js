export const isArray = function isArray(object){
    return object && typeof object==='object' &&
            Array == object.constructor;
}

// 深度遍历中国省市区数据
export class mapChinaDivisionJson {
    constructor( data ) {
        this._options = []
        this.doMap( data ,this._options );
        return this._options ;
    }

    doMap( d , opt  ){
        //pure object => have childrenNode
        if(  !isArray( d ) ){
             Object.keys( d ).map( item => {
                      opt.push({
                          value:item,
                          label:item,
                          children: [],
                          isLeaf: false
                      })
             })

             Object.keys( opt ).map( item =>{
                  this.doMap( d[ opt[item].value ] , opt[item].children  )
             })

        }else{
              Object.keys( d ).map( item => {
                      opt.push({
                          value:d[item],
                          label:d[item],
                          isLeaf: true
                      })
             })
        }
    }
}