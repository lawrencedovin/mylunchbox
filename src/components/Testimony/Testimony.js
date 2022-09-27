import React from "react";
import "./Testimony.css";

function Testimony({id, typeOfCookingClass, testimony, name, imageURL, isLocalImage}) {
  return (
    <div className={`carousel-item ${id === '1' ? "active" : ""}`}>
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
        <p className="lead font-italic mx-4 mx-md-5">
          { testimony }
        </p>
        <div className="mt-5 mb-4">
          <img
            src={isLocalImage ? process.env.PUBLIC_URL + imageURL : imageURL}
            className="rounded-circle img-fluid shadow-1-strong"
            alt={`${name} testimony about ${typeOfCookingClass} cooking classes.`}
          />
        </div>
        <p className="text-muted mb-0">-{name}</p>
    </div>
  );
}

export default Testimony;
