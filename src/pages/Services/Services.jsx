import React from "react";
import { useLoaderData, useNavigation } from "react-router";
import ServicesCard from "../../components/Navbar/ServicesCard";

const Services = () => {
  const data = useLoaderData();
  const navigation = useNavigation();

  // console.log(data)
  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center min-h-75">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
      {data.map((service, index) => (
        <ServicesCard key={index} service={service}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
