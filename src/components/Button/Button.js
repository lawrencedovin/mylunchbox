import React from "react";
import "./Button.css";

function Button({url, text}) {
  return (
    <a className="btn" href={{url}} role="button">
      {{text}}
    </a>
  );
}

export default Button;
