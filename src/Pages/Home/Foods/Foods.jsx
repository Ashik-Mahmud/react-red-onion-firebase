import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
const Foods = () => {
  const location = useLocation();

  return (
    <section id="foods" className="py-5">
      <div className="container">
        <div className="foods-content">
          <ul className="foods-category d-flex justify-content-center g-2 mb-5">
            <NavLink
              to="/lunch"
              className={`btn btn-outline-danger rounded-0 mx-2 border-0 ${
                location?.pathname === "/" && "active"
              }`}
            >
              Lunch
            </NavLink>
            <NavLink
              to="/dinner"
              className="btn btn-outline-danger rounded-0 mx-2 border-0"
            >
              Dinner
            </NavLink>
            <NavLink
              to="/breakfast"
              className="btn btn-outline-danger rounded-0 mx-2 border-0"
            >
              Breakfast
            </NavLink>
          </ul>
          {/* showing outlet  */}
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Foods;
