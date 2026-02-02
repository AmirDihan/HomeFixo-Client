import React from "react";
import { useLoaderData } from "react-router";

const ServiceDetails = () => {
    const service = useLoaderData().result
    // console.log(service)
  return (
    <div className="mt-10 bg-white rounded-xl w-200 mx-auto shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="h-90 w-full overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.serviceName}
          className="w-full h-full object-fit"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {service.serviceName}
        </h3>

        <p className="mt-1">{service.category}</p>

        <p className="text-sm text-gray-600 mt-2">
          {service.description}
        </p>

        {/* Push bottom content down */}
        <div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-blue-600 font-bold text-lg">
              ${service.price}
            </span>

            <span className="text-xs text-gray-500 line-clamp-1">
              by {service.providerName}
            </span>
          </div>

          <button className="btn mt-3 w-full bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
