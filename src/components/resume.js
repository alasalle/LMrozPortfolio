import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="heading">
          <Fade bottom cascade>
            Resume.
          </Fade>
        </h1>
        <div className="work-content">
          <Fade bottom>
            <div className="project">
              <img src="/resources/LacyResume.jpg" alt="Resume" style={{height: "auto", width: "100%"}}></img>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Resume;
