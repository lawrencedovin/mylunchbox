import React from "react";
import "./Testimonials.css";
import { InlineWidget } from "react-calendly";
import Button from "../Button/Button";

function Testimonials() {
  return (
    <section className="section section--light" id="signup">
      <div className="container">
        <div className="col">
          <div className="row text-center">
            <h1 className="main-heading main-heading--dark">
              Testimonials
            </h1>
            <h2 className="subheading subheading--dark">
              Self-Paced and Live Guided Cooking Class
            </h2>
            <div
              id="carouselBasicExample"
              class="carousel slide carousel-dark"
              data-mdb-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <p class="lead font-italic mx-4 mx-md-5">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit, error amet numquam iure provident voluptate esse
                    quasi, voluptas nostrum quisquam!"
                  </p>
                  <div class="mt-5 mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                      class="rounded-circle img-fluid shadow-1-strong"
                      alt="smaple image"
                      width="100"
                      height="100"
                    />
                  </div>
                  <p class="text-muted mb-0">- Anna Morian</p>
                </div>

                <div class="carousel-item">
                  <p class="lead font-italic mx-4 mx-md-5">
                    "Neque cupiditate assumenda in maiores repudiandae mollitia
                    adipisci maiores repudiandae mollitia consectetur
                    adipisicing architecto elit sed adipiscing elit."
                  </p>
                  <div class="mt-5 mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                      class="rounded-circle img-fluid shadow-1-strong"
                      alt="smaple image"
                      width="100"
                      height="100"
                    />
                  </div>
                  <p class="text-muted mb-0">- Teresa May</p>
                </div>

                <div class="carousel-item">
                  <p class="lead font-italic mx-4 mx-md-5">
                    "Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur est laborum
                    neque cupiditate assumenda in maiores."
                  </p>
                  <div class="mt-5 mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      class="rounded-circle img-fluid shadow-1-strong"
                      alt="smaple image"
                      width="100"
                      height="100"
                    />
                  </div>
                  <p class="text-muted mb-0">- Kate Allise</p>
                </div>
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
