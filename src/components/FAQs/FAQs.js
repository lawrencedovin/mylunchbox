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
                <strong>
                  <i>
                    [for cancellations for summer camps, please refer to summer
                    camp page]
                  </i>
                </strong>
                <br></br>
                Due to limited seating, classes at Baltimore Chef Shop are
                non-refundable.* If you need to reschedule, please notify us
                either by phone at <strong>(443) 869-5121</strong> or by email
                at <strong>kitchen@baltimorechefshop.com.</strong>
              </p>
              <ul>
                <li>
                  Because space is so limited, we require
                  <strong>48-hours notice </strong>for any changes.
                </li>
                <li>
                  <strong>
                    Cancelling or rescheduling your booking within the 48-hour
                    timeframe will result in a forfeiture of your credit.
                  </strong>
                  This applies for all illnesses and last minute emergencies,
                  including COVID.
                </li>
                <li>
                  If you find yourself unable to attend your class and the
                  48-hour deadline has already passed, we encourage you to send
                  a friend in your place.
                </li>
              </ul>
              <p>
                <strong>
                  <i>Non-Refund Policy:</i>
                </strong>
                We have a strict <strong>No Refund Policy</strong>, which
                includes any client cancellations due to COVID or any other
                illness.
              </p>
              <p className="mb-0">
                Unfortunately, COVID has become a part of daily life. We do our
                best to outline our policies in order to avoid any confusion. We
                also trust that all clients who book with us are aware of the
                potential that they may need to cancel their reservation in
                order to quarantine or isolate and have weighed that possibility
                prior to booking their ticket.
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
              What is the typical class size?
            </button>
          </h2>
          <div
            id="collapseTwoY"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwoY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body">
              At full capacity, we can accommodate 16 people in our Main
              Kitchens. Currently our couples classes are capped at 12 and open
              enrollment classes at 14.
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
              Who will be at my table with me?
            </button>
          </h2>
          <div
            id="collapseThreeY"
            className="accordion-collapse collapse"
            aria-labelledby="headingThreeY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body">
              Depending upon capacity restrictions, our tables are set up into
              two teams of 6 or 7 students who share in making the recipes.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFourY">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseFourY"
              aria-expanded="false"
              aria-controls="collapseFourY"
            >
              <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
              Will I make all my own recipes?
            </button>
          </h2>
          <div
            id="collapseFourY"
            className="accordion-collapse collapse"
            aria-labelledby="headingFourY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body">
              Our classes are designed to give you the full hands-on experience.
              In a <strong>Techniques</strong> class, everyone will be able to
              make a version of the recipe on which that class is based. For
              example: in techniques classes like Paella, Crepes, Sushi, or Pies
              101, all students will get hands-on experience in these recipes.
              All <strong>Menu-Based</strong> classes, on the other hand, are
              <strong>
                {" "}
                <u>collaborative</u>{" "}
              </strong>
              with students sharing in the preparation of an overall menu that
              they sit down and enjoy together in the end.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFiveY">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseFiveY"
              aria-expanded="false"
              aria-controls="collapseFiveY"
            >
              <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
              Can my kids attend classes with me?
            </button>
          </h2>
          <div
            id="collapseFiveY"
            className="accordion-collapse collapse"
            aria-labelledby="headingFiveY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body">
              For minors ages 8-17, please check out our
              <a href="https://www.baltimorechefshop.com/cooking-classes?category=For%20Kids">
                {" "}
                <strong><u>Parent & Me classes</u></strong>{" "}
              </a>
              and our
              <a href="https://www.baltimorechefshop.com/summer-camps/">
                {" "}
                <strong><u>Summer Culinary Camps</u></strong>{" "}
              </a>
              for options catered for your emerging chef. Standard classes are
              for ages 18+. For safety purposes, kids age 7 and under, including
              infants, are not permitted in the kitchens.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSixY">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseSixY"
              aria-expanded="false"
              aria-controls="collapseSixY"
            >
              <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
              Do I need to bring anything with me?
            </button>
          </h2>
          <div
            id="collapseSixY"
            className="accordion-collapse collapse"
            aria-labelledby="headingSixY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body">
              <p>
                Baltimore Chef Shop provides all ingredients, equipment, aprons,
                and tools. We are BYOB kitchen and do not sell alcoholic or
                other beverages. We do provide cold water with citrus for all
                classes, and you are welcome to bring an alternative beverage to
                enjoy with your meal. We will have a bucket of ice, glasses, and
                a cork screw waiting for you! As a matter of safety and as a
                courtesy to your fellow classmates who are here to learn, we ask
                that alcohol consumption is done in moderation (in other words,
                no coolers please). Please be advised that we are not able to
                allow spirits and hard liquor in our kitchen.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSevenY">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseSevenY"
              aria-expanded="false"
              aria-controls="collapseSevenY"
            >
              <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
              Do all classes serve food?
            </button>
          </h2>
          <div
            id="collapseSevenY"
            className="accordion-collapse collapse"
            aria-labelledby="headingSevenY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body">
              <p>
                At the end of our classes, students are invited to take part in
                enjoying their creations. For the menu-based classes, this
                includes a sit-down dinner. For techniques-based classes such as
                our baking classes, you are able to taste and sample your
                pastries with a cup of our freshly brewed coffee! And, in all
                cases, we welcome you to pack your items if you prefer to take
                them home instead. For classes like Fermentation 101 and Knife
                Skills 101, where cooking is not part of the class, we will have
                snacks on hand for you to enjoy. Weather permitting, you can
                enjoy our covered deck for outdoor seating.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEightY">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseEightY"
              aria-expanded="false"
              aria-controls="collapseEightY"
            >
              <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
              Can I take any leftover food home with me?
            </button>
          </h2>
          <div
            id="collapseEightY"
            className="accordion-collapse collapse"
            aria-labelledby="headingEightY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body">
              <p>
                Yes! Students are permitted to take home their leftovers. We will have take-out containers for you.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNineY">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseNineY"
              aria-expanded="false"
              aria-controls="collapseNineY"
            >
              <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
              Where can I park?
            </button>
          </h2>
          <div
            id="collapseNineY"
            className="accordion-collapse collapse"
            aria-labelledby="headingNineY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body">
              <p>
                There is metered street parking out front and free street parking both north and south of 36th Street. We are on 'The Avenue' in Hampden, an area that can become quite busy in the evenings and on the weekends, so we do recommend that you plan accordingly.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTenY">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseTenY"
              aria-expanded="false"
              aria-controls="collapseTenY"
            >
              <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
              If I have a food aversion or an allergy, can the menu be altered for me?
            </button>
          </h2>
          <div
            id="collapseTenY"
            className="accordion-collapse collapse"
            aria-labelledby="headingTenY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body">
              <p>
                As our menu-based classes are collaborative, we do not alter recipes for a particular aversion or allergy since this will prevent the other clients from enjoying the dish as it is meant to be prepared. Because of our class structure, we ask our students to self-monitor for aversions or sensitivities and avoid eating the particular dish with that ingredient or to remove it from your own portion, if the dish allows. Better yet, since this is meant to be a fun learning environment, we strongly suggest that you select a menu that accommodates your particular allergies.
              </p>
              <p>
                <i>Please be advised that, in the case of <strong>severe nut or gluten allergies</strong>, we are not a nut-free nor gluten-free kitchen and cross contamination from other classes cannot be safely avoided.</i>
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingElevenY">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseElevenY"
              aria-expanded="false"
              aria-controls="collapseElevenY"
            >
              <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
              Can I book a private class?
            </button>
          </h2>
          <div
            id="collapseElevenY"
            className="accordion-collapse collapse"
            aria-labelledby="headingElevenY"
            data-mdb-parent="#accordionExampleY"
          >
            <div className="accordion-body">
              <p>
                Yes! We would love to host you and your guests for a private cooking class. If you would like to schedule a class, please head to our <a href="https://www.baltimorechefshop.com/private-classes-and-events"><strong><u>Private Group Classes</u></strong></a> page for booking and pricing options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
