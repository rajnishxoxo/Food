import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import { Menu_API } from "./Constant";

const RestaurantMenu = () => {
  const [restaurant, SetRestaurant] = useState(null);

  const [showmenu , setShowMenu] = useState(true)

  const handleClick = ()=>{
    if(showmenu==true){
      setShowMenu(false)
    }else{
      setShowMenu(true)
    }
  }

  const { resID } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_API+resID);
 

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
    <div >
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>Rating:{avgRatingString}</h3>
      <h3>Cost:{costForTwoMessage}</h3>

      <h1>Menu</h1>
<ul className="menu " onClick={handleClick}>
  { showmenu && itemcard.map((item)  => (
    < li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100}</li>
  ))}
</ul>
    
      
    </div>
  );
};

export default RestaurantMenu;
