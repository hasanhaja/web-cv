'use strict';

var React = require("react");

function Header(Props) {
  return React.createElement("header", undefined, React.createElement("div", {
                  id: "header-content"
                }, React.createElement("h1", {
                      className: "flex-logo"
                    }, "Hasan")));
}

var make = Header;

exports.make = make;
/* react Not a pure module */
