import React from "react";
import "./Flier.css";
import flier from '../../images/myLunchBox_Flier.bmp';

function Flier() {
  return (
    <section className="section">
      <h1 className="main-heading">Flier</h1>
      <div className="row">
        <div className="col-md-12 text-center">
          <img src={flier} alt="Flier for Mexican Seafood" className="flier img-fluid" />
        </div>
      </div>
    </section>
  );
}

export default Flier;
