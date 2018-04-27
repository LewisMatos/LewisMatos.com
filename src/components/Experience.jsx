import React, { Component } from "react";
import Work from "./Work.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";

let Experience = props => {
  return (
    <section className="experience-section">
      <div className="experience">
        <div className="experience-section">
          <div className="d-flex flex-xl-row flex-column">
            <Work resumeWork={props.resume.work} />
            <div className="d-flex flex-column">
              <Education resumeEdu={props.resume.education} />
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
