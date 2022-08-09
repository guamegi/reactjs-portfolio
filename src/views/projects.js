import React from "react";

import HiddenModals from "../components/projects/hiddenModals";
import ProjectList from "../components/projects/projectList";

export default function Projects() {
  return (
    <React.Fragment>
      <div id="my-projects" className="container-fluid bg-light my-5">
        <div id="project-container" className="container bg-light">
          <h1 id="projects" className={"text-center wow fadeInRight"}>
            Projects
          </h1>
          <ProjectList />
        </div>
      </div>

      <HiddenModals />
    </React.Fragment>
  );
}
