import React from "react";
import auth from "../../firebase.init.js/firebase.init";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../common/Loading";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [authUser] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const signIn = () => {
    signInWithGoogle();
  };
  if (authUser) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    toast.error(error.message, {
      id: "error",
    });
  }
  if (user) {
    toast.success("SuccessFully sign in", {
      id: "signIn",
    });
  }
  return (
    <div  className="flex justify-center items-center h-[80vh]">
      <button onClick={signIn}  className="btn btn-wide">
        Google Sign in
      </button>
    </div>
  );
};

export default SignIn;
