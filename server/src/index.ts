import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productsRouter from './routes/products';
// import salesRouter from './routes/sales';

import salesRouter from './routes/sales'
const app = express();
app.use(cors({
  origin: "*",
  credentials: true
}));


app.use(express.json());


// Replace with your MongoDB connection string or use an env variable
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/inventory_app';


mongoose.connect(MONGODB_URI)
.then(()=> console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connect error', err));


app.use('/api/products', productsRouter);
app.use('/api/sales', salesRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started on ${PORT}`));