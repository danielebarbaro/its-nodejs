import {products} from "./dataset.mjs";

let cart = [];
console.log('Products', products);

/*
Restituire un elenco di prodotti ordinato con
i nomi prodotti in modo che tutti i product.name abbiano la prima iniziale maiuscola

 [
    {name: 'Firenze', ean: '812302', price: 9.99, type: 'pocket-book'},
    {name: 'Firenze', ean: '1222222', price: 19.99, type: 'book'},
    {name: 'Friuli Venezia Giulia', ean: '12345', price: 12.10, type: 'book'},
    {name: 'Mediterraneo', ean: '0120139', price: 22.10, type: 'photo-book'},
    {name: 'Piemonte', ean: '29834', price: 12.10, type: 'book'},
    {name: 'Roma', ean: '912302', price: 9.99, type: 'pocket-book'},
];
*/

const format = (product) => {
    return product.toLowerCase().charAt(0).toUpperCase() + product.toLowerCase().slice(1)
}

for (let item of products) {
    let formattedName = '';
    let productName = item.name

    let multiName = productName.split(' ');

    if (multiName.length > 1) {
        for (let piece of multiName) {
            formattedName += `${format(piece)} `;
        }
    } else {
        formattedName = format(productName);
    }

    item.name = formattedName;

    cart.push(item);
}

console.log('Cart: ', cart);
