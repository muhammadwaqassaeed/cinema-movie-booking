// AddMovieForm.jsx

import React, { useState } from 'react';
import './AddMovieForm.css';
import axios from 'axios';

function AddMovieForm({ onAddMovie}) {
  const [newMovie, setNewMovie] = useState({
    title: '',
    overview: '',
    poster_path: '',
  });

  const handleAddMovie = async () => {
    try {
      // Make API call to save movie data to MongoDB
      const response = await axios.post('http://localhost:5000/', newMovie);
      console.log(response.data); // Assuming your server sends back a success message

      // Callback function to reset form state after onAddMovie is called
      onAddMovie(newMovie, () => {
        setNewMovie({
          title: '',
          overview: '',
          poster_path: '',
        });
      });
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setNewMovie({
          ...newMovie,
          poster_path: reader.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container-form">
          <div className="row gy-3 gy-md-4 gy-lg-0">
            <h2>Add New Movie</h2>
            <form>
              <label>Title:</label>
              <input
                type="text"
                value={newMovie.title}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, title: e.target.value })
                }
              />
              <br />
              <label>Overview:</label>
              <textarea
                value={newMovie.overview}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, overview: e.target.value })
                }
              />
              <br />
              <label>Poster Path:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              <br />
              {newMovie.poster_path && (
                <img
                  src={newMovie.poster_path}
                  alt="Preview"
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
              )}
              <br />
              <button type="button" onClick={handleAddMovie}>
                Add Movie
              </button>
              {/* <button type="button" onClick={onCancel}>
                Cancel
              </button> */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
