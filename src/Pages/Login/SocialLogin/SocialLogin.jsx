import React from "react";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import "../Styles/Styles.css";
const SocialLogin = () => {
  return (
    <div id="social-login">
      <p className="line">Or</p>
      <div className="btn-group text-center d-flex gap-2 justify-content-center">
        <button className="btn btn-danger">
          <AiOutlineGoogle /> Google
        </button>
        <button className="btn btn-danger">
          <AiOutlineGithub /> Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
