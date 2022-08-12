import React from "react";

//import images
import myPortFolio from "../../img/myPortfolio.png";
import dynamicChart from "../../img/dynamicChart.png";
import chartBook from "../../img/chartBook.png";

export default function ProjectList() {
  // My-portfolio, dynamic-chart, chart-book 순으로
  const projects = [
    {
      no: 1,
      name: "My Portfolio",
      period: "2022.07 ~ 08",
      image: myPortFolio,
      desc: `이력서의 한정된 공간에 자신을 표현하기에는 부족하다는 생각이 들었습니다. 
      해당 프로젝트는 어떤 기술과 경험을 갖고 있는지 보여주기 위해 만들게 되었습니다.`,
      func: "css 및 wow.js, animate.css를 적용한 간단한 애니메이션",
      github: "https://github.com/guamegi/reactjs-portfolio",
      url: "https://guamegi.github.io/reactjs-portfolio/",
      stack: "react, jquery, bootstrap, sass",
    },
    {
      no: 2,
      name: "Dynamic Chart Sample",
      period: "2022.07",
      image: dynamicChart,
      desc: `실시간 차트를 이용한 거래 플랫폼을 검토하기 위해 
      2인이 Canvas를 사용하여 프로토타입으로 만들었다가 폐기된 소스를 재활용 중에 있습니다.\n
      샘플 데이터를 생성해 차트 애니메이션을 적용하여 동적 차트 생성과 서큘러 큐
      방식의 데이터 활용 등을 경험하였습니다.
      `,
      func: "샘플 데이터를 활용한 동적 차트 생성 및 차트 설정",
      github: "https://github.com/guamegi/dynamic-chart-sample",
      url: "https://guamegi.github.io/dynamic-chart-sample/",
      stack: "html, css, javascript, canvas",
    },
    {
      no: 3,
      name: "ChartBook",
      period: "2022.05 ~ 06",
      image: chartBook,
      desc: `ReactJS를 공부하며 개발한 개인 프로젝트 입니다.
      내가 보유한 주식과 가상화폐의 총 자산 현황을 파악하기 위해 각각의 앱을 들어가서 계산해야 하는 
      불편함이 계기가 되어 개발하게 되었습니다.
      
      `,
      func: "가상화폐 웹소켓 실시간 시세, 주식 시세 크롤링, chart 라이브러리 활용해 차트생성",
      github: "https://github.com/guamegi/chart-book-nodejs",
      url: "https://chart-book.herokuapp.com/portfolio",
      stack: "react, bootstrap, websocket, chartjs, tradingview-lightweight",
    },
  ];

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
                  style={addbackground(project.image)}
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
                            <a href={project.github} target="_blank">
                              {project.github}
                            </a>
                          </td>
                        </tr>
                      ) : null}
                      {project.url ? (
                        <tr>
                          <th>URL</th>
                          <td>
                            <a href={project.url} target="_blank">
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
