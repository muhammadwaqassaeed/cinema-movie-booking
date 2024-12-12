const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: String,
  subject: String,
  category: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
