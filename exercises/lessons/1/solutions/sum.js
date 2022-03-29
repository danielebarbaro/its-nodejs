/** Sommare i numeri tra il range `min` and `max` compresi gli estremi */

let range = function (min, max) {
    let result = [];
    for (let index = min; index <= max; index++) {
        result.push(index);
    }
    return result;
}

let sum = function (range) {
    let result = 0;
    for (let number of range) {
        // prova a sostiture of con in
        // console.log('number type', typeof number);
        result += number;
    }
    return result;
}

const res = range(1, 3)

console.log('Range: ', res, '\n');
console.log('Sum range: ', sum(res), '\n');
