function taskOne() {
    console.log('Sono la task 1')
}

function taskTwo() {
    console.log('Sono la task 2')
}

console.log('Sync');
taskOne();
taskTwo();
console.log('Fine Sync');


console.log('async');

setTimeout(taskOne, 5000);
taskTwo();
console.log('Fine async');

// setTimeout(function () {
//     console.log('Sono la task 1')
// }, 6000);
// taskTwo();
//
// setTimeout( () => {
//     console.log('Sono la task 1')
// }, 7000);