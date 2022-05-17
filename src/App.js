import React, { useEffect, useState } from "react";

// scss
import "./scss/app.scss";

// components
import Header from "./components/Header";

export default function App() {
  const [pageAllLoaded, setPageAllLoaded] = useState(false);

  useEffect(() => {
    const pageLoadHandler = () => {
      setPageAllLoaded(true);
    };
    window.addEventListener("load", pageLoadHandler);
    return () => window.removeEventListener("load", pageLoadHandler);
  }, [pageAllLoaded]);

  console.log(pageAllLoaded);

  if (pageAllLoaded) {
    return (
      <>
        <Header />
      </>
    );
  }
  return <>Loading...</>;
}
