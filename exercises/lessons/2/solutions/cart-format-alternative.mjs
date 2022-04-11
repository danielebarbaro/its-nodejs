/*
 * Restituire un elenco di prodotti formattato con la prima lettera maiuscola.
 * Es: `friuli venezia giulia` in `Friuli Venezia Giulia`
 * Es: `piemonte` in `Piemonte`
 * Es: `MEDITERRANEO` in `Mediterraneo`
 * Es: `firenzE` in `Firenze`
 * Es: `firenze` in `Firenze`
 * Es: `RoMA` in `Roma`
 *
 * Risultato:
 * [
 *      {name: 'Firenze', ean: '812302', price: 9.99, type: 'pocket-book'},
 *      {name: 'Firenze', ean: '1222222', price: 19.99, type: 'book'},
 *      {name: 'Friuli Venezia Giulia', ean: '12345', price: 12.10, type: 'book'},
 *      {name: 'Mediterraneo', ean: '0120139', price: 22.10, type: 'photo-book'},
 *      {name: 'Piemonte', ean: '29834', price: 12.10, type: 'book'},
 *      {name: 'Roma', ean: '912302', price: 9.99, type: 'pocket-book'},
 * ];
*/

// Importo tutti i prodotti
import {products} from "./dataset.mjs";

const format = (product) => product.toLowerCase().charAt(0).toUpperCase() + product.toLowerCase().slice(1)

// funzione anonima
const formatCart = (products) => {
    let cart = [];
    for (let item of products) {
        let formattedName = '';
        let productName = item.name

        let multiName = productName.split(' ');

        if (multiName.length > 1) {
            let res = [];
            for (let piece of multiName) {
                res.push(format(piece));
            }
            // JOIN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
            formattedName = res.join(' ')
        } else {
            formattedName = format(productName);
        }

        item.name = formattedName;

        cart.push(item);
    }
    return cart;
}

console.log("L'elenco prodotti risultante formattato è: ", formatCart(products));
