"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const Product_route_1 = require("./app/Products/Product.route");
const Order_route_1 = require("./app/Order/Order.route");
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Student Router
app.use('/api/', Product_route_1.ProductRoutes);
app.use('/api/', Order_route_1.OrderRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
