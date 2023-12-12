import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import BodyComponent from "./Components/BodyComponent";

const AppLayout=()=>{

    return (
        <div className="app">
        <Header/>
        <BodyComponent/>
        </div>
    )
}



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);