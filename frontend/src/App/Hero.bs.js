'use strict';

var React = require("react");

function Hero(Props) {
  var width = String(400);
  var height = String(400);
  return React.createElement("div", {
              className: "container",
              id: "hero-container"
            }, React.createElement("img", {
                  id: "profile-pic",
                  alt: "Profile picture of a handsome devil.",
                  height: height,
                  src: "../../images/profile_pic.jpg",
                  width: width
                }), React.createElement("h2", {
                  id: "greeting"
                }, "Hi, I'm Hasan!"), React.createElement("h4", {
                  id: "location"
                }, "Dubai"));
}

var make = Hero;

exports.make = make;
/* react Not a pure module */
