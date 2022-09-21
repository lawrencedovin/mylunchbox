import logo from "./logo.svg";
import "./App.css";

// Material Design Bootstrap
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module

// Components
import Navbar from "./components/Navbar/Navbar";
import FAQs from "./components/FAQs/FAQs";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <FAQs />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;