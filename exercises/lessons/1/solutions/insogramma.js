/**
 * Dato un array stampare un instogramma
 *  [2, 6, 3]
 *  ##
 *  ######
 *  ###
 **/


let instogramma = function (range) {
    for (let value of range) {
        let result = '';
        for (let hashtag = 0 ; hashtag < value ;value--) {
            result += '#';
        }
        console.log(result);
    }
}

instogramma([2, 4, 5, 3]);
