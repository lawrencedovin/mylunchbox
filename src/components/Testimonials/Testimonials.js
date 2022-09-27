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
              class="carousel slide carousel-dark"
              data-mdb-ride="carousel"
            >
              <div class="carousel-inner">
                {testimonials.map((testimony) => {
                  return (
                    <Testimony
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
                class="carousel-control-prev"
                type="button"
                data-mdb-target="#carouselBasicExample"
                data-mdb-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-mdb-target="#carouselBasicExample"
                data-mdb-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <Button url="#signup" text="Sign Up">
              <i class="fa-solid fa-arrow-up"></i>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
