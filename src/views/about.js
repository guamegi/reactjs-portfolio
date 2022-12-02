import React from "react";
import AboutDescription from "./../components/about/about.description";

export default function About(props) {
  return (
    <div
      id="about-container"
      className="content-containers container text-center my-5"
    >
      <h1 id="about" className="wow bounceInLeft mb-5">
        About Me
      </h1>
      <AboutDescription />
    </div>
  );
}
