// routes/paymentRoutes.js
const express = require('express');
const Payment = require('../models/Payment');

const router = express.Router();

router.post('/submitPayment', async (req, res) => {
  try {
    const { cardNumber, expiryDate, cvv } = req.body;

    const newPayment = new Payment({ cardNumber, expiryDate, cvv });
    await newPayment.save();

    res.status(200).json({ message: 'Payment details saved successfully' });
  } catch (error) {
    console.error('Error saving payment details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
