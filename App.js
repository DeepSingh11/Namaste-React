import React from "react";
import ReactDOM from "react-dom/client";

const child=React.createElement("h1",{ id:"heading" },"child😄");

//JSX -> HTML like or XML like syntax
const jsxheading=<h1 id="heading">JSX Heading!!</h1>//this also creates ReactElement
console.log(child);
console.log(jsxheading);//Both will be same


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);