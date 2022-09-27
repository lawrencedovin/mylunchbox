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
import Button from "./components/Button/Button";

function App() {
  return (
    <>
    
    <img src="images/live-and-guided-nora-klee.png" className="logo" height="100" width="100"/>
    <img src={process.env.PUBLIC_URL + '/images/live-and-guided-nora-klee.png'} />
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
    </>
  );
}

export default App;
