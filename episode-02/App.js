import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },

  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "Child1-Heading1"),
      React.createElement("h2", {}, "Child1-Heading2"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "child2-heading1"),
      React.createElement("h2", {}, "child2-heading2"),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
