import React from "react";

const OrderItem = () => {
  return (
    <div className="item mb-3 d-flex bg-light justify-content-between p-2 rounded gap-4">
      <div className="d-flex align-items-center gap-4">
        <img src="https://i.ibb.co/r4wRSqD/lunch5.png" width={80} alt="" />
        <div className="details">
          <span className="d-block ">Butter nan</span>
          <strong className="colorize d-block">$55</strong>
        </div>
      </div>
      <div className="flex-column d-flex bg-white rounded">
        <span className="increase cursor-pointer py-1">+</span>
        <input
          type="text"
          className="border-0 bg-transparent text-center"
          readOnly
          value={1}
          style={{ width: "60px", outline: "none" }}
        />
        <span className="decrease cursor-pointer py-1">-</span>
      </div>
    </div>
  );
};

export default OrderItem;
