import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const BodyComponent=()=>{
    const [listOfRestaurant,setListOfRestaurant]=useState([]);
    console.log(listOfRestaurant);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.405174&lng=80.3909164&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();// await resolves promise
        // console.log(json);
        // console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants[0].info.name);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(!listOfRestaurant) return <Shimmer/>
    return (
        <div className="body-component" style={{backgroundColor:"black",}} >
            <div className="search">
                <button 
                className="filter-btn" 
                onClick={()=>{
                    let tempRes=listOfRestaurant.filter((res)=>{
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