import React from "react";
import "./Footer.css";
import logo from '../../images/Logo_Mexican_Seafood.bmp';

function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted footer">
      {/* <!-- Section: Social media --> */}
      <section className="d-flex justify-content-center p-4 border-bottom">
          <a
            className="btn text-white btn-floating footer__social-btn footer__social-btn--facebook m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="btn text-white btn-floating footer__social-btn footer__social-btn--instagram m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>
      </section>
      {/* <!-- Section: Social media -->
    
      <!-- Section: Links  --> */}
      <section className="">
        <div className="container text-center text-md-start my-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold mb-4 footer__title footer__title--company">
                <img src={logo} alt="Logo of Mexican Seafood" className="footer__logo" /> 
                myLunchbox by Mexican Seafood
              </h6>
              <p className="footer__text">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer__title">Useful links</h6>
              <p>
                <a href="https://calendly.com/privacy" className="fw-bold footer__link" target="_blank" rel="noreferrer">
                  Privacy
                </a>
              </p>
              <p>
                <a href="https://calendly.com/terms" className="fw-bold footer__link" target="_blank" rel="noreferrer">
                  Terms of Service
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold mb-4 footer__title">Contact</h6>
              <p className="footer__text">
                <i className="fas fa-home me-3 text-secondary"></i> New York, NY
                10012, US
              </p>
              <p className="footer__text">
                <i className="fas fa-envelope me-3 text-secondary"></i>
                info@example.com
              </p>
              <p className="footer__text">
                <i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-4 copy-right"
      >
        © 2022 Copyright: {' '}
        <a className="text-light fw-bold" href="https://mdbootstrap.com/" target="_blank" rel="noreferrer">
          myLunchbox by Mexican Seafood
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}

export default Footer;
