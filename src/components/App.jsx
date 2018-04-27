import React, { Component } from "react";
import SideNav from "./SideNav.jsx";
import Profile from "./Profile.jsx";
import Experience from "./Experience.jsx";
import Resume from "../resume/Resume.js";

class App extends Component {
  render() {
    return (
      <div className="d-flex flex-main">
        <Profile resumeBasics={Resume.basics} />
        <Experience resume={Resume} />
        {/* <SideNav resumeBasics={Resume.basics} />
        <Profile resumeBasics={Resume.basics} />
        <Experience resume={Resume} /> */}
      </div>
    );
  }
}

export default App;
