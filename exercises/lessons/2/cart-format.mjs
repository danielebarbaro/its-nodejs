import {products} from "./dataset.mjs";

let res = [];
console.log('Products', products);

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


console.log(res);
