// // routes/seatingPlanRoutes.js
// const express = require('express');
// const router = express.Router();
// const Seat = require('../models/seatModel');

// // Fetch booked seats
// router.get('/getBookedSeats', async (req, res) => {
//   try {
//     const bookedSeats = await Seat.find();
//     const bookedSeatIds = bookedSeats.map(seat => seat.seatId);
//     res.json(bookedSeatIds);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Save selected seats
// router.post('/saveSeats', async (req, res) => {
//   const { selectedSeats } = req.body;

//   try {
//     // Save selected seats in the database
//     await Seat.insertMany(selectedSeats.map(seatId => ({ seatId })));
//     res.json({ message: 'Seats saved successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;

// routes/seatingPlanRoutes.js
const express = require('express');
const router = express.Router();
const Seat = require('../models/seatModel');

// Fetch booked seats
router.get('/getBookedSeats', async (req, res) => {
  try {
    const bookedSeats = await Seat.find();
    res.json(bookedSeats);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Save selected seats and time
router.post('/saveSeats', async (req, res) => {
  const { selectedSeats, selectedTime } = req.body;

  try {
    // Save selected seats and time in the database
    await Seat.insertMany(selectedSeats.map(seatId => ({ seatId, selectedTime })));
    res.json({ message: 'Seats and time saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

