export function productList(){
    return{
        type: 'PRODUCT_LIST',
        payload:[
            {id:1,name: 'bread'},
            {id:2,name: 'JAM'},
            {id:3,name: 'Salt'}
        ]
    }
}