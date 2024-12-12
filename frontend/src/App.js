// import ReactDOM from "react-dom";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Data from "./data";
import Datamovie from "./datamovie";
import Product from "./Product";
// import Movie from "./Movie";
import Movies from "./Movies";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import  { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentForm from "./PaymentForm";
import MoviePage from "./MoviePage";
import MovieDetails from "./MovieDetails";
import AddMoviePage from './AddMoviePage';
import AdminDashboard from './AdminDashboard'; // Import your admin components






function App() {
  const [cartItem, setCartItem] = useState([]);
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignIn = (credentials) => {
    setUser(credentials);
    // Optionally close the modal after sign-in
    setIsModalOpen(false);
  };

  const handleSignUp = (userInfo) => {
    setUser(userInfo);
    // Optionally close the modal after sign-up
    setIsModalOpen(false);
  };




  // data.js 
  const onAdd = (product) => {
    const exist = cartItem.find((item) => item.id === product.id);

    if (exist) {
      setCartItem((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
      console.log(cartItem);
    } else {
      setCartItem((prevCart) => [...prevCart, { ...product, qty: 1 }]);
      console.log(cartItem);
    }
  };
  const { product } = Data;

  // Datamovie.js
  const [Item, setItem] = useState([]);
  const addMovies = (movie) => {
    const exist = Item.find((item) => item.id === movies.id);

    if (exist) {
      setItem((pCart) =>
        pCart.map((item) =>
          item.id === movies.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
      console.log(Item);
    } else {
      setItem((pCart) => [...pCart, { ...movies, qty: 1 }]);
      console.log(Item);
    }
  };
  const { movies } = Datamovie;



  return (
    <div className="bg1">
      <Router>
        <Header/>
         <Routes>
          <Route path="/" element={<Product product={product} onAdd={onAdd}/>}/>  
          {/* <Route path="/Movie" element={<Movies movies={movies} addMovies={addMovies}/>}/> */}
        {/* <Route path="/Movies" element={<Movie/>}/> */}
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/moviepage" element={<MoviePage/>}/>
          <Route path="/moviedetails/:movieId" element={<MovieDetails/>}/>
          <Route path="/add-movie" element={<AddMoviePage />} />
          {/* <Route path="/moviedetails/:movieId"/><MovieDetails /> */}
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
          <Route path="/payment" element={<PaymentForm onSignIn={handleSignIn} />} />
          {user && user.role === 'admin' && (
          <Route path="/admin" element={<AdminDashboard />} />
        )}


        </Routes>
        <ToastContainer theme='dark'/>
        <Footer /> 
      </Router> 
      <dashboard/>
      
    </div>
  )
}


export default App;
