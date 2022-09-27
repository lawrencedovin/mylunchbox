// import logo from "./logo192.png";
import "./App.css";

// Material Design Bootstrap
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module

// Components
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Flier from "./components/Flier/Flier";
import Signup from "./components/Signup/Signup";

import FAQs from "./components/FAQs/FAQs";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <Header />
            <Flier />
          </div>
        </div>
      </div>
      <Signup />
      <div className="container">
        <div className="row">
          <div className="col">
            <FAQs />
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
