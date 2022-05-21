import React from "react";

// scss
import "../scss/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer__logo">
        <p className="footer__logo__text">skilled</p>
      </div>
      <div className="footer__btn-wrapper">
        <button className="footer__btn">Get Started</button>
      </div>
    </footer>
  );
}
