import React from "react";

import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/work";
import Resume from "./components/resume";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function Landing() {
  return (
    <div className="Landing">
      <Navbar />
      <div className="App-header">
        <Header></Header>
      </div>

      <div className="About">
        <About></About>
      </div>
      <div className="resume work">
        <Resume/>
      </div>
      <div className="reflections work">
        <Work/>
      </div>
      {/* <div className="contact">
        <Contact></Contact>
      </div> */}
    </div>
  );
}

export default Landing;
