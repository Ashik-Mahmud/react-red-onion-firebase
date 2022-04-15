import React from "react";
import useFoods from "../../../../Hooks/useFoods";
import MealCard from "../MealCard/MealCard";

const Lunch = () => {
  const { foods, loading } = useFoods("lunch");
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

export default Lunch;
