import React, { useEffect } from "react";

import SmoothScrollTo from "../hooks/smoothScrollTo";

export default function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var navBar = document.getElementById("navbar");
      var domRect = navBar.getBoundingClientRect();
      var myBackground = document.getElementById("my-background");
      var domBGRect = myBackground.getBoundingClientRect();

      // if (domRect.y <= -domRect.height) {
      if (domBGRect.top <= -160) {
        navBar.classList.add("fade-in-nav");
      } else {
        navBar.classList.remove("fade-in-nav");
      }
      // console.log(domRect.y, domRect.height, domBGRect.top);
    });
  }, []);

  return (
    <div>
      <nav
        id="navbar"
        className="navbar navbar-b navbar-expand-lg navbar-light fixed-top navbar-trans"
      >
        <div className="container">
          <a
            className="home-style navbar-brand"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            My Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                onClick={() => SmoothScrollTo("my-background")}
                className="btn-style nav-item nav-link"
              >
                Home
              </a>
              <a
                onClick={() => SmoothScrollTo("about-container")}
                className="btn-style nav-item nav-link"
              >
                About
              </a>
              <a
                onClick={() => SmoothScrollTo("my-projects")}
                className="btn-style nav-item nav-link"
              >
                Projects
              </a>
              <a
                onClick={() => SmoothScrollTo("my-contact")}
                className="btn-style nav-item nav-link"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
