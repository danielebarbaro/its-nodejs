/** Stampare il range `min` and `max` */

let range = function (min, max) {
    let result = [];
    for(let index = min; index <= max; index++){
        result.push(index);
    }
    return result;
}

console.log('Range: ', range(4, 9), '\n');
