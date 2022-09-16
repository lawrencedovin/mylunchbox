import logo from "./logo.svg";
import "./App.css";

// Material Design Bootstrap
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="16"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dashboard
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-link px-3 me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary me-3">
                Sign up for free
              </button>
              <a
                className="btn btn-dark px-3"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

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
    </>
  );
}

export default App;
