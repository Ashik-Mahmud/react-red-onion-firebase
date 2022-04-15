import React from "react";
import useFoods from "../../../../Hooks/useFoods";
import MealCard from "../MealCard/MealCard";

const Dinner = () => {
  const { foods, loading } = useFoods("dinner");

  return loading ? (
    <div className="foods-container row g-4">
      {foods.map((food) => (
        <MealCard key={food.id} food={food} />
      ))}
    </div>
  ) : (
    "Loading...."
  );
};

export default Dinner;
