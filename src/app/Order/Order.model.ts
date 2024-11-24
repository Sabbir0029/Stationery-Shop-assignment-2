import mongoose, { Schema } from 'mongoose';
import { TypeOfOrderProduct } from './Order.interface';

// Create the Order schema
const orderSchema = new Schema<TypeOfOrderProduct>(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // Referencing the Product model
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

// Create and export the Order model
export const Order = mongoose.model<TypeOfOrderProduct>('Order', orderSchema);
