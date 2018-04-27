// import React, { Component } from "react";
// class SideNav extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       buttonSelected: false,
//     };
//   }

//   onButtonClick = () => this.setState({ buttonSelected: this.state.buttonSelected ? false : true });
//   showDropdown = () => (this.state.buttonSelected ? "show" : "");
//   scrollUp = () => {
//     $("html, body").animate({ scrollTop: "0" });
//   };

//   render() {
//     const resumeBasics = this.props.resumeBasics;
//     return (
//       <nav className="navbar navbar-expand-lg fixed-top d-flex justify-content-center" id="sideNav">
//         <a className="navbar-brand align-self-center m-0" onClick={this.scrollUp} href="#page-top">
//           <span className="d-block d-lg-none">{`${resumeBasics.firstname} ${resumeBasics.middleinitial} ${
//             resumeBasics.lastname
//           }`}</span>
//           <span className="d-none d-lg-block">
//             <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={resumeBasics.picture} alt="" />
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default SideNav;
