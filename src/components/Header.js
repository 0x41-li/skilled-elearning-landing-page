import React, { useEffect, useRef } from "react";

import gsap from "gsap";

// scss
import "../scss/header.scss";

// context

export default function Header() {
  const header = useRef();
  const logoText = useRef();
  const cta = useRef();

  // gsap timeline
  const tl = gsap.timeline();

  useEffect(() => {
    // get header and CTA styles
    const headerStyles = window.getComputedStyle(header.current);
    const ctaStyles = window.getComputedStyle(cta.current);

    // header marginLeft + logo width, so that we can get the logo out of the viewport
    const headerMarginLeftPlusLogoWidth =
      parseInt(headerStyles.marginLeft.replace("px", "")) +
      logoText.current.clientWidth;

    // header MarginTop + CTA height, so that we can cta out of the viewport
    const headerMarginTopPlusCtaHeight =
      parseInt(ctaStyles.height.replace("px", "")) +
      parseInt(headerStyles.marginTop.replace("px", ""));

    tl.from(header.current, { autoAlpha: 0, delay: 1 })
      .from(
        logoText.current,
        {
          x: -headerMarginLeftPlusLogoWidth,
          duration: 1,
          ease: "power4",
        },
        1
      )
      .from(
        cta.current,
        {
          y: -headerMarginTopPlusCtaHeight,
          duration: 0.2,
          ease: "power4",
        },
        1
      );
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
