import React from "react";

import SkillBars from "./about.description.skillBars";

export default function AboutDescription(props) {
  return (
    <div className="row" style={{ marginTop: 7 + "rem" }}>
      <SkillBars />
      <div className="col-12 col-lg-6">
        <p className="mytext">
          I love to transform ideas into reality using code. I am passionate
          about using Javascript and animations to create awesome user
          experiences.
        </p>
      </div>
    </div>
  );
}
