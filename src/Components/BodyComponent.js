import { useState } from "react";
import { resList } from "../utils/constants"
import RestaurantCard from "./RestaurantCard";
const BodyComponent=()=>{
    const [listOfRestaurant,setListOfRestaurant]=useState(resList);
    console.log(listOfRestaurant);
    return (
        <div className="body-component" style={{backgroundColor:"black",}} >
            <div className="search">
                <button 
                className="filter-btn" 
                onClick={()=>{
                    let tempRes=resList.filter((res)=>{
                        return res.info.avgRating > 4
                        })
                    setListOfRestaurant(tempRes);
                }}>
                Top Rated Restaurant
                </button>
            </div>   
            <div className="res-container">
            {/* key(resData) should be destructured in component and name should be same i.e resData*/}
            {/* not using key (not-acceptable) <<<<<< using index as key <<<<<< using unique id as key (best). */}
            
            {
                listOfRestaurant.map((res)=>{
                return <RestaurantCard key={res?.info?.id} resData={res}/>
            })}
            </div>
        </div>
    )
}

export default BodyComponent;