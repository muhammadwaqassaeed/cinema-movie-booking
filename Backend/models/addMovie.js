// models/Movie.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        imageName: String,
        movieName: {
          type: String,
          trim: true,
          required: true,
        },
        rating: Number,
        genre: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "genre",
          },
        ],
      },
      { timestamps: true, strict: false }
);

const addMovie = mongoose.model("addMovie", movieSchema);

module.exports = addMovie;
