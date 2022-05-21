import React, { useEffect, useRef } from "react";

// scss
import "../scss/popular-courses.scss";

// gsap and scrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// icons
import animationIcon from "../assets/icons/popular-courses/animation.png";
import designIcon from "../assets/icons/popular-courses/design.png";
import photographyIcon from "../assets/icons/popular-courses/photography.png";
import cryptoIcon from "../assets/icons/popular-courses/crypto.png";

export default function PopularCourses() {
  // get popular courses section reference
  const ppc = useRef();

  useEffect(() => {
    // register scrollTrigger Plugin
    gsap.registerPlugin(ScrollTrigger);

    // gsap timeline
    const tl = gsap.timeline();

    tl.from(ppc.current, { autoAlpha: 0 }, 1);

    // popular courses boxes
    const boxes = gsap.utils.toArray(".ppc__box");

    // run through each box, and add the same gsap scrollTrigger animation
    boxes.forEach((box) => {
      gsap.from(box, {
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "restart none reverse none",
          scrub: 1,
        },
        y: -40,
        opacity: 0,
      });
    });
  }, []);

  return (
    // ppc stands for PoPular Courses
    <section className="ppc" ref={ppc}>
      <div className="ppc__boxes">
        <div className="ppc__box">
          <h2 className="ppc__title">Check out our most popular courses!</h2>
        </div>
        <div className="ppc__box">
          <div className="ppc__box__icon-wrapper">
            <img className="ppc__icon" src={animationIcon} alt="" />
          </div>
          <p className="ppc__box__title">Animation</p>
          <p className="ppc__box__para">
            Learn the latest animation techniques to create stunning motion
            design and captivate your audience.
          </p>
          <a href="#" className="ppc__box__anchor">
            Get Started
          </a>
        </div>
        <div className="ppc__box">
          <div className="ppc__box__icon-wrapper">
            <img className="ppc__icon" src={designIcon} alt="" />
          </div>
          <p className="ppc__box__title">Design</p>
          <p className="ppc__box__para">
            Create beautiful, usable interfaces to help shape the future of how
            the web looks.
          </p>
          <a href="#" className="ppc__box__anchor">
            Get Started
          </a>
        </div>
        <div className="ppc__box">
          <div className="ppc__box__icon-wrapper">
            <img className="ppc__icon" src={photographyIcon} alt="" />
          </div>
          <p className="ppc__box__title">Photography</p>
          <p className="ppc__box__para">
            Explore critical fundamentals like lighting, composition, and focus
            to capture exceptional photos.
          </p>
          <a href="#" className="ppc__box__anchor">
            Get Started
          </a>
        </div>
        <div className="ppc__box">
          <div className="ppc__box__icon-wrapper">
            <img className="ppc__icon" src={cryptoIcon} alt="" />
          </div>
          <p className="ppc__box__title">Crypto</p>
          <p className="ppc__box__para">
            All you need to know to get started investing in crypto. Go from
            beginner to advanced with this 54 hour course.
          </p>
          <a href="#" className="ppc__box__anchor">
            Get Started
          </a>
        </div>
        <div className="ppc__box">
          <div className="ppc__box__icon-wrapper">
            <img className="ppc__icon" src={cryptoIcon} alt="" />
          </div>
          <p className="ppc__box__title">Business</p>
          <p className="ppc__box__para">
            A step-by-step playbook to help you start, scale, and sustain your
            business without outside investment.
          </p>
          <a href="#" className="ppc__box__anchor">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
