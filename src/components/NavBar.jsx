/* import React, { Component } from "react";
import { goToTop } from "react-scrollable-anchor";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonSelected: false,
    };
  }

  onButtonClick = () => this.setState({ buttonSelected: this.state.buttonSelected ? false : true });
  showDropdown = () => (this.state.buttonSelected ? "show" : "");

  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top" id="sideNav">
        <a className="navbar-brand" onClick={goToTop} href="#page-top">
          <span className="d-block d-lg-none">Lewis Matos</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="https://s3.amazonaws.com/lewismatos.com/images/LewisMatosThumbnail.png"
              alt=""
            />
          </span>
        </a>
        <button onClick={this.onButtonClick} className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ` + this.showDropdown()} id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={goToTop} href="#about">
                About
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
 */
