'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function Skills(Props) {
  var skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Java",
    "Kotlin",
    "Python",
    "ReasonML"
  ];
  return React.createElement("div", {
              id: "skills-container"
            }, React.createElement("h2", undefined, "Skills"), React.createElement("ul", undefined, Belt_Array.map(skills, (function (skill) {
                        return React.createElement("li", undefined, skill);
                      }))));
}

var make = Skills;

exports.make = make;
/* react Not a pure module */
