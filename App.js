import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./constants";
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

const RestaurantCard=(props)=>{
    const {resData}=props;
    console.log(resData);
    const {name,cuisines,avgRating,slaString,costForTwo}=resData?.info;
    const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId;
    return (
        // style attr takes Object{}
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img src={url}
            className="res-logo"/>
            <div className="res-data">
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                {/* <div style={{display:"flex",justifyContent:"space-around"}}> */}
                <h4>{avgRating}</h4>
                <h4>{slaString}</h4> 
                {/* </div> */}
                <h4>{costForTwo}</h4>
            </div>
        </div>
    )
}
const BodyComponent=()=>{
    return (
        <div className="body-component" style={{backgroundColor:"black"}} >
            <div className="search">
                Search
            </div>   
            <div className="res-container">
            {/* key(resData) should be destructured in component and name should be same i.e resData*/}
            {/* not using key (not-acceptable) <<<<<< using index as key <<<<<< using unique id as key (best). */}
            {resList.map((res)=>{
                return <RestaurantCard key={res?.info?.id} resData={res}/>
            })}
            {resList.map((res,i)=>{
            {/* not using key (not-acceptable) <<<<<< using index as key <<<<<< using unique id as key (best). */}
                return <RestaurantCard key={i} resData={res}/>
            })}
            </div>
        </div>
    )
}

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