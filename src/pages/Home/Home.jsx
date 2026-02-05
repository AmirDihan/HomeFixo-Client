import React from "react";
import Slider from "../../components/Slider";
import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./../../components/Navbar/ServicesCard";

const Home = () => {
  const [services, setServices] = useState([]);
  const limit = 6;
  useEffect(() => {
    fetch(`http://localhost:3000/services?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div>
      <Slider></Slider>
      <div className="mt-10">
        <h3
          className="text-5xl font-bold mb-5 bg-linear-to-r from-blue-400 to-blue-900 
          bg-clip-text text-transparent"
        >
          Popular Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
          {services.map((service, index) => (
            <ServicesCard key={index} service={service}></ServicesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
