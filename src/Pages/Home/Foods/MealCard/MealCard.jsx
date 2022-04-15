import React from "react";
import { useNavigate } from "react-router-dom";

const MealCard = ({ food }) => {
  const navigate = useNavigate();
  console.log(food);
  return (
    <div className="col-lg-4">
      <div
        className="card border-light cursor-pointer shadow-sm border-0 rounded-2 p-2 text-center animated"
        onClick={() => navigate(`/food-details/${food?.type}/${food.id}`)}
      >
        <img
          className="card-img-top w-50 mx-auto"
          src={food?.image}
          alt={food?.title}
        />
        <div className="card-body">
          <h4 className="cart-title">{food?.title}</h4>
          <small>
            {food?.desc.length > 30 ? food.desc.slice(0, 30) : food.desc}
          </small>
          <p className="price h4 colorize my-2">$ {food?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
