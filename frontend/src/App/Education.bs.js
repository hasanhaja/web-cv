'use strict';

var React = require("react");

function Education(Props) {
  return React.createElement("div", {
              id: "education-container"
            }, React.createElement("h1", undefined, "Education"));
}

var make = Education;

exports.make = make;
/* react Not a pure module */
