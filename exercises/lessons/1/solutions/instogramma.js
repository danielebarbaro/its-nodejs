/**
 * Dato un array stampare un instogramma
 *  [2, 6, 3]
 *  ##
 *  ######
 *  ###
 **/

const range = [2, 4, 5, 3];

console.log('Range: ', range);

let instogramma = function (range) {
    for (let value of range) {
        let result = '';
        for (let hashtag = 0; hashtag < value; value--) {
            result += '#';
        }
        console.log(result);
    }
}

instogramma(range);
