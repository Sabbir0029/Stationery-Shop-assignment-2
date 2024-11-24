import express from 'express';
import { OrserControllers } from './Order.Controllers';

const router = express.Router();

router.post('/orders', OrserControllers.createOrder);
router.get('/orders/revenue', OrserControllers.getOrder);

export const OrderRoutes = router;
