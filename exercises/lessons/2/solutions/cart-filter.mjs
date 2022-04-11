/*
 * Creare un carrello che contenga solo prodotti di tipo pocket-book
 * [
 *      {name: 'firenze', ean: '812302', price: 9.99, type: 'pocket-book' },
 *      {name: 'roma', ean: '912302', price: 9.99, type: 'pocket-book' }
 * ]
*/

// Importo tutti i prodotti
import {products} from "./dataset.mjs";

// stampo in console i prodotti
// console.log('Products', products);

// Soluzione con funzione dichiarativa e ciclo for - function declaration
function filterCart(products, type) {
    let cart = [];
    for (let item of products) {
        if (item.type === type) {
            cart.push(item);
        }
    }
    return cart;
}
console.log('Il carrello filtrato con filterCart() é : ', filterCart(products, 'pocket-book'), '\n');

// Soluzione alternativa con Anonymous function + filter
// FILTER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const filter = (products, type) => products.filter(item => item.type === type);
console.log('Il carrello filtrato con filter() é : ', filter(products, 'pocket-book'), '\n');
