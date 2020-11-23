'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function Hobbies(Props) {
  var content = [
    "\n            I enjoy spending most of time programming, and I work on projects in a variety of areas. I like learning about web technologies and I have been experiementing with WebAssembly and Progressive Web Apps. \n    ",
    "\n            In my free time, I enjoy listening to Tech podcasts like 'CppCast', 'Corecursive' by Adam Gordon Bell, 'Javascript Jabber', 'Talking Kotlin' by Hari Hadidi or 'New Rustacean'. I'm passionate about writing and developing my blog right now. Get in touch if you want to find out more.  \n\n    "
  ];
  return React.createElement("div", {
              id: "hobbies-container"
            }, React.createElement("h2", undefined, "Hobbies"), Belt_Array.map(content, (function (paragraph) {
                    return React.createElement("p", {
                                className: "hobbies-content"
                              }, paragraph);
                  })));
}

var make = Hobbies;

exports.make = make;
/* react Not a pure module */
