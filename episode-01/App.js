// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
 React.createElement("h1", {}, "Hello World from React") ➡️ it will give an Object cause React.createElement creates Objects

 ➡️ // {} is used for pass Props Object & for give Class, Id or Other Attributes.
 
 ➡️ So here heading is not a <h1></h1> . it's an Object 

 ➡️console.log(heading) will return an Object
 
 ➡️render()  is basically took that object and show it as <h1></h1> in the browser

 --------------------------------------------------------------------------------------------------------------------------
 React.createElement("element",{Attributes},children) //these are the 3 parameters
*/

/*
Let's Create this 

<div  id="parent">
    <div id="child1">
       <h1>Child1-Heading1</h1>
       <h2>Child1-Heading2</h2>
    </div>

    <div id="child2">
      <h1>Child2-Heading1</h1>
      <h2>Child2-Heading2</h2>
   </div>
</div>
*/
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
