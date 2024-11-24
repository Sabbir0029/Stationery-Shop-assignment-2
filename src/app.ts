import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { ProductRoutes } from './app/Products/Product.route';
import { OrderRoutes } from './app/Order/Order.route';

// parser
app.use(express.json());
app.use(cors());

// Student Router
app.use('/api/', ProductRoutes);
app.use('/api/', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
