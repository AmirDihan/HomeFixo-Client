import React from 'react'
import { Link } from 'react-router';

const ServicesCard = ({service}) => {
  return (
    <div className="bg-base-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-80 flex flex-col">
      
      {/* Image */}
      <div className="h-44 w-full overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.serviceName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {service.serviceName}
        </h3>

        {/* Push bottom content down */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-bold text-lg">
              ${service.price}
            </span>

            <span className=" text-gray-500 line-clamp-1">
              by {service.providerName}
            </span>
          </div>

          <Link to={`/service-details/${service._id}`} className="btn mt-3 w-full bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard

