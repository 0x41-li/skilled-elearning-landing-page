import React from "react";

// scss
import "../scss/popular-courses.scss";

// icons
import animationIcon from "../assets/icons/popular-courses/animation.png";
import designIcon from "../assets/icons/popular-courses/design.png";
import photographyIcon from "../assets/icons/popular-courses/photography.png";
import cryptoIcon from "../assets/icons/popular-courses/crypto.png";

export default function PopularCourses() {
  return (
    // ppc stands for PoPular Courses
    <section className="ppc">
      <div className="ppc__boxes">
        <div className="ppc__box">
          <h2>Check out our most popular courses!</h2>
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
