"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrserControllers = void 0;
const Order_servies_1 = require("./Order.servies");
// create a Order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield Order_servies_1.OrderServices.createOrderIntoDB(orderData);
        res.status(200).json({
            success: true,
            message: 'Order is created succesfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'something went wrong',
            error: error,
        });
    }
});
//  Get orders
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Order_servies_1.OrderServices.getOrderIntoDB();
        res.status(200).json({
            status: true,
            message: 'Revenue calculated successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'something went wrong',
            error: error,
        });
    }
});
// Export All Product Controllers
exports.OrserControllers = {
    createOrder,
    getOrder
};
