'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function Experience$ExperienceContent(Props) {
  var param = Props.experienceContent;
  return React.createElement("div", {
              className: "experience-content"
            }, React.createElement("h4", {
                  className: "experience-content-dates"
                }, param.dates), React.createElement("h3", {
                  className: "experience-content-title"
                }, param.title), React.createElement("h3", {
                  className: "experience-content-organization"
                }, React.createElement("em", undefined, param.organization)), Belt_Array.map(param.description, (function (desc) {
                    return React.createElement("p", {
                                className: "experience-content-description"
                              }, desc);
                  })));
}

var ExperienceContent = {
  make: Experience$ExperienceContent
};

function Experience(Props) {
  var eschmann_description = [
    "Project management: Carried out a risk assessment project of the operating table production line.",
    "Tool design: Designed tool to aid assembly of handsets more consistently in the production line."
  ];
  var eschmann = {
    dates: "2016 to 2017",
    title: "Product Support Engineer",
    organization: "Eschmann Equipment, UK",
    description: eschmann_description
  };
  var content = [eschmann];
  return React.createElement("div", {
              id: "experience-container"
            }, React.createElement("h2", undefined, "Experience"), Belt_Array.map(content, (function (expContent) {
                    return React.createElement(Experience$ExperienceContent, {
                                experienceContent: expContent
                              });
                  })));
}

var make = Experience;

exports.ExperienceContent = ExperienceContent;
exports.make = make;
/* react Not a pure module */
