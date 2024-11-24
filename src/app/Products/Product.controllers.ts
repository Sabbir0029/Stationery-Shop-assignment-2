import { Request, Response } from 'express';
import { ProductServices } from './Product.servies';
// import mongoose from 'mongoose';

// create a Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const { data: productData } = req.body;
    const result = await ProductServices.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: 'Product is created succesfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};
// getAllStudents
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Product is Get succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};
// Get Single Product
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.getSingleProductFromDB(id);

    res.status(200).json({
      success: true,
      message: ' get single product succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

// update a Product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await ProductServices.updateProductFromDB(id);

    res.status(200).json({
      success: true,
      message: ' get single product succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

// Delete Product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await ProductServices.deleteProductFromDB(id);
    console.log(result);

    res.status(200).json({
      success: true,
      message: 'product is delete succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

// Export All Product Controllers
export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
