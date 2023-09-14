import React, { useEffect, useState } from "react";
import SmoothScrollTo from "../hooks/smoothScrollTo";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var navBar = document.getElementById("navbar");
      var myBackground = document.getElementById("my-background");
      var domBGRect = myBackground.getBoundingClientRect();

      if (domBGRect.top <= -160) {
        navBar.classList.add("fade-in-nav");
      } else {
        navBar.classList.remove("fade-in-nav");
      }
    });
  }, []);

  return (
    <div>
      <nav
        id="navbar"
        className="navbar navbar-b navbar-expand-lg navbar-dark fixed-top navbar-trans"
      >
        <div className="container">
          <input
            type="button"
            className="home-style navbar-brand"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            value="My Portfolio"
          />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={!isNavCollapsed ? true : false}
            // aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`${
              isNavCollapsed ? "collapse" : ""
            } navbar-collapse justify-content-end`}
            // className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <input
                type="button"
                onClick={() => SmoothScrollTo("my-background")}
                className="btn-style"
                value="Home"
              />

              <input
                type="button"
                onClick={() => SmoothScrollTo("about-container")}
                className="btn-style"
                value="About"
              />
              <input
                type="button"
                onClick={() => SmoothScrollTo("my-projects")}
                className="btn-style"
                value="Projects"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
