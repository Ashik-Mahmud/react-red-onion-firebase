import React from "react";
import Logo from "../../Assets/images/logo.png";
const Footer = () => {
  return (
    <footer id="footer" className="bg-dark mt-5 p-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={Logo} alt="logo" width={150} />
          </div>
          <div className="col-lg-3">
            <a className="text-white my-2 d-block" href="/">
              About Online Food
            </a>
            <a className="text-white my-2 d-block" href="/">
              Read our blog
            </a>
            <a className="text-white my-2 d-block" href="/">
              Sign Up to deliver
            </a>
            <a className="text-white my-2 d-block" href="/">
              Add your restaurant
            </a>
          </div>
          <div className="col-lg-3">
            <a className="text-white my-2 d-block" href="/">
              Get helps
            </a>
            <a className="text-white my-2 d-block" href="/">
              Read FAQs
            </a>
            <a className="text-white my-2 d-block" href="/">
              View all cities
            </a>
            <a className="text-white my-2 d-block" href="/">
              Restaurant near me
            </a>
          </div>
        </div>
        <div className="row justify-content-between text-white mt-4 pt-5">
          <div className="col-lg-3">
            <p className="text-muted">&copy; Copyright by 2022</p>
          </div>
          <div className="col-lg-5 d-flex gap-5 ">
            <a className="text-white" href="/">
              Privacy Policy
            </a>
            <a className="text-white" href="/">
              Terms & Services
            </a>
            <a className="text-white" href="/">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
