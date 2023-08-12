import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, SetRestaurant] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.10296183168158&lng=79.0430336818099&restaurantId=735540&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    SetRestaurant(json.data);
  };

  if (restaurant == null) return <Shimmer />;

  const { name, cuisines, avgRatingString, costForTwoMessage } =
    restaurant?.cards[0]?.card?.card?.info;

  const itemcard =
    restaurant?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

 

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>Rating:{avgRatingString}</h3>
      <h3>Cost:{costForTwoMessage}</h3>

      <h1>Menu</h1>
<ul>
  {itemcard.map((item) => (
    <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100}</li>
  ))}
</ul>
    
      
    </div>
  );
};

export default RestaurantMenu;
