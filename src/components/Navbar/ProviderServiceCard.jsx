import React from "react";
import { Link } from "react-router";
const ProviderServiceCard = ({ service }) => {
  const { _id, serviceName, category, price, imageUrl, description } = service;
  console.log(service)
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
      {/* Image */}
      <figure className="h-80 overflow-hidden">
        <img
          src={imageUrl}
          alt={serviceName}
          className="w-full h-full object-fit"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-5">
        <h2 className="card-title">{serviceName}</h2>

        <div className="flex justify-between text-sm text-gray-500">
          <span>{category}</span>
          <span className="font-semibold">৳{price}</span>
        </div>

        <p className="text-sm line-clamp-3 mt-2">{description}</p>

        {/* Actions */}
        <div className="card-actions justify-between mt-4">
          <Link
            to={`/edit-service/${_id}`}
            className="btn mt-3 w-full bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium"
          >
            Edit
          </Link>

          <button
            className="btn mt-3 w-full bg-linear-to-r from-red-400 to-red-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderServiceCard;
