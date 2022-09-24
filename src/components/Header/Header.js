import React from "react";
import "./Header.css";
import logo from '../../images/Logo_Mexican_Seafood.bmp';

function Header() {
  return (
    <section className="section">
      <h1 className="main-heading">myLunchbox by Mexican Seafood</h1>
      <h2 className="subheading">4-Part Series</h2>
      <div className="body-text__container">
        <p className="body-text">
          How to time travel Baltimore ➡️ Mexico on your plate for lunch hour
          without paying for jet fuel! Save money, time and energy and create your
          own multicultural fusion food in a healthy and sustainable way with
          guidance from a experienced chef pilot.
        </p>
      </div>
      <img src={logo} alt="Logo of Mexican Seafood" className="logo" />
    </section>
  );
}

export default Header;
