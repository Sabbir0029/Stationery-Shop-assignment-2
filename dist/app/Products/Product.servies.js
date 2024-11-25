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
exports.ProductServices = void 0;
const Product_model_1 = require("./Product.model");
// Create  Product Into DB
const createProductIntoDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.Product.create(productData);
    return result;
});
// Get All Products From DB
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.Product.find({});
    return result;
});
// Get Single Product From DB
const getSingleProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.Product.aggregate([
        { $match: { productID: productId, isDeleted: false } },
    ]);
    return result;
});
// Update Product From DB
const updateProductFromDB = (productId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.Product.findByIdAndUpdate(productId, { $set: updateData }, {
        new: true,
        runValidators: true,
    });
    return result;
});
// Delete Product From DB
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product_model_1.Product.updateOne({ productID: id }, { isDeleted: true });
    return result;
});
// Export All Product Services
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductFromDB,
    deleteProductFromDB,
};
