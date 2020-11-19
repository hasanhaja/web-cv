'use strict';

var React = require("react");

function Skills(Props) {
  return React.createElement("div", {
              id: "skills-container"
            }, React.createElement("h1", undefined, "Skills"));
}

var make = Skills;

exports.make = make;
/* react Not a pure module */
