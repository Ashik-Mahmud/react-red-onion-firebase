import React from "react";

const MealCard = ({ food }) => {
  return (
    <div className="col-lg-4">
      <div className="card border-light cursor-pointer shadow-sm border-0 rounded-2 p-2 text-center animated">
        <img
          className="card-img-top w-50 mx-auto"
          src={food?.image}
          alt={food?.title}
        />
        <div className="card-body">
          <h4 className="cart-title">{food?.title}</h4>
          <small>{food?.desc}</small>
          <p className="price h4 colorize my-2">$ {food?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
