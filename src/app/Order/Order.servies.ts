import { TypeOfOrderProduct } from './Order.interface';
import { Order } from './Order.model';

// Create  Product Into DB
const createOrderIntoDB = async (orderData: TypeOfOrderProduct) => {
  const result = await Order.create(orderData);
  return result;
};

//
const getOrderIntoDB = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getOrderIntoDB,
};
