import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  collectionTime: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);