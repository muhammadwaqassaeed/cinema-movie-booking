const express = require("express");
const router = express.Router();
const multer = require("multer");
const addMovie = require("../models/addMovie");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/addmovies", upload.single("file"), async (req, res, next) => {
  try {
    if (!req.file || !req.body.image) {
      // Handle case where either file or image data is missing
      return res.status(400).json({ message: "Missing file or image data" });
    }

    const { image, movieName, id, rating, genre } = req.body;

    // Assuming `genre` is an array of strings; adjust accordingly if needed
    const genreArray = genre.split(',');

    const newMovie = new addMovie({
      image,
      movieName,
      id,
      rating,
      genre: genreArray,
    });

    // Handle image upload logic if needed
    // Example: save image to a cloud storage service

    await newMovie.save();
    res.status(200).json({ message: "Movie added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
