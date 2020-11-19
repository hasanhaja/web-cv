'use strict';

var React = require("react");

function Footer(Props) {
  return React.createElement("footer", undefined, React.createElement("div", {
                  className: "footer-content"
                }, "\u00a9 2020 Hasan Ali"));
}

var make = Footer;

exports.make = make;
/* react Not a pure module */
