import React from 'react';
import './Navbar.css'; // External CSS file


export default function Footer() {
  return (
   <>
     <footer className="footer bg-black text-light pt-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            {/* Logo + Tagline */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h4 className="fw-bold text-success">
                <i className="bi bi-gear-fill me-2"></i> Amna.
              </h4>
              <p className="mb-1">Innovating the Future, One Line of Code at a Time</p>

              {/* Social Links */}
              <p className="mb-1">Follow us:</p>
              <div className="d-flex gap-3">
                <a href="/" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
                <a href="/" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
                <a href="/" className="text-light fs-5"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            {/* Let's Talk Button */}
            <div className="col-12 col-md-6 text-md-end text-center mt-3 mt-md-0">
              <button className="btn btn-success px-4 py-2 rounded-pill fw-semibold">
                Let's Talk
              </button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="newsletter-box rounded d-flex flex-column flex-md-row justify-content-between align-items-center p-3 mb-4">
            <p className="mb-3 mb-md-0 fw-semibold text-center text-md-start">
              Subscribe to our quarterly newsletter and <br className="d-none d-md-block" />
              resolve our latest insights
            </p>
            <div className="input-group newsletter-input w-100 w-md-auto">
              <input
                type="email"
                className="form-control border-0"
                placeholder="Your Email..."
              />
              <button className="btn btn-success">
                <i className="bi bi-send-fill"></i>
              </button>
            </div>
          </div>

      
        </div>
      </footer>
  </>
  );
}
