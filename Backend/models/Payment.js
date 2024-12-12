// models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  cardNumber: String,
  expiryDate: String,
  cvv: String,
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
