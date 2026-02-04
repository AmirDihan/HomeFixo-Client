import React, { use, useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

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

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem('theme',theme)
  }, [theme]);

  const handleThemeToggole = (checked) => {
    // console.log(checked);
    setTheme(checked ? "dark" : "light")
  };

  const navItems = [
    <li>
      <NavLink className={navLinkClass} to={"/home"}>
        Home
      </NavLink>
    </li>,
    <li>
      <NavLink className={navLinkClass} to={"/services"}>
        Services
      </NavLink>
    </li>,
  ];

  const privateItems = [
    <li>
      <NavLink className={navLinkClass} to={"/my-services"}>
        My Services
      </NavLink>
    </li>,
    <li>
      <NavLink className={navLinkClass} to={"/my-bookings"}>
        My Bookings
      </NavLink>
    </li>,
    <li>
      <NavLink className={navLinkClass} to={"/add-service"}>
        Add Services
      </NavLink>
    </li>,
  ];

  return (
    <div className="navbar shadow-sm">
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
        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onChange={(e) => handleThemeToggole(e.target.checked)}
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <div className="dropdown dropdown-hover dropdown-bottom">
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
              <button
                onClick={() => handleLogout()}
                className="btn bg-linear-to-r from-red-400 to-red-700 hover:to-red-900 text-white py-2 rounded-lg text-sm font-medium"
              >
                Logout
              </button>
            </ul>
          </div>
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
