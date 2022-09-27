import "./studies.css";
import React from "react";

const Studies = () => {
  return (
    <div className="studies">
      <div className="studies--one">
        <div className="studies-info">
          <h3>Application Web Development ("DAW")</h3>
          <p>
            Private School: <span>CES JUAN PABLO II</span>
          </p>
          <p>
            <strong>Date:</strong>
            2021/2022
          </p>
        </div>
      </div>
      <div className="studies--two">
        <div className="studies-info">
          <h3>Development of Aplications Cross-plaftform ("DAM")</h3>
          <p>
            Private School: <span>Retamar</span>
          </p>
          <p>
            <strong>Date:</strong>
            2019/2022
          </p>
        </div>
      </div>
      <div className="studies--three">
        <div className="studies-info">
          <h3>FullStack Development in Neoland</h3>
          <p>
            Bootcamp School: <span>Neoland</span>
          </p>
          <p>
            <strong>Fecha:</strong>
            2022/2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Studies;
