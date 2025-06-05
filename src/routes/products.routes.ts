import { Router } from "express";
import { createProducts, deleteProductByID, getProductByID, getProducts } from "../handlers/products.handler";

const productRouter = Router();

productRouter.route('/products').post(createProducts);
productRouter.route('/products').get(getProducts);
productRouter.route('/products/:id').get(getProductByID);
productRouter.route('/products/:id').delete(deleteProductByID);

export { productRouter };