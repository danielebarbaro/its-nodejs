const products = [
    {
        name: 'Emilia Romagna',
        ean: 162345,
        price: 12.10,
        type: 'book',
    },
    {
        name: 'piemonte',
        ean: 290834,
        price: 12.10,
        type: 'book',
    },
    {
        name: 'MONTE everest',
        ean: 204139,
        price: 52.10,
        type: 'photo-book',
    },
    {
        name: 'ALPI',
        ean: 120193,
        price: 22.10,
        type: 'photo-book',
    },
    {
        name: 'firenzE',
        ean: 812302,
        price: 9.99,
        type: 'pocket-book',
    },
    {
        name: 'firenze',
        ean: 212222,
        price: 19.99,
        type: 'book',
    },
    {
        name: 'RoMA',
        ean: 912301,
        price: 9.99,
        type: 'pocket-book',
    },
    {
        name: 'TOrino',
        ean: 912304,
        price: 9.99,
        type: 'pocket-book',
    },
    {
        name: 'Pisa',
        ean: 912303,
        price: 9.99,
        type: 'pocket-book',
    },
];

const users = [
    {
        uuid: 'd0393a66-4e43-493e-b587-49d7ae95af0c',
        firstName: 'Winston',
        lastName: 'Wolf',
        wallet: 62.11,
        isTeacher: true,
    },
    {
        uuid: 'aa21fb3b-efb5-46f1-90ef-0cb1bb08fb3b',
        firstName: 'Marsellus',
        lastName: 'Wallace',
        wallet: 36.00,
        isTeacher: false,
        promo: 'SPRING'
    },
    {
        uuid: '1276df86-11ac-4ae5-9ae8-d0cabb5bcb47',
        firstName: 'Jules',
        lastName: 'Winnfield',
        wallet: 23.00,
        isTeacher: false,
        promo: ''
    },
    {
        uuid: 'ef9c127d-e873-4abd-aa62-348162c0d42d',
        firstName: 'Vincent',
        lastName: 'Vega',
        wallet: 100.11,
        isTeacher: true,
    },
    {
        uuid: '8447a948-1ebe-45c8-a790-ad498563a483',
        firstName: 'Mia',
        lastName: 'Wallace',
        wallet: 200.00,
        isTeacher: false,
        promo: ''
    },
    {
        uuid: '8979c836-0717-4e0f-8285-048d203fe96c',
        firstName: 'Buddy',
        lastName: 'Holly',
        wallet: 46.90,
        isTeacher: false,
        promo: 'PROMO-10'
    },
];

const promoCode = [
    {
        name: 'PROMO-10',
        percentage: 0.10
    },
    {
        name: 'SPRING',
        percentage: 0.25
    },
    {
        name: 'FULL',
        percentage: 1
    }
];

const carts = [
    {
        user: 'd0393a66-4e43-493e-b587-49d7ae95af0c',
        products: [
            120193,
            812302,
            912301,
            912303,
        ]
    },
    {
        user: 'aa21fb3b-efb5-46f1-90ef-0cb1bb08fb3b',
        products: [
            812302,
            912301,
            912304,
            912303,
        ]
    },
    {
        user: '1276df86-11ac-4ae5-9ae8-d0cabb5bcb47',
        products: [
            204139,
            120193
        ]
    },
    {
        user: 'ef9c127d-e873-4abd-aa62-348162c0d42d',
        products: [
            162345,
            290834,
            212222,
            912301,
        ]
    },
    {
        user: '8447a948-1ebe-45c8-a790-ad498563a483',
        products: []
    },
    {
        user: '8979c836-0717-4e0f-8285-048d203fe96c',
        products: [
            204139,
        ]
    },
];

export {
    products,
    users,
    promoCode,
    carts
};