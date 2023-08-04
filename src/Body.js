import React, { useState } from "react";
import restaurantList from "./Utils/MockData.js";
import RestaurantCard from "./RestaurantCard.js";

const Body = () => {

  const [listOfRestaurants , setListOfRestaurant] = useState(restaurantList); 

  console.log(listOfRestaurants)
  
    return (
      <div className="restaurant-list">
        {listOfRestaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    );
  };

  export default Body;