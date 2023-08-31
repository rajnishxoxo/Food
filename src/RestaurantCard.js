import React from "react";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines = [],
  area,

  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="card">
      <img
        className="card-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h4>{area}</h4>
      <span>
        <h4>
          {avgRating}
          <i className="fa-solid fa-star"></i>
        </h4>

        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export const isRestroOpen = (RestaurantCard)=>{
  return (props)=>{
    return(
      <>
      <div>Open</div>
      <RestaurantCard {...props}/>
      </>
    )
  }
}
export default RestaurantCard;
