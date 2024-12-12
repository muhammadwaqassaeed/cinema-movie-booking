// adminRoutes.js
const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/authMiddleware');

// Example admin route requiring authentication
router.post('/add-movie', isAdmin, (req, res) => {
  // Add movie logic here...
});

module.exports = router;
