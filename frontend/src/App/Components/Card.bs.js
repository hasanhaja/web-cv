'use strict';

var React = require("react");

function Card(Props) {
  var id = Props.id;
  var children = Props.children;
  return React.createElement("div", {
              className: "card",
              id: id
            }, children);
}

var make = Card;

exports.make = make;
/* react Not a pure module */
