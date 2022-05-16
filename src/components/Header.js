import React, { useEffect, useRef } from "react";

import gsap from "gsap";

// scss
import "../scss/header.scss";

export default function Header() {
  const header = useRef();
  const logoText = useRef();
  const cta = useRef();

  // gsap timeline
  const tl = gsap.timeline();

  useEffect(() => {
    const headerStyle = window.getComputedStyle(header.current);

    const headerMarginLeftPlusLogoTextWidth =
      parseInt(headerStyle.marginLeft.replace("px", "")) +
      logoText.current.clientWidth;

    tl.from(header.current, { autoAlpha: 0 })
      .from(logoText.current, {
        x: -headerMarginLeftPlusLogoTextWidth,
        duration: 0.6,
      })
      .from(cta.current, {
        y: "-200",
        duration: 0.6,
      }, 0.2);
  }, []);

  return (
    <header ref={header}>
      <div className="logo">
        <p className="logo__text" ref={logoText}>
          skilled
        </p>
      </div>
      <div className="header__cta-wrapper">
        <button className="header__cta" ref={cta}>
          Get Started
        </button>
      </div>
    </header>
  );
}
