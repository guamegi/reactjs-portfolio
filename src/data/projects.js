import myPortfolio from "../img/myPortfolio.png";
import dynamicChart from "../img/dynamicChart.png";
import chartBook from "../img/chartBook.png";
import imageClassification from "../img/imageClassification.png";
import chartSimulator from "../img/chartSimulator.png";
import mooving from "../img/mooving.png";
import moovingScreenshot from "../img/moovingScreenshot.png";
import sallyTarot from "../img/sallyTarot.jpeg";
import sallyScreenshot from "../img/sallyScreenshot.png";

export const projects = [
  {
    no: 7,
    name: "Sally's Tarot",
    period: "2023.04 ~ 05",
    images: [sallyScreenshot, sallyTarot],
    desc: `타로 카드를 사용하여 미래를 예측하는 모바일 타로 앱. 두번째 리액트 네이티브 앱 개발로 수익화 목적(전면 광고)으로 기획 및 개발. 구글 플레이에 배포 완료. 차후 앱 스토어에도 배포 예정.`,
    func: "1 or 3 cards 설정/선택, 선택한 카드 저장, 공유 기능, 다국어 지원(영어/한국어)",
    // github: "https://github.com/guamegi/chart-simulator",
    url: "https://play.google.com/store/apps/details?id=com.guamegi.sallytarot",
    stack: "React Native(CRNA), Styled-Components, i18next, Realm",
  },
  {
    no: 6,
    name: "Mooving",
    period: "2023.03 ~ 04",
    images: [moovingScreenshot, mooving],
    desc: `리액트 네이티브를 이용해서 구글 플레이에 배포한 첫 모바일 앱. 영화와 TV 프로그램 정보를 제공. TMDB에서 무료 API 이용.`,
    func: "영화, TV 프로그램 정보 제공, 검색 기능, 인앱브라우저, Light/Dark 테마 지원",
    github: "https://github.com/guamegi/mooving",
    url: "https://play.google.com/store/apps/details?id=com.guamegi.mooving",
    stack: "React Native, TypeScript, Styled-Components, react-query",
  },
  {
    no: 5,
    name: "Chart Simulator",
    period: "2022.10 ~ 현재",
    images: [chartSimulator],
    desc: `여러 보조지표를 설정하여 시뮬레이션을 수행. 사용자 최적의 지표를 찾는데 도움을 주고, 히스토리 데이터를 통해 차트 분석 서포팅.`,
    func: "종목과 보조지표 선택에 따른 합성 차트 생성, 예측",
    github: "https://github.com/guamegi/chart-simulator",
    // url: "https://guamegi.github.io/image-classification/",
    stack: "Next.js, tailwindcss, zustand",
  },
  {
    no: 4,
    name: "Image Classification",
    period: "2022.09",
    images: [imageClassification],
    desc: `이미지를 분류해 동적 object로 만드는 것에 관심. 관련 방법을 알아보던 중 머신러닝 모델을 이용하여 구현 가능성을 찾게 됨. 
    먼저 간단한 앱을 만들어 보는데 의의. TensorFlow.js 모델을 활용해 업로드 한 이미지를 분석.`,
    func: "TensorFlow.js로 업로드 한 이미지 분석",
    github: "https://github.com/guamegi/image-classification",
    url: "https://guamegi.github.io/image-classification/",
    stack: "HTML5, CSS3, Javascript, TensorFlow.js",
  },
  {
    no: 3,
    name: "My Portfolio",
    period: "2022.07 ~ 08",
    images: [myPortfolio],
    desc: `간략한 이력과 사이드 프로젝트 내용을 담은 포트폴리오 사이트. 이력서의 제한된 공간을 벗어나 좀더 시각적으로 표현하기 위해 제작.`,
    func: "css 및 wow.js, animate.css를 적용한 간단한 애니메이션",
    github: "https://github.com/guamegi/reactjs-portfolio",
    url: "https://guamegi.github.io/reactjs-portfolio/",
    stack: "React.js, Bootstrap, SCSS",
  },
  {
    no: 2,
    name: "ChartBook",
    period: "2022.05 ~ 06",
    images: [chartBook],
    desc: `자신이 보유한 주식과 가상화폐의 총 자산 현황을 실시간성으로 파악.
    총 자산 현황을 파악하기 위해 각각의 앱을 들어가서 계산해야 하는 
    불편함이 계기가 되어 개발.
    
    `,
    func: "가상화폐 웹소켓 실시간 시세, 주식 시세 크롤링, chart 라이브러리 활용 차트생성",
    github: "https://github.com/guamegi/chart-book-nodejs",
    url: "http://chartbook-env.eba-i9kwj8ti.ap-northeast-2.elasticbeanstalk.com/",
    stack:
      "React.js, Bootstrap, Websocket, Chart.js, Tradingview-lightweight, AWS-ELB, Heroku, zustand",
  },
  {
    no: 1,
    name: "Dynamic Chart Sample",
    period: "2019.07 ~ 12, 2022.07 ~",
    images: [dynamicChart],
    desc: `실시간 차트를 이용한 트레이딩 플랫폼을 검토하기 위해 
    2인이 Canvas api를 사용하여 프로토타입 개발. 이 후, 임시 중단된 legacy 활용 검토 중.
    샘플 데이터를 생성해 차트 애니메이션을 적용하여 동적 차트 생성과 서큘러 큐
    방식의 데이터 구조 활용.
    `,
    func: "샘플 데이터를 이용한 동적 차트 생성 및 차트 설정",
    github: "https://github.com/guamegi/dynamic-chart-sample",
    url: "https://guamegi.github.io/dynamic-chart-sample/",
    stack: "HTML5, CSS3, Javascript, HTML5 Canvas",
  },
];
