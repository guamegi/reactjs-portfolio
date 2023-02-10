import React, { useEffect } from "react";
import { projects } from "../../data/projects";

export default function HiddenModals() {
  // 이벤트 버블링 방지
  useEffect(() => {
    const visualEl = document.getElementsByClassName("visual");
    for (let i = 0; i < visualEl.length; i++) {
      visualEl[i].addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }
  }, []);

  function hiddenModal() {
    const modalBG = document.getElementById("gallery-card");
    const modals = document.getElementsByClassName("modal-card");

    modalBG.style.display = "none";
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }

  return (
    <div id="gallery-card" onClick={() => hiddenModal()}>
      {projects.map((project, index) => {
        return (
          <div id={project.name} className="modal-card" key={index}>
            <button
              type="button"
              className="btn-close btn-close-white h3"
              aria-label="Close"
              onClick={() => hiddenModal()}
            ></button>
            <div className="visual">
              <img src={project.image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
