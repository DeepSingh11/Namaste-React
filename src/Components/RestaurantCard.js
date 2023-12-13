import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    // console.log(resData);
    const {name,cuisines,avgRating,slaString,costForTwo}=resData?.info;
    const url=CDN_URL+resData.info.cloudinaryImageId;
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

export default RestaurantCard;