import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Background from "./views/background";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import About from "./views/about";
import Projects from "./views/projects";
import Career from "./views/career";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <Navbar />
    <Background />
    <About />
    <Projects />
    {/* <Career /> */}
    <Footer />
  </React.Fragment>
);
