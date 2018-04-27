import React, { Component } from "react";

class Work extends Component {
  render() {
    const resumeWork = this.props.resumeWork;
    return (
      <section className="p-4 p-lg-4 d-flex flex-column resume" id="">
        <div className="d-flex flex-row">
          <div className="">
            <h2 className="mb-3 header-gradient">Experience</h2>
            {resumeWork.map(work => {
              return (
                <div className="resume-item d-flex flex-column flex-xl-row mb-1" key={work.position}>
                  <div className="resume-content">
                    <div className="d-flex  justify-content-between">
                      <div className="subheading ">{work.company}</div>
                      <div className="">{`${work.startDate} - ${work.endDate}`}</div>
                    </div>
                    <h6 className="mb-3">{work.position}</h6>
                    <ul>
                      {work.summary.map((summary, index) => {
                        return (
                          <li className="" key={index}>
                            {summary.header}
                            <div className="sub-bullet-sm">
                              <ul className="d-flex flex-column ">
                                {summary.bullet.map((bullet, index) => {
                                  return <li key={index}>{bullet}</li>;
                                })}
                              </ul>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <h6 className="resume-date text-md-right">
                    {/* <span className="">{`${work.startDate} - ${work.endDate}`}</span> */}
                  </h6>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
