import React, { useState } from "react";

export default function SkillBars() {
  const [technologies, setTechnologies] = useState([
    {
      category: "Front-End",
      name: "HTML5 / CSS3",
      percentage: 85,
      color: "",
    },
    {
      category: "Front-End",
      name: "Javascript",
      percentage: 85,
      color: "",
    },
    {
      category: "Front-End",
      name: "JQuery",
      percentage: 85,
      color: "",
    },
    {
      category: "Front-End",
      name: "Wordpress",
      percentage: 75,
      color: "",
    },
    {
      category: "Front-End",
      name: "Bootstrap / Tailwindcss / SCSS",
      percentage: 75,
      color: "",
    },
    {
      category: "Front-End",
      name: "ReactJS / NextJS",
      percentage: 70,
      color: "",
    },
    {
      category: "Back-End",
      name: "ExpressJS",
      percentage: 75,
      color: "bg-success",
    },
    {
      category: "Back-End",
      name: "MySQL",
      percentage: 70,
      color: "bg-success",
    },
    {
      category: "Mobile App",
      name: "Flutter",
      percentage: 65,
      color: "bg-info",
    },
    {
      category: "Mobile App",
      name: "React Native",
      percentage: 70,
      color: "bg-info",
    },
    {
      category: "Version Control",
      name: "Git",
      percentage: 85,
      color: "bg-warning",
    },
    {
      category: "Version Control",
      name: "SVN",
      percentage: 75,
      color: "bg-warning",
    },
    {
      category: "Communication",
      name: "Redmine",
      percentage: 85,
      color: "bg-secondary",
    },
    {
      category: "Communication",
      name: "Gira",
      percentage: 70,
      color: "bg-secondary",
    },
    {
      category: "Communication",
      name: "Confluence",
      percentage: 70,
      color: "bg-secondary",
    },
  ]);

  return (
    <div className={"col-12 col-sm-12 col-md-12 col-lg-6 wow fadeIn"}>
      {technologies.map((tech, index, all) => {
        return (
          <div key={index}>
            <div className="skills-category">
              {index == 0 ? (
                <div>{tech.category}</div>
              ) : tech.category !== all[index - 1].category ? (
                <div>{tech.category}</div>
              ) : null}
            </div>
            <div className="progress mb-2">
              <div
                className={`progress-bar fill-${tech.percentage.toString()}-bar ${
                  tech.color
                }`}
                role="progressbar"
                style={{ width: tech.percentage + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {tech.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
