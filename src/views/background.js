import React, { useEffect } from "react";
import WOW from "wowjs";
import SmoothScrollTo from "../hooks/smoothScrollTo";

export default function Background() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div id="my-background" className="background">
      {/* snow css 생성 */}
      <div id="snow" />
      <div id="snow2" />
      <div id="snow3" />
      <div className="top-container flex">
        <span className="descTitle mb-4">Hello, I'm Kwon Min Ha</span>
        <span className="typing-text">Front End Developer</span>
        <br />
        <button
          className={"work-button wow bounceIn"}
          data-wow-offset="0"
          onClick={() => SmoothScrollTo("about-container")}
        >
          더 알아보기
        </button>
      </div>
    </div>
  );
}
