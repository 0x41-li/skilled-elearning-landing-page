import React, { useEffect, useState } from "react";

// scss
import "./scss/app.scss";

// components
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import PopularCourses from "./sections/PopularCourses";

export default function App() {
  const [pageAllLoaded, setPageAllLoaded] = useState(false);

  useEffect(() => {
    const pageLoadHandler = () => {
      setPageAllLoaded(true);
    };
    window.addEventListener("load", pageLoadHandler);
    return () => window.removeEventListener("load", pageLoadHandler);
  }, [pageAllLoaded]);

  if (pageAllLoaded) {
    return (
      <main>
        <Header />
        <Hero />
        <PopularCourses />
      </main>
    );
  }
}
