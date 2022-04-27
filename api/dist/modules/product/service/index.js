"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
var createProduct_1 = require("./createProduct");
var deleteProduct_1 = require("./deleteProduct");
var editProduct_1 = require("./editProduct");
exports.productService = {
    createProduct: createProduct_1.createProduct,
    deleteProduct: deleteProduct_1.deleteProduct,
    editProduct: editProduct_1.editProduct
};
