'use strict';

var React = require("react");

function Hero(Props) {
  return React.createElement("div", {
              id: "hero-container"
            }, React.createElement("h1", undefined, "Hi, I'm Hasan!"), React.createElement("h4", undefined, "Dubai"));
}

var make = Hero;

exports.make = make;
/* react Not a pure module */
