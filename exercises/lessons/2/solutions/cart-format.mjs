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

// stampo in console i prodotti
// console.log('Products', products);


// creo la funzione per formattare il testo da `RoMA` a `Roma`

// funzione dichiarativa
function format(product) {
    //inizializzo il risultato a strina vuota
    let result = '';

    // converto tutta la stringa in LOWERCASE
    // LOWERCASE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

    let resultProductLowerCase = product.toLowerCase();

    // trasformo SOLO la prima lettera in maiuscolo
    // CHARAT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    let firstLetter = resultProductLowerCase.charAt(0);

    // UPPERCASE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    let firstLetterUpperCaseUpperCase = firstLetter.toUpperCase();

    // costruisco la sringa finale unendo la prima lettera maiuscola con la parola meno la prima lettera
    // SLICE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    let lastPartOfString = resultProductLowerCase.slice(1);

    // concateno le stringhe elaborate:
    result = `${firstLetterUpperCaseUpperCase}${lastPartOfString}`


    return result;
}

console.log('Test di format() con stringa statica RoMa:', format('RoMa'), '\n')


// funzione anonima
// arrow function:
const formatAnonymous = (product) => {
    return product.toLowerCase().charAt(0).toUpperCase() + product.toLowerCase().slice(1)
}
console.log('Test di formatAnonymous() con stringa statica RoMa:', formatAnonymous('RoMa'), '\n')


// arrow function:
const formatArrow = (product) => product.toLowerCase().charAt(0).toUpperCase() + product.toLowerCase().slice(1);

console.log('Test di formatArrow() con stringa statica RoMa:', formatArrow('RoMa'), '\n')

function formatCart (products){
    // inizializzo un array risultante vuoto
    let resultCart = [];

    for (let product of products) {
        let formattedName = '';
        let productName = product.name

        // le parole che contengono gli spazi le devo spezzettare per usarle dentro la funzione format()
        // SPLIT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        let multiName = productName.split(' ');

        if (multiName.length > 1) {
            // Se ottengo più parole, ciclo sulle parole e applico la formattazione
            for (let piece of multiName) {
                formattedName += `${formatArrow(piece)} `;
            }
        } else {
            // Se ottengo UNA parola la formatto con la funzione
            formattedName = formatArrow(productName);
        }

        product.name = formattedName;

        resultCart.push(product);
    }
    return resultCart;
}

console.log("L'elenco prodotti risultante formattato è: ", formatCart(products));
