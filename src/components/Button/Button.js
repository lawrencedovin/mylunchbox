import React from "react";
import "./Button.css";

function Button({url, text}) {
  return (
    <a className="btn" href={url} role="button" target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}

export default Button;
