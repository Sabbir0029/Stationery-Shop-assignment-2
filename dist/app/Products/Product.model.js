"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.Product = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// Define the schema for the stationery product
const productSchema = new mongoose_1.Schema({
    productID: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: [true, 'name is required'],
        unique: true,
        trim: true,
        maxlength: [30, 'name is max length 30 characters '],
    },
    brand: {
        type: String,
        required: [true, 'brand is required'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'price is required'],
        min: 0,
    },
    category: {
        type: String,
        required: [true, 'category is required'],
        enum: {
            values: [
                'Writing',
                'Office Supplies',
                'Art Supplies',
                'Educational',
                'Technology',
            ],
            message: '{VALUE} is not a valid category',
        },
    },
    description: {
        type: String,
        required: [true, 'description is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'quantity is required'],
        min: 0,
    },
    inStock: {
        type: Boolean,
        required: [true, 'inStock is required'],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
//Query middleware
productSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
// Aggregation Hooks
productSchema.pre('aggregate', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    });
});
// export the Mongoose model
exports.Product = mongoose_1.default.model('Product', productSchema);
