// Test:https://docs.google.com/forms/d/1gZLNnFg-hW0clKeH2in_iKIyqq7RZHp6pINKSWRAFrU

console.log('Result Test 1: ', 1 == '1');
console.log('Result Test 2: ', 1 === '1');
console.log('Result Test 3: ', 2 > '1');
console.log('Result Test 4: ', "foo" + +"bar");
console.log('Result Test 5: ', [1, 2, 3] + [6, 5, 4]);
console.log('Result Test 6: ', parseInt(0.0000001));
console.log('Result Test 7: ', [ 10, 1, 3 ].sort());
console.log('Result Test 8: ', null === false);
console.log('Result Test 9: ', 12.1.toString());
console.log('Result Test 10: ', '100' - 1);
console.log('Result Test 11: ', '100' + 1);

let limit = 10
let result = 0;

for (let index = 0; index < limit; index++) {
    if (index % 2) {
        result += index;
    }
}
console.log('Result Test 12: ', result);

let result_test_13;

for (let index = 0; index < limit; index++) {
    result_test_13 += index * 2;
}

console.log('Result Test 13: ', result_test_13);

let result_test_14 = 0;

for (let index = 0; index < limit; index++) {
    result_test_14 += index * 2;
}

console.log('Result Test 14: ', result_test_14);

let result_test_15 = 0;

for (let index = 0; index < limit; index++) {
    result_test_15 = index === 3;
}

console.log('Result Test 15: ', result_test_15);

let max = 50;
let result_test_16;

max > 40 ? 'Maggiore' : 'Minore';

console.log('Result Test 16: ', result_test_16);

result_test_16 = max > 40 ? 'Maggiore' : 'Minore';

console.log('Result Test 17: ', result_test_16);
