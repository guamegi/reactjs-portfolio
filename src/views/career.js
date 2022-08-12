import React from "react";

export default function Career() {
  const career = [
    {
      comp: "(주)소프트위즈",
      period: "2017.09 ~ 2022.03",
      project: [
        {
          pName: "MyTradingInfo",
          pPeriod: "2020.01 ~ 2022.02",
          pDesc: [
            "프론트엔드 개발(인터랙션, 기능 추가. 데이터 연결)",
            "자체 개발한 차트 라이브러리 연동, 백엔드 api 실시간/조회, SNS 공유, socket.io, localstorage를 이용하여 유저별 차트 커스텀, 임베딩 기능, html5 canvas 로 주요 팩터별 ine차트를 제외한 나머지 차트 생성",
          ],
        },
        {
          pName: "기업 홈페이지 클라이언트 full-stack",
          pPeriod: "2020.04 ~ 2020.08",
          pDesc: [
            "기업용 홈페이지 프론트 및 API 서버 개발",
            "어드민 개발도 일정 부분 참여.",
          ],
        },
        {
          pName: "galaxy option 트레이딩 플랫폼",
          pPeriod: "2018.12 ~ 2019.12",
          pDesc: [
            "fx 트레이딩 플랫폼 개발",
            "솔루션을 이용한 프론트엔드 개발(퍼블리싱, 화면 인터랙션)",
          ],
        },
        {
          pName: "하이브리드 앱 안드로이드 APK 패키징",
          pPeriod: "2018.06 ~ 2018.11",
          pDesc: [
            "웹뷰 기반 모의투자 안드로이드 앱(하이브리드) version 관리",
            "패키징 작업 및 유지보수",
          ],
        },
        {
          pName: "가상화폐 거래소 모바일 개발",
          pPeriod: "2017.11 ~ 2018.06",
          pDesc: ["모바일 앱 개발 솔루션 'vivache' 사용 파견 개발"],
        },
      ],
    },
    {
      comp: "(주)포플즈",
      period: "2016.02 ~ 2017.09",
      project: [
        {
          pName: "monitoring tool 퍼블리싱",
          period: "2016.04 ~ 2017.08",
          pDesc: ["back office UI 퍼블리싱 유지보수"],
        },
      ],
    },
  ];
  return (
    <div id="my-career" className="container text-center my-5">
      <div id="career-container" className="container">
        <h1 id="career" className={"mb-5 wow fadeInLeft"}>
          Career
        </h1>
        <div>
          <table className="table table-borderless">
            <tbody>
              {career.map((c, i) => {
                return (
                  <tr key={i}>
                    <th className="col-md-5">
                      <div>
                        <h5>{c.comp}</h5>
                        <p className="text-secondary small">{c.period}</p>
                      </div>
                    </th>
                    <td className="col-md-7">
                      {c.project.map((p, i) => {
                        return (
                          <div className="text-start" key={i}>
                            <div>
                              <h5>
                                <b className="text-danger">|</b> {p.pName}
                              </h5>
                              <p className="text-secondary small">
                                {p.pPeriod}
                              </p>
                            </div>
                            <div>
                              <ul>
                                {p.pDesc.map((d, i) => {
                                  return <li key={i}>{d}</li>;
                                })}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
