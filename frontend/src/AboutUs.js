import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div>
       {/* <div className="container-fluid  my-5 border">
      <section className="hero">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="container">
          <div className="hero-content">
            <h2> Emporim Mall</h2>
            <p>
              Gold, GOLD 1, GOLD 2, HALL 3, HALL 6, HALL 7, HALL 8, HALL 9,
              SUPER ULTRA, TITANIUM, Ultra, ULTRA 4, ULTRA 5 Nishat Emporium
              Mall, Abdul Haque Rd, Lahore,Pakistan
            </p>
            <button className="cta-button"> Learn More </button>
          </div>
          <div className="hero-image">
            <img src="emporium_mall.jpg"/>
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <h2> Emporim Mall</h2>
            <p>
              Gold, GOLD 1, GOLD 2, HALL 3, HALL 6, HALL 7, HALL 8, HALL 9,
              SUPER ULTRA, TITANIUM, Ultra, ULTRA 4, ULTRA 5 Nishat Emporium
              Mall, Abdul Haque Rd, Lahore,Pakistan
            </p>
            <button className="cta-button"> Learn More </button>
          </div>
          <div className="hero-image">
            <img src="emporium_mall.jpg"/>
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <h2> Emporim Mall</h2>
            <p>
              Gold, GOLD 1, GOLD 2, HALL 3, HALL 6, HALL 7, HALL 8, HALL 9,
              SUPER ULTRA, TITANIUM, Ultra, ULTRA 4, ULTRA 5 Nishat Emporium
              Mall, Abdul Haque Rd, Lahore,Pakistan
            </p>
            <button className="cta-button"> Learn More </button>
          </div>
          <div className="hero-image">
            <img src="emporium_mall.jpg"/>
          </div>
        </div>
        
      </section>
    </div> */}

<section className="py-3 py-md-5 py-xl-8">
  <div className="container">
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6">
        <img
          className="img-fluid rounded"
               src="cinema_about.jpg"
               loading="lazy"
                alt=""
        />
      </div>
      <div className="col-12 col-lg-6">
        <div className="row justify-content-xl-center text-white">
          <div className="col-12 col-xl-10">
            <h2 className="h1 mb-3">Why Choose Us?</h2>
            <p className="lead fs-4 mb-3 mb-xl-5">
              With years of experience and deep industry knowledge, we have a
              proven track record of success and are constantly pushing
              ourselves to stay ahead of the curve.
            </p>
            <div className="d-flex align-items-center mb-3">
              <div className="me-3 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  fill="currentColor"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <div>
                <p className="fs-5 m-0">
                  Our evolution procedure is super intelligent.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="me-3 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  fill="currentColor"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <div>
                <p className="fs-5 m-0">
                  We deliver services beyond expectations.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4 mb-xl-5">
              <div className="me-3 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  fill="currentColor"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <div>
                <p className="fs-5 m-0">
                  Let's hire us to reach your objectives.
                </p>
              </div>
            </div>
            <Link to={"/ContactUs"}>
            <button
              type="button"
              className="btn bsb-btn-2xl btn-outline-primary rounded-pill"
            >
              Connect Now
            </button>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default AboutUs
