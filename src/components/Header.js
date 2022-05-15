import React from "react";

// scss
import "../scss/header.scss";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <p className="logo__text">skilled</p>
      </div>
      <div className="header__cta-wrapper">
        <button className="header__cta">Get Started</button>
      </div>
    </header>
  );
}
