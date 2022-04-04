// // function definition
// function total1() {
//     console.log("Running Calculate");
//     const total = 30 + 2;
//     console.log("The total is:",total);
// }
// // function call
// total1();
//
//
// // function definition
// function total2(item) {
//     console.log("Running Calculate");
//     const total = item + 2;
//     console.log("The total is:",total);
//     return total;
// }
// // function call
// total2(3);
//
//
// const bill = total2(3);
//
// console.log(`Your bill is $${bill}`);
//
//
// // function definition
// function total3(item, tax = 1) {
//     console.log("Running Calculate");
//     const total = item + tax;
//     console.log("The total is:",total);
//     return total;
// }
// // function call
// const bill3 = total3(3);
//
// console.log(`Your bill is $${bill3}`);
//
// const user = {name: 'john', lastname: 'doe'};
//
// function fullname(user, gender = 'M') {
//     const surname = user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)
//     const prefix = gender === 'M' ? 'Mr.' : 'Mrs.'
//     return `${prefix} ${user.name.toUpperCase()} ${surname}`;
// }
//
// const name = fullname(user);
//
// console.log(`Formatted name ${name}`);
//
//


const user = {name: 'john', lastname: 'doe'};

const fullname = function (user, gender = 'M') {
    const surname = user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)
    const prefix = gender === 'M' ? 'Mr.' : 'Mrs.'
    return `${prefix} ${user.name.toUpperCase()} ${surname}`;
};

console.log(`Formatted name ${fullname(user)}`);

const str = 'Lorem ipsum';

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.charAt(3));

console.log(str.split(' '));

console.log(str.replace('Lorem', 'Ipsum'));

console.log(str.slice(6));
console.log(str.slice(0, 3));

console.log(str.includes('hello'));

console.log(str.startsWith('Lorem'));
console.log(str.startsWith('m', 3));

console.log(str.endsWith('ipsum'));
console.log(str.endsWith('m', 11));


console.log(sayHello("John"));

const sayHi = function (name) {
    return `Hi ${name}! `;
};
console.log(sayHi("John")); // ?

function sayHello(name) {
    return `Hello ${name}! `;
}


function discountedPrice(price, rate = 0.10) {
    const result = price * (1 - rate);
    return result;
}
console.log('discountedPrice', discountedPrice(20))

function discountedPrice(price, rate = 0.10) {
    return price * (1 - rate);
}

console.log('discountedPrice', discountedPrice(20))

const discountedPrice = function (price, rate = 0.10) {
    return price * (1 - rate);
}

console.log('discountedPrice', discountedPrice(20))

const discountedPrice = (price, rate = 0.10) => {
    return price * (1 - rate)
}

console.log('discountedPrice', discountedPrice(20))

const discountedPrice = (price, rate = 0.10) => price * (1 - rate);

console.log('discountedPrice', discountedPrice(20))

setTimeout(() => {
    console.log("Questo messaggio verra stampato dopo 5 secondi");
}, 5000);