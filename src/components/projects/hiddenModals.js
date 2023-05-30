import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "../../data/projects";

SwiperCore.use([Navigation, Pagination]);

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

  const swiperStyle = {
    // width: "800px",
    height: "400px",
    objectFit: "cover",
  };

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
              <Swiper
                style={swiperStyle}
                spaceBetween={50}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                navigation
                pagination={{ clickable: true }}
                loop
              >
                {project.images.map((image, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <img
                        src={image}
                        alt=""
                        style={{
                          height: "100%",
                          objectFit: "contain",
                          display: "block",
                          margin: "0 auto",
                        }}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        );
      })}
    </div>
  );
}
