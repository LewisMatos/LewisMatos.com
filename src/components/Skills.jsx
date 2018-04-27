import React, { Component } from "react";
const Skills = props => {
  return (
    <section className="section-inner p-2 p-lg-3 d-flex flex-column text-center">
      <div className="">
        <h2 className="mb-5 header-gradient">{"Languages & Frameworks"}</h2>
        <ul className="list-inline list-icons">
          <li className="list-inline-item">
            <i className="devicon devicon-html5-plain colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-css3-plain colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-bootstrap-plain colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-react-original-wordmark colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-jquery-plain colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-javascript-plain colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicons devicon-nodejs-plain colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-mysql-plain-wordmark" />
          </li>

          <li className="list-inline-item">
            <i className="devicon-php-plain colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-python-plain colored" />
          </li>
        </ul>
        <h2 className="mb-5 mt-5 header-gradient">Tools</h2>
        <ul className="list-inline list-icons">
          <li className="list-inline-item">
            <i className="devicon-webpack-plain colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-babel-plain colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-visualstudio-plain colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-vim-plain colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-ubuntu-plain-wordmark colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-amazonwebservices-plain-wordmark colored" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-github-plain-wordmark" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-ssh-plain" />
          </li>
          <li className="list-inline-item">
            <i className="devicon-redis-plain colored" />
          </li>
          <li>
            <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-04-10&ci=AWS00382630">
              <img
                className=" img-fluid"
                src="https://virtualbrakeman.files.wordpress.com/2017/01/amazon-web-services-certified-solutions-architect-associate.png?w=588"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
