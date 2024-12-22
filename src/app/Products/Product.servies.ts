import { TypeOfProduct } from './Product.interface';
import { Product } from './Product.model';

// Create  Product Into DB
const createProductIntoDB = async (productData: TypeOfProduct) => {
  const result = await Product.create(productData);
  return result;
};
// Get All Products From DB
const getAllProductsFromDB = async () => {
  const result = await Product.find({});
  return result;
};
// Get Single Product From DB
const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};
// Update Product From DB
const updateProductFromDB = async (
  productId: string,
  updateData: TypeOfProduct,
) => {
  const result = await Product.findByIdAndUpdate(
    productId,
    { $set: updateData },
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};
// Delete Product From DB
const deleteProductFromDB = async (productId: string) => {
  const result = await Product.updateOne(
    { productId },
    { isDeleted: true },
  );
  return result;
};

// Export All Product Services
export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
