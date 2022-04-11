/**
 *
 * Stampare il range di numeri compresi tra `min` e `max`
 * Es:
 *      const result = range(3,7)
 *      console.log('Il range tra 3 e 7 è:', result);
 *
 * */

// Per facilità di esecuzione di più esempi dichiaro staticamente gli espremi del range da sommare.
const fromNumber = 3;
const toNumber = 7;

// Soluzione con funzione dichiarativa - function declaration

function createRange(fromNumber, toNumber) {
    let result = [];
    for (let index = fromNumber; index <= toNumber; index++) {
        result.push(index);
    }
    return result;
}

console.log(`Il range tra ${fromNumber} e ${toNumber} con createRange() è:`, createRange(fromNumber, toNumber), '\n');

// Soluzione con funzione anonima - Anonymous function
let range = function (fromNumber, toNumber) {
    let result = [];
    for (let index = fromNumber; index <= toNumber; index++) {
        result.push(index);
    }
    return result;
}

console.log(`Il range tra ${fromNumber} e ${toNumber} con range() è:`, createRange(fromNumber, toNumber), '\n');
