import express  from "express";
import { ProductControllers } from "./Product.controllers";
// import { StudentControllers } from "./student.controllers";

const router = express.Router();

router.get('/products', ProductControllers.getAllProduct);
router.post('/products', ProductControllers.createProduct);
router.get('/:id', ProductControllers.getSingleProduct);
router.put('/products/:productId', ProductControllers.updateProduct);
router.delete('/products/:productId', ProductControllers.deleteProduct);


export const ProductRoutes = router;