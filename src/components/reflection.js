import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import Navbar from "./Navbar.js";

function Reflection({ match }) {
  // eslint-disable-next-line
  let reflection = data.reflections.filter(x => x.id == match.params.id)[0];

  return (
    <div className="Page">
      <Navbar page={true} />
      <div className="about">
        <div className="about-content">
          <h1>
            <Fade bottom cascade>
              {reflection.title}
            </Fade>
          </h1>
          <div className="project">
            {reflection.content.map(result => {
              if (result.type === "txt") {
                return <p style={{width: "46em"}}>{result.text}</p>;
              } else if (result.type === "link") {
                return <p><a href={result.resource} target="_blank">{result.text}</a></p>;
              } else {
                if (result.thin) {
                  return <img src={result.resource} alt={result.text} style={{marginLeft: "0em", height: "4em"}} />;
                }
                return <img src={result.resource} alt={result.text} style={{marginLeft: "0em"}} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reflection;
