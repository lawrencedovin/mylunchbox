import React, {useRef} from "react";
import "./Button.css";

function Button({url, text, children}) {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <a className="btn" href={url} role="button" onClick={handleClick}>
      <p className="btn-text">{text}</p>
      {children}
    </a>
  );
}

export default Button;
