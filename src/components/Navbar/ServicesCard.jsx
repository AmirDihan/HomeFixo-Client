import React from 'react'

const ServicesCard = ({service}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-105 flex flex-col">
      
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

        <p className="text-sm text-gray-500 mt-1">
          {service.category}
        </p>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {service.description}
        </p>

        {/* Push bottom content down */}
        <div className="mt-auto">
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
  )
}

export default ServicesCard

