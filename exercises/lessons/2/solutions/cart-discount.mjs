/**
 *
 * Sommare tutti i prodotti e scontare del 20% i prodotti di tipo `book`
 * Es:
 *      const result = sum(products)
 *      console.log('La somma è:', 77.432);
 *
 *
 * */

// Importo tutti i prodotti
import {products} from "./dataset.mjs";

const initialValue = 0;
const price = 100;

// stampo in console i prodotti
// console.log('Products', products);


// creo la ottenere il prezzo scontato del 20% da sommare agli altri prodotti

/*
* Posso calcolare l'importo scontato in uno dei seguenti metodi:
*  `price - ((price * 20.0) / 100.0)`
*  `price * 0.8`
*  `price * (1 - 0.2)`
* */

console.log(`Discount: ${price - ((price * 20.0) / 100.0)}`);
console.log(`Discount: ${price * 0.8}`);
console.log(`Discount: ${price * (1 - 0.2)}`, '\n');

// funzione dichiarativa
function calculateDiscountedPrice(price) {
    let result = price - ((price * 20.0) / 100.0);

    return result;
}

// Arrow function
const discountedPrice = (price, rate = 0.20) => price * (1 - rate);


// Costruisco la Soluzione con map() e reduce()
// MAP: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// REDUCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const calculateProductsDiscounted = (products, discount, type) => products
    .map(item => {
        let price = item.price;
        if (item.type === type) {
            price = discountedPrice(item.price, discount);
        }
        return price;
    })
    .reduce((prev, current) => prev + current, initialValue);

console.log('La somma calcolata con calculateProductsDiscounted() dei prodotti di tipo `book` scontati  è:', calculateProductsDiscounted(products, 0.20, 'book'), '\n');

// alternativa in una riga:
const calculateProducts = (products, discount, type) => products.reduce(
    (prevProd, currentProd) =>
        prevProd + (currentProd.type === type ? currentProd.price * (1 - discount) : currentProd.price),
    initialValue
);
console.log('La somma calcolata con calculateProducts() dei prodotti di tipo `book` scontati  è:', calculateProducts(products, 0.20, 'book'), '\n');

// alternativa con ciclo for

function calculate(products, discount, type) {
    let total = 0;
    for (let product of products) {
        if (product.type === type) {
            product.price = product.price - (product.price * 20) / 100;
        }
        total += product.price
    }
    return total;
}
console.log('La somma calcolata con calculate() dei prodotti di tipo `book` scontati  è:', calculate(products, 20, 'book'), '\n');
