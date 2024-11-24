import mongoose, { Schema } from 'mongoose';
import { TypeOfProduct } from './Product.interface';

// Define the schema for the stationery product
const productSchema = new Schema<TypeOfProduct>(
  {
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
  },
  {
    timestamps: true,
  },
);

//Query middleware

productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

// Aggregation Hooks
productSchema.pre('aggregate', async function () {
  await this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
});

// export the Mongoose model
export const Product = mongoose.model<TypeOfProduct>('Product', productSchema);
