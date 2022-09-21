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
              What if I need to reschedule or cancel my class?
            </button>
          </h2>
          <div
            id="collapseOneY"
            className="accordion-collapse collapse"
            aria-labelledby="headingOneY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body body-text">
              <p>
              <strong><i>[for cancellations for summer camps, please refer to summer camp page]</i></strong>
              <br></br>
               Due to limited seating, classes at Baltimore Chef Shop are non-refundable.* If you need to reschedule, please notify us either by phone at <strong>(443) 869-5121</strong> or by email at <strong>kitchen@baltimorechefshop.com.</strong>
              </p>
              <ul>
                <li>Because space is so limited, we require <strong>48-hours notice </strong>for any changes.</li>
                <li><strong>Cancelling or rescheduling your booking within the 48-hour timeframe will result in a forfeiture of your credit.</strong> This applies for all illnesses and last minute emergencies, including COVID.</li>
                <li>If you find yourself unable to attend your class and the 48-hour deadline has already passed, we encourage you to send a friend in your place.</li>
              </ul>
              <p>
              <strong><i>Non-Refund Policy:</i></strong> We have a strict <strong>No Refund Policy</strong>, which includes any client cancellations due to COVID or any other illness.
              </p>
              <p className="mb-0">
              Unfortunately, COVID has become a part of daily life. We do our best to outline our policies in order to avoid any confusion. We also trust that all clients who book with us are aware of the potential that they may need to cancel their reservation in order to quarantine or isolate and have weighed that possibility prior to booking their ticket.
              </p>
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
