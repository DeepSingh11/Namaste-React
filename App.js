import React from "react";
import ReactDOM from "react-dom/client";

const jsxheading=<h1 id="heading">JSX Heading!!</h1>

const Title=()=> {
    return (<h1 className="heading">
    Title🚀
    </h1>)
}
const HeadingComponent=()=>{
    return ( 
    <div className="head">
        {Title()}{/*react components are JS functions*/}
        <Title/>
        <Title></Title>
        <h1>Heading Functional component!</h1>
    </div>)
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);