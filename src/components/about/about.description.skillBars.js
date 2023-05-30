import { tech } from "../../data/tech.js";

export default function SkillBars() {
  return (
    <div className={"col-12 col-sm-12 col-md-12 col-lg-6 wow fadeIn"}>
      {tech.map((tech, index, all) => {
        return (
          <div key={index}>
            <div className="skills-category">
              {index === 0 ? (
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
