import React from "react";
import ReactDOM from "react-dom";

const myh1 = React.createElement(
  "h1",
  { title: "this is title", id: "myh1" },
  "this is content"
);
const myh2 = <div id="myh2">this is h tag yyy.</div>;
const mydiv = React.createElement("div", {}, "this is div", myh1, myh2);

ReactDOM.render(mydiv, document.getElementById("app"));
