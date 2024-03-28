import { useContext } from "react";
import "./FoodDisplay.css";
import { FoodsContext } from "../../context/FoodsContext";
import FoodItem from "../FoodItem/FoodItem";

function FoodDisplay({ category }) {
  const { food_list } = useContext(FoodsContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
