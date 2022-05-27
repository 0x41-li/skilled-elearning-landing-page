import React, { useEffect, useRef } from "react";

// gsap
import gsap from "gsap";

// images
import heroImgMobile from "../assets/images/hero/circle-wrapper-with-female-mobile.png";
import heroImgTablet from "../assets/images/hero/oval-wrapper-with-female-tablet.png";
import gradientRectangleTablet from "../assets/images/hero/gradient-rectangle-of-oval-wrapper-tablet.png";
import heroImgDesktop from "../assets/images/hero/oval-wrapper-with-female-desktop.png";
import gradientRectangleDesktop from "../assets/images/hero/gradient-rectangle-of-oval-wrapper-desktop.png";

// import scss
import "../scss/hero.scss";

export default function Hero() {
  // DOM references
  const hero = useRef();
  const h1 = useRef();
  const heroPara = useRef();
  const heroBtn = useRef();
  const heroImgWrapper = useRef();
  const membersNumber = useRef();
  const courseHours = useRef();

  // objects
  const membersObj = {
    value: 0,
  };

  const courseHoursObj = {
    value: 0,
  };

  // gsap timeline
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(hero.current, { autoAlpha: 0, delay: 1 })
      .from(
        [h1.current, heroPara.current, heroBtn.current, heroImgWrapper.current],
        { y: -40, opacity: 0, stagger: 0.2 },
        1.4
      )
      .from(
        heroImgWrapper.current,
        {
          x: 400,
        },
        2
      )
      .to(
        membersObj,
        {
          value: 21,
          duration: 2,
          onUpdate: (value) => {
            membersNumber.current.textContent =
              Math.floor(membersObj.value) + "k";
          },
          ease: "none",
        },
        2.4
      )
      .to(
        courseHoursObj,
        {
          value: 1451,
          duration: 2,
          onUpdate: () => {
            let value = Math.floor(courseHoursObj.value);
            let valueAsString = Math.floor(courseHoursObj.value).toString();

            if (value >= 1000) {
              valueAsString =
                valueAsString.substring(0, 1) +
                "," +
                valueAsString.substring(1, valueAsString.lenght);
            }

            courseHours.current.textContent = valueAsString;
          },
          ease: "none",
        },
        2.4
      );
  }, []);

  return (
    <section className="hero" ref={hero}>
      {/* hero text part */}
      <div className="hero__text-part">
        <h1 ref={h1}>Maximize skill, minimize budget</h1>
        <p className="hero__p" ref={heroPara}>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className="hero__btn" ref={heroBtn}>
          Get Started
        </button>
      </div>

      {/* Hero illustration part */}
      <div className="hero__illustration-part">
        <div className="hero__img-wrapper" ref={heroImgWrapper}>
          <div className="hero__members">
            <p className="hero__members-p">Members</p>
            <p className="hero__members-num" ref={membersNumber}>
              {membersObj.value}k
            </p>
          </div>

          {/* Hero images  */}
          <img className="d-m" src={heroImgMobile} alt="" />

          <img className="d-t" src={heroImgTablet} alt="" />
          <img
            className="hero__gradient-rectangle d-t"
            src={gradientRectangleTablet}
            alt=""
          />

          <img className="d-d" src={heroImgDesktop} alt="" />
          <img
            className="hero__gradient-rectangle d-d"
            src={gradientRectangleDesktop}
            alt=""
          />

          <div className="hero__course-hours">
            <p className="hero__course-hours-p">Course hours</p>
            <p className="hero__course-hours-num" ref={courseHours}>
              {courseHoursObj.value}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
