import {products} from "./dataset.mjs";

const initialValue = 0;
console.log('Products', products);

/*
    Restituire la somma di tutti i prodotti
    La somma è 86.27
*/

const sumMap = products
    .map(item => item.price)
    .reduce((prev, current) => prev + current, initialValue);

const sumReduce = products.reduce(
    (current, {price}) => current +  price,
    initialValue
);
console.log('La somma è', sumMap);
console.log('La somma è', sumReduce);
