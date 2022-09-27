import React from "react";
import "./Testimony.css";
import { InlineWidget } from "react-calendly";
import Button from "../Button/Button";

function Testimony({id, typeOfCookingClass, testimony, name, imageURL}) {
  return (
    <div className={`carousel-item ${id === '1' ? "active" : ""}`} key={id}>
        { typeOfCookingClass === 'self-paced' 
        ? 
        <h2 className="subheading subheading--dark">
          What people are saying about Self-Paced Cooking Classes
        </h2>
        :
        <h2 className="subheading subheading--dark">
          What people are saying about Live and Guided Cooking Classes
        </h2>
        }
        <p class="lead font-italic mx-4 mx-md-5">
          { testimony }
        </p>
        <div class="mt-5 mb-4">
          <img
            src={imageURL}
            class="rounded-circle img-fluid shadow-1-strong"
            alt={`${name} testimony about ${typeOfCookingClass}`}
          />
        </div>
        <p class="text-muted mb-0">-{name}</p>
    </div>
  );
}

export default Testimony;
