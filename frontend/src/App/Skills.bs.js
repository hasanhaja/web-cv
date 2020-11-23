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
    "Python"
  ];
  var secondarySkills = [
    "ReasonML/ReScript",
    "Rust",
    "MATLAB",
    "TypeScript",
    "ExpressJS",
    "Tensorflow/TensorflowJS",
    "Pytorch",
    "ArrowKT",
    "KTor"
  ];
  return React.createElement("div", {
              id: "skills-container"
            }, React.createElement("h2", {
                  id: "skills-heading"
                }, "Skills"), React.createElement("ul", {
                  className: "skills-content-list",
                  id: "skills-primary"
                }, Belt_Array.map(skills, (function (skill) {
                        return React.createElement("li", undefined, skill);
                      }))), React.createElement("ul", {
                  className: "skills-content-list",
                  id: "skills-secondary"
                }, Belt_Array.map(secondarySkills, (function (skill) {
                        return React.createElement("li", undefined, skill);
                      }))));
}

var make = Skills;

exports.make = make;
/* react Not a pure module */
