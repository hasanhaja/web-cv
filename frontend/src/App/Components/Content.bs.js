'use strict';

var React = require("react");

function Content(Props) {
  var children = Props.children;
  return React.createElement("div", {
              id: "content-container"
            }, children);
}

var make = Content;

exports.make = make;
/* react Not a pure module */
