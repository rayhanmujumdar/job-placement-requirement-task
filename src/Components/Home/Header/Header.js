import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init.js/firebase.init";
import Loading from "../../common/Loading";

export default function Header() {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () => {
    console.log("okay");
    signOut(auth);
  };
  if (loading) {
    return <Loading></Loading>;
  }
  const menuItem = (
    <>
      <li>
        <Link to="/" className="font-semibold text-lg">
          Home
        </Link>
      </li>
      <li>
        <Link to="about" className="font-semibold text-lg">
          About
        </Link>
      </li>
      <li>
        <Link to="favorite" className="font-semibold text-lg">
          Favorite
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl bg-red-500 text-white"
          >
            FindCode
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleSignOut} className="btn btn-success">
            Sign out
          </button>
        ) : (
          <Link to="sign-in" className="btn btn-success">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
