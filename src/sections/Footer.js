import React, { useEffect, useRef } from "react";

// gsap
import gsap from "gsap";

// scss
import "../scss/footer.scss";

export default function Footer() {
  const footer = useRef();

  useEffect(() => {
    // gsap timeline
    const tl = gsap.timeline();

    tl.from(footer.current, { autoAlpha: 0 }, 1);
  }, []);

  return (
    <footer ref={footer}>
      <div className="footer__logo">
        <p className="footer__logo__text">skilled</p>
      </div>
      <div className="footer__btn-wrapper">
        <button className="footer__btn">Get Started</button>
      </div>
    </footer>
  );
}
