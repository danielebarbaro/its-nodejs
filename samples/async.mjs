import {getProduct} from './products.mjs';

const productOne = await getProduct(562347)
const productTwo = await getProduct(123123)

console.log('Product Price: ', productOne?.price)
console.log('Product Price: ', productTwo?.price)

const result = 'Done';
console.log(result)

