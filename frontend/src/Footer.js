import React from 'react'

function Footer() {
  return (
<div className='container-xxl mt-0'>
    <footer className='hf text-center text-lg-start text-white col-xxl-3'>
      {/* Grid Container */}
      <div className='container p-4 pb-0'>
        {/* Grid row */}
        <div className='row my-4'>
          {/* Grid Column */}
          <div className='col-lg-4 col-md-6 mb-4 mb-md-0'>
            <div className='rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto' style={{width: 150,height:150}}>
              <img class="rounded-circle  img-fluid"
              src='logos.jpg' height={200} 
              alt='logo' loading='lazy'/>
            </div>
        

            <p className='text-center'>
              Bestest Cinema in Lahore.
              Must visit here.
              resonable packages are avaliable.
            </p>
          </div>
          {/* Grid column */}
          <div className='col-lg-2 col-md-6 mb-4 mb-md-0'>
            <h3 className='text-uppercase mb-4'><u>Movies</u></h3>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <a href='#' className='text-white'>
                  <i className='fas fa-paw pe-3'/>
                  Home
                </a>
              </li>
              <li className='mb-2'>
                <a href='#' className='text-white'>
                  <i className='fas fa-paw pe-3'/>
                  Now Showing 
                </a>
              </li>
              <li className='mb-2'>
                <a href='#' className='text-white'>
                  <i className='fas fa-paw pe-3'/>
                  Up Coming
                </a>
              </li>
              <li className='mb-2'>
                <a href='#' className='text-white'>
                  <i className='fas fa-paw pe-3'/>
                  Trending 
                </a>
              </li>
            </ul>
          </div>
          {/* Grid Column */}
          <div className='col-lg-2 col-md-6 mb-4 mb-md-0'>
            <h3 className='text-uppercase mb-4'><u>Cinemas</u></h3>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <a href='#' className='text-white'>
                  <i className='fas fa-paw pe-3'/>
                  Bahria Town 
                </a>
              </li>
              <li className='mb-2'>
                <a href='#' className='text-white'>
                  <i className='fas fa-paw pe-3'/>
                  Johar Town 
                </a>
              </li>
              <li className='mb-2'>
                <a href='#' className='text-white'>
                  <i className='fas fa-paw pe-3'/>
                  Emporium Mall
                </a>
              </li>
            </ul>
          </div>
             {/* Grid Column */}
             <div className='col-lg-2 col-md-6 mb-4 mb-md-0'>
            <h3 className='text-uppercase mb-4'><u>Services</u></h3>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <a href='#' className='text-white'>
                  <i className='fas fa-paw pe-3'/>
                  Location
                </a>
              </li>
              <li className='mb-2 '>
                <a href='#' className='text-white'>
                  <i className='fas fa-paw pe-3'/>
                  Contact Us
                </a>
              </li>
              <li className='mb-2'>
                <a href='#' className='text-white'>
                  <i className='fas fa-paw pe-3'/>
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className='col-lg-2 col-md-6 mb-4 mb-md-0'>
            <h3 className='text-uppercase mb-4'><u>Services</u></h3>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <a href='#' className='text-white'>
                  <i className='fas fa-paw pe-3'/>
                  Location
                </a>
              </li>
              <li className='mb-2 '>
                <a href='/ContactUs' className='text-white'>
                  <i className='fas fa-paw pe-3'/>
                  Contact Us
                </a>
              </li>
              <li className='mb-2'>
                <a href='#' className='text-white'>
                  <i className='fas fa-paw pe-3'/>
                  About Us
                </a>
              </li>
            </ul>
          </div>
          {/* Grid column end */}
        </div>
        {/* Grid Row */}
      </div>
      {/* Grid Container */}
      {/* Copyright */}
      <div className='text-center p-3' style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2020 Copyright:
      <a className='text-white' href='https://mdbootstrap.com/'>
      bootstrap.com
      </a>
      </div>
        {/* End Copyright */}
    </footer>
</div>
  )
}

export default Footer











// col-md-3 col-lg-3 col-xl-3 mx-auto mt-3


//col-md-3 col-lg-3 col-xl-3 mx-auto mt-3