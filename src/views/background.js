import React, { useEffect } from "react";

//import hooks
import SmoothScrollTo from "../hooks/smoothScrollTo";

import WOW from "wowjs";

export default function Background() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div id="my-background" className="background">
      <div id="snow" />
      <div id="snow2" />
      <div id="snow3" />
      <div className="top-container flex">
        <span className="mb-4">Hello, I'm Kwon MinHa</span>
        <span className="typing-text">Front End Developer</span>
        <br />
        {/* offset can be changed in node modules wowjs default file */}
        <button
          className={"work-button wow bounceIn"}
          data-wow-offset="0"
          onClick={() => SmoothScrollTo("my-projects")}
        >
          View my work
        </button>
      </div>
    </div>
  );
}
