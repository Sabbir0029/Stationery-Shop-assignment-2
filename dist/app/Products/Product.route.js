"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Product_controllers_1 = require("./Product.controllers");
const router = express_1.default.Router();
router.get('/products', Product_controllers_1.ProductControllers.getAllProduct);
router.post('/products', Product_controllers_1.ProductControllers.createProduct);
router.get('/products/:productId', Product_controllers_1.ProductControllers.getSingleProduct);
router.put('/products/:productId', Product_controllers_1.ProductControllers.updateProduct);
router.delete('/products/:id', Product_controllers_1.ProductControllers.deleteProduct);
exports.ProductRoutes = router;
