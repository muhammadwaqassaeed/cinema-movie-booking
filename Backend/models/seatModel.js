// // models/seatModel.js
// const mongoose = require('mongoose');

// const seatSchema = new mongoose.Schema({
//   seatId: { type: String, required: true, unique: true },
// });

// const Seat = mongoose.model('Seat', seatSchema);

// module.exports = Seat;

// models/seatModel.js
const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  seatId: { type: String, required: true, unique: true },
  selectedTime: { type: String, required: true },
});

const Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;
