import React, { Component } from "react";
let Education = props => {
  const resumeEdu = props.resumeEdu;
  return (
    <section className=" section-inner p-4 p-lg-4 education">
      <div className="">
        <h2 className="mb-3 header-gradient">Education</h2>

        {resumeEdu.map(edu => {
          return (
            <div className="resume-item d-flex flex-column flex-md-row mb-3" key={edu.institution}>
              <div className="resume-content mr-auto">
                <h5 className="mb-0">{edu.institution}</h5>
                <div className="subheading mb-3">{edu.area}</div>
              </div>
              <div className="resume-date text-md-right">
                <span className="">{`${edu.startDate} - ${edu.endDate}`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
