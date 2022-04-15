import React from "react";
import useFoods from "../../../../Hooks/useFoods";

const Breakfast = () => {
  const { foods, loading } = useFoods("breakfast");

  return loading ? (
    <div className="foods-container row g-4">
      {foods.map((food) => (
        <div className="col-lg-4" key={food.id}>
          <div className="card border-light cursor-pointer shadow-sm border-0 rounded-2 p-2 text-center">
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
      ))}
    </div>
  ) : (
    "Loading...."
  );
};

export default Breakfast;
