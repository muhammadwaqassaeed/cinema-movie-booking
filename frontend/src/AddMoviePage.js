import React from 'react';
import { Link } from 'react-router-dom';
import AddMovieForm from './AddMovieForm';

function AddMoviePage() {
  return (
    <div>
         {/* <section className="py-3 py-md-5 py-xl-8">
        <div className="container-form">
          <div className="row gy-3 gy-md-4 gy-lg-0">
             <h2>Add Movie Page</h2>
      <Link to="/">Go back to Movie List</Link>
            </div>
          </div>
          </section> */}
     
      <AddMovieForm />
    </div>
  );
}

export default AddMoviePage;
