import React, { useEffect, useState } from "react";
import restaurantList from "./Utils/MockData.js";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(restaurantList);

  const [filterRestro,setFilterRestro]=useState(restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true"
    );
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRestro( json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };



  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick=()=>{

    let filterData = listOfRestaurants.filter((data)=>{
      return data.info.name.toLowerCase().includes(value.toLowerCase());
    
    })
    setFilterRestro(filterData)
  }

  return (
    <>
      <div className="searchBox">
        <input
          className="searchBar"
          type="text"
          placeholder="Search For Restaurant"
          value={value}
          onChange={handleOnChange}
        />
        <button className="btn" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestro.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} {...restaurant.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
