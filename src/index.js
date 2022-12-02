import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";

import Background from "./views/background";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import About from "./views/about";
import Projects from "./views/projects";
import Career from "./views/career";

import "./styles/index.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <Navbar />
    <Background />
    <About />
    <Projects />
    <Career />
    <Footer />
  </React.Fragment>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
