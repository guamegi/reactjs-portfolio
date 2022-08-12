import React from "react";

import myImage from "../../img/myImage.jpg";
import SkillBars from "./about.description.skillBars";

export default function AboutDescription() {
  //   const startedCareerYear = 2016 - 1;
  //   const myCareerPeriod = Number(new Date().getFullYear()) - startedCareerYear;
  return (
    <div className="row align-items-center">
      <SkillBars />
      <div className="col-12 col-lg-6">
        <img
          className={"img-fluid"}
          src={myImage}
          alt="Portfolio Image"
          style={{
            borderRadius: 50 + "%",
            height: 200 + "px",
            width: 200 + "px",
          }}
        />
        <br />
        <br />
        <p className="mytext">
          {/* 저는 {myCareerPeriod}년차 웹 개발자입니다. 코드를 사용해 아이디어를
          현실로 바꾸는 것을 좋아합니다.
          <br /> */}
          코드를 사용해 아이디어를 현실로 바꾸는 것을 좋아합니다.
          <br />
          JavaScript 및 라이브러리를 이용해 화면 인터랙션을 다루고, BackEnd와
          통신하여 데이터를 연동하는 경험을 주로 하였습니다.
        </p>
        <br />
        <div className="mytext">
          <h4>주요 경험</h4>
          <ul>
            <li>Wordpress, Gnuboard 등 CMS 를 이용한 홈페이지 제작</li>
            <li>클라이언트/어드민 화면 기능 개발, API 데이터 연결</li>
            <li>기업용 홈페이지 풀스택 개발 : EJS + Express + MySQL</li>
            <li>REST API 및 websocket(socket.io) 를 통한 실시간 데이터 통신</li>
            <li>Canvas API를 사용한 데이터 시각화</li>
            <li>
              chart.js , tradingview(Lightweight), highchart 등 각종 차트
              라이브러리 연동
            </li>
            <li>git, redmine, gira 등 협업 툴 사용</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
