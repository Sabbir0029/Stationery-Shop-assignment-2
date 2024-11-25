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
exports.OrderServices = void 0;
const Order_model_1 = require("./Order.model");
// Create  Product Into DB
const createOrderIntoDB = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Order_model_1.Order.create(orderData);
    return result;
});
//
const getOrderIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Order_model_1.Order.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: '$totalPrice' },
            },
        }
    ]);
    return result;
});
exports.OrderServices = {
    createOrderIntoDB,
    getOrderIntoDB,
};
