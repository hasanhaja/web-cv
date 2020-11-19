'use strict';

var React = require("react");

function Experience(Props) {
  return React.createElement("div", {
              id: "experience-container"
            }, React.createElement("h1", undefined, "Experience"));
}

var make = Experience;

exports.make = make;
/* react Not a pure module */
