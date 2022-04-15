import React from "react";
import useFoods from "../../../../Hooks/useFoods";
import MealCard from "../MealCard/MealCard";

const Breakfast = () => {
  const { foods, loading } = useFoods("breakfast");

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

export default Breakfast;
