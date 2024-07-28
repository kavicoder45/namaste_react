// restaurant object:
import { RestaurantCard } from "./RestaurantCard";
import restaurantMenu from "../utils/mockdata";
import { useState } from "react";

const FoodContainer = () => {
  const [menu, setMenu] = useState(restaurantMenu);
  console.log(menu);
  return (
    <section className="food_container">
      <button
        className="filter-btn"
        onClick={() => {
          let filteredList = menu.filter((ele) => {
            return ele.rating > 4.6;
          });
          setMenu(filteredList);
        }}
      >
        Top Rating
      </button>
      <div className="nav_center food_card_container">
        {menu.map((res, i) => (
          <RestaurantCard key={i} {...res} />
        ))}
      </div>
    </section>
  );
};

export default FoodContainer;
