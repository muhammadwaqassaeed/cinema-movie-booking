const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = require('../models/Form'); // Assuming you have a Contact model

router.post('/submitForm', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit form' });
  }
});

module.exports = router;
