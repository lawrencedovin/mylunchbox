import React from "react";
import "./FAQs.css";

function FAQs() {
  return (
    <section className="section">
      <h1 className="main-heading">FAQs</h1>
      <h2 className="subheading">4-Part Series</h2>
      <p className="body-text">
        How to time travel Baltimore ➡️ Mexico on your plate for lunch hour
        without paying for jet fuel! Save money, time and energy and create your
        own multicultural fusion food in a healthy and sustainable way with
        guidance from a experienced chef pilot.
      </p>
      <div className="accordion" id="accordionExampleY">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOneY">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseOneY"
              aria-expanded="false"
              aria-controls="collapseOneY"
            >
              <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOneY"
            className="accordion-collapse collapse"
            aria-labelledby="headingOneY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwoY">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseTwoY"
              aria-expanded="false"
              aria-controls="collapseTwoY"
            >
              <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwoY"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwoY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThreeY">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseThreeY"
              aria-expanded="false"
              aria-controls="collapseThreeY"
            >
              <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThreeY"
            className="accordion-collapse collapse"
            aria-labelledby="headingThreeY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
