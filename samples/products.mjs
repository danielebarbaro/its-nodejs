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
    const product = products.filter(item => item.id === id).shift();
    // console.log('Product Price async: ', product?.price)
    return product;
}

function getProductSync(id) {
    const product = products.find(item => item.id === id);
    // console.log('Product Price sync: ', product?.price)
    return product;
}

export {products, getProduct, getProductSync};