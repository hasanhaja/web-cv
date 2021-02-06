'use strict';

var React = require("react");
var Hero$Frontend = require("./Hero.bs.js");
var Footer$Frontend = require("./Footer.bs.js");
var Header$Frontend = require("./Header.bs.js");
var Skills$Frontend = require("./Skills.bs.js");
var Content$Frontend = require("./Components/Content.bs.js");
var Hobbies$Frontend = require("./Hobbies.bs.js");
var Education$Frontend = require("./Education.bs.js");
var Experience$Frontend = require("./Experience.bs.js");

function App(Props) {
  return React.createElement("div", {
              id: "app"
            }, React.createElement(Header$Frontend.make, {}), React.createElement(Content$Frontend.make, {
                  children: null
                }, React.createElement(Hero$Frontend.make, {}), React.createElement(Skills$Frontend.make, {}), React.createElement(Education$Frontend.make, {}), React.createElement(Experience$Frontend.make, {}), React.createElement(Hobbies$Frontend.make, {})), React.createElement(Footer$Frontend.make, {}));
}

var make = App;

exports.make = make;
/* react Not a pure module */
