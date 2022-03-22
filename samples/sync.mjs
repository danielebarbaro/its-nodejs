import {getProductSync} from './products.mjs';

const productOne = getProductSync(562347)
console.log('Product Price: ', productOne?.price)

const productTwo = getProductSync(123123)
console.log('Product Price: ', productTwo?.price)

const result = 'Done';
console.log(result)