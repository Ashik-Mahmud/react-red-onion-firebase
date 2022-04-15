import React from "react";
import { BsArrowRight, BsFillBellFill, BsTruck } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { NavLink } from "react-router-dom";
import aboutImg1 from "../../../Assets/images/adult-blur-blurred-background-687824.png";
import aboutImg3 from "../../../Assets/images/architecture-building-city-2047397.png";
import aboutImg2 from "../../../Assets/images/chef-cook-food-33614.png";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="title">
          <h1>Why choose us?</h1>
          <p>
            We are best of the cousine and also make best ever food for Eftar
          </p>
        </div>
        <div className="row py-4">
          <div className="col-lg-4">
            <div className="card rounded-0 border-0">
              <img src={aboutImg1} alt="about-1" />
              <div className="card-body d-flex gap-3 align-items-start">
                <div className="icon p-3 bg-danger rounded-circle text-white h4">
                  <MdOutlineDeliveryDining />
                </div>
                <div className="details">
                  <h5>Fast Delivery</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi atque iusto harum doloribus aut
                  </p>
                  <NavLink to="/">
                    See more
                    <BsArrowRight />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 shadow-sm rounded">
            <div className="card rounded-0 border-0">
              <img src={aboutImg2} alt="about-1" />
              <div className="card-body d-flex gap-3 align-items-start">
                <div className="icon p-3 bg-danger rounded-circle text-white h4">
                  <BsFillBellFill />
                </div>
                <div className="details">
                  <h5>A good auto responder</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi atque iusto harum doloribus aut
                  </p>
                  <NavLink to="/">
                    See more
                    <BsArrowRight />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card rounded-0 border-0">
              <img src={aboutImg3} alt="about-1" />
              <div className="card-body d-flex gap-3 align-items-start">
                <div className="icon p-3 bg-danger rounded-circle text-white h4">
                  <BsTruck />
                </div>
                <div className="details">
                  <h5>Fast Delivery</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi atque iusto harum doloribus aut
                  </p>
                  <NavLink to="/">
                    See more
                    <BsArrowRight />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
