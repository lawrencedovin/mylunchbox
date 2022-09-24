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
import Button from "./components/Button/Button";

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
            <Button url="#signup" text="Sign Up">
              <i class="fa-solid fa-arrow-up"></i>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
