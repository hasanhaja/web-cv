'use strict';

var React = require("react");

function Card(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: "card"
            }, children);
}

var make = Card;

exports.make = make;
/* react Not a pure module */
