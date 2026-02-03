import React, { use } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
    : "text-gray-600";

  const handleLogout = async () => {
    try {
      signOutUser();
      toast.success("Logged Out Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const navItems = [
    <li>
      <NavLink
        className={navLinkClass}
        to={"/home"}
      >
        Home
      </NavLink>
    </li>,
    <li>
      <NavLink
        className={navLinkClass}
        to={"/services"}
      >
        Services
      </NavLink>
    </li>,
  ];

  const privateItems = [
    <li>
      <NavLink
        className={navLinkClass}
        to={"/my-services"}
      >
        My Services
      </NavLink>
    </li>,
    <li>
      <NavLink
        className={navLinkClass}
        to={"/my-bookings"}
      >
        My Bookings
      </NavLink>
    </li>,
    <li>
      <NavLink
        className={navLinkClass}
        to={"/add-service"}
      >
        Add Services
      </NavLink>
    </li>,
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
            {user ? privateItems : ""}
          </ul>
        </div>
        <a className="btn btn-ghost w-40">
          <img
            className="w-full h-full object-contain"
            src="https://i.ibb.co.com/7Nkr8SqB/Screenshot-2026-02-03-205530-removebg-preview.png"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems} {user ? privateItems : ""}
        </ul>
      </div>
      {user ? (
        <div className="dropdown dropdown-hover dropdown-bottom navbar-end">
          <div tabIndex={0} role="button" className="m-1">
            <img
              className="rounded-full w-11 h-11 border"
              src={user.photoURL}
              alt="user"
            />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <button onClick={() => handleLogout()} className="btn bg-linear-to-r from-red-400 to-red-700 hover:to-red-900 text-white py-2 rounded-lg text-sm font-medium">
              Logout
            </button>
          </ul>
        </div>
      ) : (
        <div className="navbar-end">
          <Link
            to={"auth/login"}
            className="btn bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
