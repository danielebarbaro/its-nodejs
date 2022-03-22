const products = [
    {
        id: 562347,
        name: 'Monitor',
        price: 120.90
    },
    {
        id: 123123,
        name: 'Monitor',
        price: 120.90,
    }
];

async function getProduct(id) {
    return products.filter(item => item.id === id).shift();
}

function getProductSync(id) {
    return products.find(item => item.id === id);
}

export {products, getProduct, getProductSync};