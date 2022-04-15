import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { auth } from "../../../Firebase/Firebase";
import "../Styles/Styles.css";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (error) {
      toast.error(error.message.split(":")[1]);
    }
  }, [error]);

  return (
    <div id="social-login">
      <p className="line">Or</p>
      <div className="btn-group text-center d-flex gap-2 justify-content-center">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => signInWithGoogle()}
        >
          <AiOutlineGoogle /> Google
        </button>
        <button type="button" className="btn btn-danger">
          <AiOutlineGithub /> Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
