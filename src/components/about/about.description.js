import React from "react";
import myImage from "../../img/myImage.png";
import SkillBars from "./about.description.skillBars";

export default function AboutDescription() {
  return (
    <div className="row align-items-center p-3">
      <SkillBars />
      <div className="col-12 col-lg-6">
        <img
          className={"img-fluid"}
          src={myImage}
          alt="myImage"
          style={{
            borderRadius: `50%`,
            width: `150px`,
          }}
        />
        <br />
        <br />
        <p className="mytext introduce">
          코드를 사용해 아이디어를 현실로 바꾸는 것을 좋아합니다.
          <br />
          화면의 인터랙션과 기능 설계 / 구현을 다루었고, 백엔드와 통신하여
          데이터를 연동하는 경험을 주로 하였습니다.
        </p>
        <br />
        <div className="mytext">
          <h4>주요 경험</h4>
          <ul>
            <li>차트 / 대시보드 화면 개발, 기능 구현, 실시간 데이터 연동</li>
            <li>API 클라이언트 포맷 설계, websocket handler 개발</li>
            <li>홈페이지 풀스택 개발: EJS + ExpressJs + MySQL</li>
            <li>RESTful API, websocket(socket.io) 를 통한 데이터 통신</li>
            <li>Canvas API, Pixi.js 등 데이터 시각화</li>
            <li>
              chart.js , tradingview(Lightweight), highchart 등 각종 차트
              라이브러리 연동
            </li>
            <li>
              ERP 내 Print Editor Tool 개발: 용지 선택, 이미지 업로딩, 텍스트
              입력 및 수정, 각종 설정(폰트 사이즈, 굵기, 색상, 정렬, 객체별
              인덱스 변경), Drag&Drop, 양식 CRUD, Print API 연동하여 에디터
              화면을 프린터로 실물 출력.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
