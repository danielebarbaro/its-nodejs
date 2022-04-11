/**
 *
 * Sommare i numeri compresi tra il range `min` e `max` compresi gli estremi
 * Es:
 *      const result = sum(3,7)
 *      console.log('La somma del range è:', result);
 *
 *
 * */

// Per facilità di esecuzione di più esempi dichiaro staticamente gli espremi del range da sommare.
const fromNumber = 3;
const toNumber = 7;

// Soluzione con funzione dichiarativa - function declaration
function calculateSum(min, max) {
    let result = 0;
    for (let index = min; index <= max; index++) {
        result += index;
    }
    return result;
}

console.log('Risultato di calculateSum: ', calculateSum(fromNumber, toNumber), '\n');

// Soluzione con funzione anonima - Anonymous function
let calculateAnonymousSum = function (min, max) {
    let result = 0;
    for (let index = min; index <= max; index++) {
        result += index;
    }
    return result;
}
console.log('Risultato di calculateAnonymousSum: ', calculateAnonymousSum(fromNumber, toNumber), '\n');

// Soluzione alternativa con la costruzione di un range

let createRange = function (from, to) {
    let result = [];
    for (let index = from; index <= to; index++) {
        result.push(index);
    }
    return result;
}

// Che può anche esser scritta cosi:
/*
 * function createRange(from, to) {
 *   let result = [];
 *   for (let index = from; index <= to; index++) {
 *      result.push(index);
 *   }
 *   return result;
 * }
* */

let sumRangeValues = function (range) {
    let result = 0;
    for (let number of range) {
        // prova a sostiture of con in, Cosa succede?!
        result += number;
    }
    return result;
}

const rangeValues = createRange(fromNumber, toNumber)

console.log('Risultato di calculateAnonymousSum: ', sumRangeValues(rangeValues));
