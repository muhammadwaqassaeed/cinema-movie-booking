const express = require('express');
const Movie = require('../models/Movie');
const mongoose = require('mongoose');

const router = express.Router();

router.put('/updateMovie/:movieId', async (req, res) => {
  const movieId = req.params.movieId;

  // Check if the movieId is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(movieId)) {
    return res.status(400).json({ error: 'Invalid movieId format' });
  }

  const updatedData = req.body;

  try {
    console.log('Received movieId:', movieId);
    console.log('Received updatedData:', updatedData);

    // Convert the movieId string to ObjectId
    const objectIdMovieId = new mongoose.Types.ObjectId(movieId);

    // Use findByIdAndUpdate to find and update the movie by its ID
    const updatedMovie = await Movie.findByIdAndUpdate(
      objectIdMovieId,
      { $set: updatedData },
      { new: true } // Returns the updated document
    );

    if (!updatedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    // Respond with the updated movie details
    res.status(200).json({ message: 'Movie updated successfully', updatedMovie });
  } catch (error) {
    console.error('Error updating movie:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
