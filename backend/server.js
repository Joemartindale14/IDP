import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

//app config
const app = express();
const port = 4000;

//databse connection
connectDB();

//middleware
app.use(express.json());
app.use(cors({
  origin: 'https://idp-one.vercel.app',
  credentials: true, // If cookies or authentication tokens are used
}));

//routes
app.use('/auth', authRoutes);
app.use('/orders', orderRoutes);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});