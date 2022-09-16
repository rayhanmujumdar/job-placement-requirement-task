import React from "react";
import auth from "../../firebase.init.js/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../common/Loading";
import toast from "react-hot-toast";

const SignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const signIn = () => {
        signInWithGoogle()
    }
  if(loading){
    return <Loading></Loading>
  }
  if(error){
    toast.error(error.message,{
      id: 'error'
    })
  }
  if(user){
    toast.success("SuccessFully sign in",{
      id: 'signIn'
    })
  }
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <button onClick={signIn} className="btn btn-wide">Google Sign in</button>
    </div>
  );
};

export default SignIn;
