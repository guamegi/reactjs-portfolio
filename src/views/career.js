import React from "react";
import { career } from "../data/career";

export default function Career() {
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
