'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$Frontend = require("./App/App.bs.js");

ReactDom.render(React.createElement(App$Frontend.make, {}), document.getElementById("root"));

/*  Not a pure module */
