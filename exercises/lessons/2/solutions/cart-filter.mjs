import {products} from "./dataset.mjs";

let cart = [];
console.log('Products', products);

// Creare un carrello che contenga solo pocket-book

for (let item of products) {
    if (item.type === 'pocket-book') {
        cart.push(item);
    }
}

console.log('Cart: ', cart);

// Creare un carrello che contenga solo pocket-book usando la `.filter()`

const cartFilter = products.filter(item => item.type === 'pocket-book');
console.log('Cart: ', cartFilter);

/*
[
  { name: 'firenze', ean: '812302', price: 9.99, type: 'pocket-book' },
  { name: 'roma', ean: '912302', price: 9.99, type: 'pocket-book' }
]
*/