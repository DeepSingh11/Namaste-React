import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return(
        <div className="header">
        <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" id="img" alt="Not displayed"/>
        </div>
        <div className="nav-right">
        <ul className="nav-items">
            <li>Home</li>
            <li>About Us </li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
        </div>
        </div>
    )
}

const RestaurantCard=()=>{
    return (
        // style attr takes Object{}
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img src="#" className="res-logo"/>
            <div className="res-data">
                <h3>Restaurant Name</h3>
                <h4>Cuisines</h4>
                <h4>4.3 stars</h4>
                <h4>38 minutes</h4>
            </div>
        </div>
    )
}
const Body=()=>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>   
            <div className="res-container">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout=()=>{

    return (
        <div className="app">
        <Header/>
        <Body/>
        </div>
    )
}



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);