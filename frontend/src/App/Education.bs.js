'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Card$Frontend = require("./Components/Card.bs.js");

function Education$EducationContent(Props) {
  var param = Props.educationContent;
  var match = React.useState(function () {
        return false;
      });
  var setState = match[1];
  return React.createElement(Card$Frontend.make, {
              children: React.createElement("div", {
                    className: "education-content"
                  }, React.createElement("h4", {
                        className: "education-content-dates"
                      }, param.dates), React.createElement("h3", {
                        className: "education-content-title"
                      }, param.title), React.createElement("h3", {
                        className: "education-content-institute"
                      }, React.createElement("em", undefined, param.institute)), match[0] ? Belt_Array.map(param.description, (function (desc) {
                            return React.createElement("p", {
                                        className: "education-content-description"
                                      }, desc);
                          })) : null, React.createElement("button", {
                        className: "content-expansion-toggle",
                        onClick: (function (param) {
                            return Curry._1(setState, (function (prev) {
                                          return !prev;
                                        }));
                          })
                      }, "+ View details"))
            });
}

var EducationContent = {
  make: Education$EducationContent
};

function Education(Props) {
  var cranfield_description = [
    "Thesis: Evaluation of 2D Semantic Segmentation Methods for Scene Understanding for Autonomous Driving Applications.",
    "Group Project: Detecting COVID-19 in Chest X-Ray images."
  ];
  var cranfield = {
    dates: "2019 to 2020",
    title: "MSc Computational and Software Techniques in Engineering (Computer and Machine Vision)",
    institute: "Cranfield University, UK",
    description: cranfield_description
  };
  var brighton_description = ["Key modules: Advanced Design, Product Innovation and Management, Renewable Technologies (PV and Biomass)"];
  var brighton = {
    dates: "2014 to 2019",
    title: "MEng Mechanical Engineering",
    institute: "University of Brighton, UK",
    description: brighton_description
  };
  var content = [
    cranfield,
    brighton
  ];
  return React.createElement("div", {
              className: "container",
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
