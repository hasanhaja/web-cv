'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function Education$EducationContent(Props) {
  var param = Props.educationContent;
  return React.createElement("div", {
              className: "education-content"
            }, React.createElement("h4", undefined, param.dates), React.createElement("h3", undefined, param.institute), React.createElement("p", undefined, param.description));
}

var EducationContent = {
  make: Education$EducationContent
};

function Education(Props) {
  var content = [
    {
      dates: "2019 to 2020",
      institute: "Cranfield University",
      description: "Thesis: Blah Blah Blah Blah Blah Blah Blah Blah"
    },
    {
      dates: "2014 to 2019",
      institute: "University of Brighton",
      description: "Thesis: Blah Blah Blah Blah Blah Blah Blah Blah"
    }
  ];
  return React.createElement("div", {
              id: "education-container"
            }, React.createElement("h2", undefined, "Education"), Belt_Array.map(content, (function (eduContent) {
                    return React.createElement(Education$EducationContent, {
                                educationContent: eduContent
                              });
                  })));
}

var make = Education;

exports.EducationContent = EducationContent;
exports.make = make;
/* react Not a pure module */
