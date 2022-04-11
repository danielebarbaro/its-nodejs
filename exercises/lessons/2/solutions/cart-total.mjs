/**
 *
 * Sommare tutti i prezzi dei prodotti contenuti in
 * Es:
 *      const result = sum(products)
 *      console.log('La somma è :', 86.27);
 *
 * */

// Importo tutti i prodotti
import {products} from "./dataset.mjs";

const initialValue = 0;

// stampo in console i prodotti
console.log('Products', products);

// Soluzione con funzione dichiarativa e ciclo for - function declaration
function calculateSum(products) {
    let result = 0;
    for (let product of products) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
        result += product.price;
    }
    return result;
}

console.log('La somma con calculateSum() è:', calculateSum(products), '\n');

// Soluzione con funzione anonima e ciclo for
const calculateSumAnonymous = function (products) {
    let result = 0;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    for (let product of products) {
        result += product.price;
    }
    return result;
}
console.log('La somma con calculateSumAnonymous() è:', calculateSum(products), '\n');

// Soluzione con Anonymous function + map() + reduce()
// MAP: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// REDUCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const sumMap = (products) => products
    .map(item => item.price)
    .reduce((prev, current) => prev + current, initialValue);
console.log('La somma con sumMap() è:', sumMap(products), '\n');

// Soluzione con Anonymous function + reduce()
// REDUCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const sumReduce = (products) => products.reduce(
    (current, {price}) => current + price,
    initialValue
);
console.log('La somma con sumMap() è:', sumReduce(products), '\n');
