import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="w-full mx-auto mt-10">
      <img
        className="w-full mx-auto"
        src="https://i.ibb.co.com/tTKvzBLP/Screenshot-2026-02-04-010744.png"
        alt=""
      />
      <h2 className="text-7xl font-semibold text-center">
        Oops Error! Page Not Found!
      </h2>
      <Link
        to={"/home"}
        className="btn mt-10 block w-1/8 mx-auto bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
