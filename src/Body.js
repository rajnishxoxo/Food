import React, { useEffect, useState } from "react";
import restaurantList from "./Utils/MockData.js";
import RestaurantCard from "./RestaurantCard.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(restaurantList);

  useEffect(() => {
    
   fetchData();
  
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true"
    );
    const json = await data.json();
    console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants[0].info);

    setListOfRestaurant( json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  if(listOfRestaurants.length===0){
    return(
      <h1>Loading...</h1>
    )
  }


  return (
    <div className="restaurant-list">
      {listOfRestaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant.id} {...restaurant.info} />;
      })}
    </div>
  );
};

export default Body;
