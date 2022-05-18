import React from "react";

// images
import heroImgMobile from "../assets/images/hero/circle-wrapper-with-female-mobile.png";

// import scss
import "../scss/hero.scss";

export default function () {
  return (
    <div className="hero">
      <div className="hero__text-part">
        <h1>Maximize skill, minimize budget</h1>
        <p className="hero__p">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className="hero__btn">Get Started</button>
      </div>
      <div className="hero__illustration-part">
        <div className="hero__img-wrapper">
          <div className="hero__members">
            <p className="hero__members-p">Members</p>
            <p className="hero__members-num">29k</p>
          </div>
          <img src={heroImgMobile} alt="" />
          <div className="hero__course-hours">
            <p className="hero__course-hours-p">Course hours</p>
            <p className="hero__course-hours-num">1,451</p>
          </div>
        </div>
      </div>
    </div>
  );
}
