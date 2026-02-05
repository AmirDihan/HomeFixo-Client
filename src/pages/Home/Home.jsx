import React from "react";
import Slider from "../../components/Slider"

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center items-center">
        <div className="w-1/2 h-full">
          <h2 className="text-5xl">Find Home Service Providers Near You</h2>
          <p className="mt-2">
            Browse verified professionals, compare services and hire with
            confidence. <br /> Every exprert is certified, vetted and ready to
            help with your home needs!
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="https://i.ibb.co.com/jvcbt9hQ/6bc7b55cc0d47304621ca5a0e2443de2.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
