const express = require('express');
const Movie = require('../models/Movie');
const mongoose = require('mongoose');


const router = express.Router();

// Endpoint to store movie data
router.post('/', async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.json({ success: true, message: 'Movie data stored successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
// router.delete('/movie/:movieId', async (req, res) => {
//   const { movieId } = req.params;

//   try {
//     // Find the movie by ID and remove it from the database
//     const deletedMovie = await Movie.findByIdAndDelete(movieId);

//     if (!deletedMovie) {
//       return res.status(404).json({ error: 'Movie not found' });
//     }

//     res.json({ message: 'Movie deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting movie:', error);
//     res.status(500).json({ error: error.message }); // Send detailed error message
//   }
// });
router.delete('/movie/:movieId', async (req, res) => {
  const { movieId } = req.params;

  try {
    // Validate if movieId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(movieId)) {
      return res.status(400).json({ error: 'Invalid movieId' });
    }

    // Convert the movieId string to ObjectId
    const objectIdMovieId = new mongoose.Types.ObjectId(movieId);

    // Find the movie by ID and remove it from the database
    const deletedMovie = await Movie.findByIdAndDelete(objectIdMovieId);

    if (!deletedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    console.error('Error deleting movie:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// update movie
// router.put('/updateMovie/:movieId', async (req, res) => {
//   const movieId = req.params.movieId;
//   const updatedData = req.body;

//   try {
//     console.log('Received movieId:', movieId);
//     console.log('Received updatedData:', updatedData);

//     // Rest of your update logic

//     // Respond with a success message or updated movie details
//     res.status(200).json({ message: 'Movie updated successfully' });
//   } catch (error) {
//     console.error('Error updating movie:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Update movie
// router.put('/updateMovie/:movieId', async (req, res) => {
//   const movieId = req.params.movieId;

//   // Check if the movieId is a valid ObjectId
//   if (!mongoose.Types.ObjectId.isValid(movieId)) {
//     return res.status(400).json({ error: 'Invalid movieId format' });
//   }

//   const updatedData = req.body;

//   try {
//     console.log('Received movieId:', movieId);
//     console.log('Received updatedData:', updatedData);

//     // Convert the movieId string to ObjectId
//     const objectIdMovieId = new mongoose.Types.ObjectId(movieId);

//     // Use findByIdAndUpdate to find and update the movie by its ID
//     const updatedMovie = await Movie.findByIdAndUpdate(
//       objectIdMovieId,
//       { $set: updatedData },
//       { new: true } // Returns the updated document
//     );

//     if (!updatedMovie) {
//       return res.status(404).json({ error: 'Movie not found' });
//     }

//     // Respond with the updated movie details
//     res.status(200).json({ message: 'Movie updated successfully', updatedMovie });
//   } catch (error) {
//     console.error('Error updating movie:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });




module.exports = router;
