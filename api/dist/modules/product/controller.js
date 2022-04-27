"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
var express_1 = require("express");
var service_1 = require("./service");
exports.productController = (0, express_1.Router)();
exports.productController.post('/create', service_1.productService.createProduct);
exports.productController.put('/edit/:id', service_1.productService.editProduct);
exports.productController.delete('/delete/:id', service_1.productService.deleteProduct);
