import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

let Profile = props => {
  const resumeBasics = props.resumeBasics;
  return (
    <section className="profile-section">
      <div className="profile-picture" />
      <div className="profile-content d-flex">
        <div className="container-fluid text-center align-self-center">
          <div className="my-auto profile-lg">
            <span className="d-sm-block d-xs-block d-md-none d-lg-none d-xl-none profile-image-mobile" />
            <div className="mb-1 text-name ">
              <h5 className="d-inline  name-sm middle-initial">
                <strong>
                  <span className="mr-2 ">{`${resumeBasics.firstname} ${resumeBasics.middleinitial}`}</span>
                </strong>
              </h5>
              <h5 className="d-inline">
                <strong className=" name-sm lastname-animation">{resumeBasics.lastname}</strong>
              </h5>
            </div>
            <h5 className="mb-1  name-label-sm">{resumeBasics.label}</h5>
            <p />
            <div className="subheading mb-3">
              <h5 className=" name-address-sm">{`${resumeBasics.location.address}, ${
                resumeBasics.location.region
              }`}</h5>
              <h5 className=" text-address">
                <a href={`tel: ${resumeBasics.phone}`}> {resumeBasics.phone}</a>
              </h5>
              <h5 className=" text-address">
                <a href={`mailto: ${resumeBasics.email}`}>{resumeBasics.email}</a>
              </h5>
            </div>
            <ul className="list-inline list-social-icons mb-0">
              {resumeBasics.profiles.map(profile => {
                return (
                  <li key={profile.network} className="list-inline-item mr-4 hover">
                    <a href={profile.url}>
                      <FontAwesome
                        className={`fa-${profile.network}`}
                        style={{ textShadow: "2px 1px 1px rgba(187, 191, 201,0.3)" }}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
