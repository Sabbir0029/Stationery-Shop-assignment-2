import { Request, Response } from 'express';
import { OrderServices } from './Order.servies';

// create a Order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrderIntoDB(orderData);

    res.status(200).json({
      success: true,
      message: 'Order is created succesfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};
//  Get orders
const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getOrderIntoDB();

    res.status(200).json({
      status: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

// Export All Product Controllers
export const OrserControllers = {
  createOrder,
  getOrder,
};
