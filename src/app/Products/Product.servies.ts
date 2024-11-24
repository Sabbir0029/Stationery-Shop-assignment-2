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
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.aggregate([
    { $match: { productID: id, isDeleted: false } },
  ]);
  return result;
};
// Update Product From DB
const updateProductFromDB = async (id: string) => {
  console.log(id);
  return ;
};
// Delete Product From DB
const deleteProductFromDB = async (id: string) => {
  const result = await Product.updateOne({ id }, { isDeleted: true });
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
