import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { auth } from "../../../Firebase/Firebase";
import "../Styles/Styles.css";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  return (
    <div id="social-login">
      <p className="line">Or</p>
      <div className="btn-group text-center d-flex gap-2 justify-content-center">
        <button className="btn btn-danger" onClick={() => signInWithGoogle()}>
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
