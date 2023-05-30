import React from "react";
import { projects } from "../../data/projects";

export default function ProjectList() {
  function showModal(name) {
    const modalBG = document.getElementById("gallery-card");
    const modal = document.getElementById(name);
    modalBG.style.display = "block";
    modal.style.display = "block";
  }

  function addbackground(image) {
    const style = {
      backgroundImage: `url(${image})`,
    };
    return style;
  }

  return (
    <div className="col">
      {projects.map((project, index) => {
        return (
          <div className="card shadow py-5 my-5" key={index}>
            <div className="card-body">
              {/* 제목, 날짜 */}
              <div className="mb-4">
                <h3 className="font-weight-bold text-center">{project.name}</h3>
                <div className="text-muted text-center">{project.period}</div>
              </div>
              <div className="row">
                <div className="col-md-1"></div>
                <div
                  className={"testbg col-12 col-sm-12 col-md-4 wow fadeIn"}
                  style={addbackground(project.images[0])}
                ></div>
                <div className="col-md-1"></div>
                {/* 설명, 스택 */}
                <div className="col-md-6">
                  <p>{project.desc}</p>
                  <button
                    className="project-button"
                    onClick={() => showModal(project.name)}
                  >
                    상세 보기
                  </button>
                  <hr />
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <th className="col-md-3">주요 기능</th>
                        <td className="col-md-9">{project.func}</td>
                      </tr>
                      {project.github ? (
                        <tr>
                          <th>GitHub</th>
                          <td>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {project.github}
                            </a>
                          </td>
                        </tr>
                      ) : null}
                      {project.url ? (
                        <tr>
                          <th>URL</th>
                          <td>
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {project.url}
                            </a>
                          </td>
                        </tr>
                      ) : null}
                      <tr>
                        <th>기술 스택</th>
                        <td>{project.stack}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
