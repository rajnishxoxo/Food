import React, { useEffect, useState } from "react";
import restaurantList from "./Utils/MockData.js";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

import { isRestroOpen } from "./RestaurantCard.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(restaurantList);

  const [filterRestro,setFilterRestro]=useState(restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  const NewRestroCard = isRestroOpen(RestaurantCard)
  

  {/*https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true*/}

  const fetchData = async () => {
  
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.10296183168158&lng=79.0430336818099&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRestro( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
       console.log(restaurant.info.isOpen)
          return <Link  key={restaurant.id} to={"/Restaurant/"+restaurant.info.id}>{restaurant.info.isOpen?<NewRestroCard {...restaurant.info}/>:<RestaurantCard {...restaurant.info}/>}</Link>;
        })}
      </div>
    </>
  );
};

export default Body;
