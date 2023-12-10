import React from "react";
import ReactDOM from "react-dom/client";

const child=React.createElement("h1",{ id:"heading" },"child😄");

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(child);