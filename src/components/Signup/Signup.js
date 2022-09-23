import React from "react";
import "./Signup.css";
import { InlineWidget } from "react-calendly";

function Signup() {
  return (
    <section className="section section--light">
      <h1 className="main-heading main-heading--dark">Sign Up</h1>
      <InlineWidget url="https://calendly.com/mylunchbox-mexicanseafood" className="calendly-widget" styles={{height: '650px'}}/>
    </section>
  );
}

export default Signup;
