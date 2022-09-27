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
            <div
              id="carouselBasicExample"
              class="carousel slide carousel-dark"
              data-mdb-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <h2 className="subheading subheading--dark">
                    What people are saying about Self-Paced Cooking Classes
                  </h2>
                  <p class="lead font-italic mx-4 mx-md-5">
                    Learning basic techniques while developing levels of flavour and building confidence to cook without a recipe.  This course was the best thing I ever did for myself.
                  </p>
                  <div class="mt-5 mb-4">
                    <img
                      src="https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/274296702_4807456229377643_7178526151742892723_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Qlhp2uX30T0AX8xJd_R&_nc_ht=scontent-iad3-1.xx&oh=00_AT9SDJwbDwUV_KfCG75sDZ3ruPo6PJGt7BUzdva8gl4Pug&oe=6337430A"
                      class="rounded-circle img-fluid shadow-1-strong"
                      alt="smaple image"
                      width="100"
                      height="100"
                    />
                  </div>
                  <p class="text-muted mb-0">-Bernadette Conrad</p>
                </div>
                <div class="carousel-item">
                  <h2 className="subheading subheading--dark">
                    What people are saying about Self-Paced Cooking Classes
                  </h2>
                  <p class="lead font-italic mx-4 mx-md-5">
                    Great opportunity to learn how to cook and very fun!
                  </p>
                  <div class="mt-5 mb-4">
                    <img
                      src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.18169-9/12208469_10153702516942365_5402580282746915504_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cmQrHtIk03MAX_sa9EA&_nc_ht=scontent-iad3-1.xx&oh=00_AT_d8hOsJvJBbHurEBGSNX-AlAI_8OUTx8io48FyuZrMaA&oe=635A6880"
                      class="rounded-circle img-fluid shadow-1-strong"
                      alt="smaple image"
                      width="100"
                      height="100"
                    />
                  </div>
                  <p class="text-muted mb-0">-Raul Cannon</p>
                </div>
                <div class="carousel-item">
                  <h2 className="subheading subheading--dark">
                    What people are saying about Self-Paced Cooking Classes
                  </h2>
                  <p class="lead font-italic mx-4 mx-md-5">
                    "This cooking school was way beyond my greatest expectations! I've always enjoyed cooking but I never understood the ways of building flavors and why things happen the ways they do until Rouxbe! The lifetime membership is awesome- access to a vault of recipes, lessons and courses of all types. I am loving the learning!"
                  </p>
                  <div class="mt-5 mb-4">
                    <img
                      src="https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/308739952_10159825806880528_3651208900100621270_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3J_DbwrUAvsAX9kA8oD&_nc_ht=scontent-iad3-1.xx&oh=00_AT-G7F-o2hGMsuOiZaTSTe4kSxrInMoWbzHsBI1Kr2r4-Q&oe=6338E049"
                      class="rounded-circle img-fluid shadow-1-strong"
                      alt="smaple image"
                      width="100"
                      height="100"
                    />
                  </div>
                  <p class="text-muted mb-0">-Tanya Fyfe</p>
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
