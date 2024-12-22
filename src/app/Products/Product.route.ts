import express from 'express';
import { ProductControllers } from './Product.controllers';

const router = express.Router();

router.get('/products', ProductControllers.getAllProduct);
router.post('/products', ProductControllers.createProduct);
router.get('/products/:productId', ProductControllers.getSingleProduct);
router.put('/products/:productId', ProductControllers.updateProduct);
router.delete('/products/:productId', ProductControllers.deleteProduct);

export const ProductRoutes = router;
