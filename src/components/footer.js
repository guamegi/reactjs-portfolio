import React from "react";

export default function Footer() {
  return (
    <div id="footer" className="container-fluid text-center py-5">
      <div className="container d-flex justify-content-around">
        <div className="p-2">© 2022 • MyPortfolio - MH </div>
        <div className="p-2">
          {" "}
          • Contact Me : <a href="mailto:minhappp@naver.com">email link</a>
        </div>
      </div>
    </div>
  );
}
