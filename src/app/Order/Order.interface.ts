import mongoose from 'mongoose';

export type TypeOfOrderProduct = {
  email: string;
  product: mongoose.Types.ObjectId; // referencing a product
  quantity: number;
  totalPrice: number;
};
