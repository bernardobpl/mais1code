import { Router } from "express";
import { productService } from "./service";

export const productController = Router();

productController.post('/create', productService.createProduct)
productController.put('/edit/:id', productService.editProduct)
productController.delete('/delete/:id', productService.deleteProduct)