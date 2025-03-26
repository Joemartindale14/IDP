import express from 'express';
import Order from '../models/Order.js';
import User from '../models/User.js';

const router = express.Router();

router.post('/create', async (req, res) => {
  const { userId, firstName, lastName, email, phone, collectionTime, totalAmount } = req.body;

  try {
    const newOrder = new Order({
      user: userId,
      firstName,
      lastName,
      email,
      phone,
      collectionTime,
      totalAmount,
    });

    const savedOrder = await newOrder.save();

    await User.findByIdAndUpdate(userId, { $push: { orders: savedOrder._id } });

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
});

export default router;