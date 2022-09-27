import React from "react";
import "./Testimonials.css";
import { InlineWidget } from "react-calendly";
import Testimony from "../Testimony/Testimony";
import Button from "../Button/Button";
import testimonials from '../../data/testimonials.json';
import logo from '../../images/Logo_Mexican_Seafood.bmp';

function Testimonials() {
  return (
    <section className="section section--light" id="signup">
      <div className="container">
        <div className="col">
          <div className="row text-center">
            <h1 className="main-heading main-heading--dark">Testimonials</h1>
            <div
              id="carouselBasicExample"
              className="carousel slide carousel-dark"
              data-mdb-ride="carousel"
            >
              <div className="carousel-inner">
                {testimonials.map((testimony) => {
                  return (
                    <Testimony
                      key={testimony.id}
                      id={testimony.id}
                      typeOfCookingClass={testimony.typeOfCookingClass}
                      testimony={testimony.testimony}
                      name={testimony.name}
                      imageURL={testimony.imageURL}
                      isLocalImage={testimony.isLocalImage}
                    />
                  );
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-mdb-target="#carouselBasicExample"
                data-mdb-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-mdb-target="#carouselBasicExample"
                data-mdb-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <Button url="#signup" text="Sign Up">
              <i className="fa-solid fa-arrow-up"></i>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
