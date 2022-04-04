import * as fs from "fs";
import * as os from "os";
import {carts, products, promoCode, users} from "./dataset.mjs";

const discountedPrice = (price, rate = 0.10) => price;

const formatProductName = (product) => product;

const filterType = (products, type) => products;

const sum = (products) => products

const formatProductsList = (products) => products;

const shopName = () =>  `\r\nUSER Cart - CODE`;

const printReceipt = (content, filename) => '';

const createDelimiter = (openClose, symbol , times) => `\r\n string`;

const getUser = (uuid) => users;

const getCartByUser = (uuid) => carts;

const getProductByCart = (cartProducts) => products;

const getUserDiscount = (code) => promoCode;

export {
    discountedPrice,
    formatProductName,
    formatProductsList,
    filterType,
    shopName,
    printReceipt,
    getUser,
    getCartByUser,
    getProductByCart,
    getUserDiscount,
    createDelimiter,
    sum
};