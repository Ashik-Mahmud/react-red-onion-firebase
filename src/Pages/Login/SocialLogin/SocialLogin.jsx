import React, { useEffect } from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { auth } from "../../../Firebase/Firebase";
import "../Styles/Styles.css";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  useEffect(() => {
    if (error) {
      toast.error(error.message.split(":")[1]);
    } else if (githubError) {
      toast.error(githubError.message.split(":")[1]);
    }
    if (user || githubUser) {
      toast.success("User loggedIn Successfully done.");
    }
  }, [error, user, githubUser, githubError]);

  return (
    <div id="social-login">
      <p className="line">Or</p>
      <div className="btn-group text-center d-flex gap-2 justify-content-center">
        <button
          type="button"
          className={`btn btn-danger ${loading && "disabled"}`}
          onClick={() => signInWithGoogle()}
        >
          <AiOutlineGoogle /> Google
        </button>
        <button
          type="button"
          onClick={() => signInWithGithub()}
          className={`btn btn-danger ${githubLoading && "disabled"}`}
        >
          <AiOutlineGithub /> Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
