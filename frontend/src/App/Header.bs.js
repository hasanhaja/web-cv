'use strict';

var React = require("react");

function Header(Props) {
  return React.createElement("header", undefined, React.createElement("div", {
                  id: "header-content"
                }, React.createElement("h1", {
                      className: "flex-logo"
                    }, "H"), React.createElement("button", {
                      className: "hamburger-button"
                    }, "\u2630")));
}

var make = Header;

exports.make = make;
/* react Not a pure module */
