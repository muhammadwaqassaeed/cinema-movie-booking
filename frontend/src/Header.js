
import React from 'react'

function Header() {
  const user = {
    imageUrl: 'logos.jpg',
    imageSize: 50,
  };
  // const loginStatus = () => {
  //   const token = localStorage.getItem('jwt');
  //   if (token) {
  //     return (
  //       <>
  //         <Link to="/"><li>Home</li></Link>
  //         <Link to="/Movies"><li>Movies</li></Link>
  //         <Link to="/AboutUs"><li>About Us</li></Link>
  //         <Link to="/ContactUs"><li>Contact Us</li></Link>


  //         {/* <button className='primaryBtn' onClick={handleLogout}>Log Out</button> */}
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <Link to="/signup"><li>Sign Up</li></Link>
  //         <Link to="/signin"><li>Sign In</li></Link>
  //       </>
  //     );
  //   }
  // };
  
  return (

 <div> 
 <div className=" ">    
    <nav className="navbar navbar-expand-sm hf navbar-dark justify-content-right fixed-top">
      <div className="container-fluid text-center">
        <a href="#" className="navbar-brand"/> 
         <img
        // className="avatar"
        class="rounded-circle"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
          // height:'300'
        }}
      /> 
       <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbar collapsibleNavbar"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a href="/" className="nav-link  text-white">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="/Movies" className="nav-link text-white">
                Movies
              </a>
            </li> */}
            <li className="nav-item">
              <a href="/moviepage" className="nav-link text-white">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a href="/AboutUs" className="nav-link text-white">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/ContactUs" className="nav-link text-white">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin" className="nav-link text-white">
                admin
              </a>
            </li>
          </ul> 
          </div>
      </div>
          
        <form className="d-flex justify-content bg-secondary mb-1">
          <input className="form-control me-2" type="text" placeholder="Search"/>
           <button className="btn btn-primary" type="button">Search</button>
          
        </form>
        <a href="/signin" className="nav-link text-white">
                SignIn
              </a>
              <a href="/signup" className="nav-link text-white">
                SignUp
              </a>
    
    </nav>
  </div>
  </div>
  )
}

export default Header



  