import { resList } from "../utils/constants"
import RestaurantCard from "./RestaurantCard";
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

export default BodyComponent;