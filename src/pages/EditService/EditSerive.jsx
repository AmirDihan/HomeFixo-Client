import React from "react";
import { useContext } from "react";
import AuthContext from "./../../context/AuthContext";
import { useLoaderData, useNavigate } from "react-router";

const EditSerive = () => {
  const data = useLoaderData();
  const service = data.result;
  console.log(service);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEditService = (event) => {
    event.preventDefault();
    const formData = {
      serviceName: event.target.serviceName.value,
      category: event.target.category.value,
      price: event.target.price.value,
      description: event.target.description.value,
      imageUrl: event.target.imageUrl.value,
    };

    fetch(`http://localhost:3000/edit-service/${service._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(`/service-details/${service._id}`)
      })
      .catch((error) => {
        console.log(error);
      });

    event.target.reset();
  };
  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl mt-10">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Edit the Service
        </h2>
        <form onSubmit={handleEditService} className="space-y-4">
          {/* Service Name, Category, Price, Description, Image URL, Provider Name, Email */}

          {/* Service Name Field */}
          <div>
            <label className="label font-medium">Service Name</label>
            <input
              type="text"
              name="serviceName"
              required
              defaultValue={service.serviceName}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              name="category"
              required
              defaultValue={service.category}
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Electrical">Electrical</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Cleaning">Cleaning</option>
              <option value="AC Repair">AC Repair</option>
              <option value="Appliance Repair">Appliance Repair</option>
              <option value="Painting">Painting</option>
              <option value="Carpentry">Carpentry</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Price Field */}
          <div>
            <label className="label font-medium">Price</label>
            <input
              type="text"
              name="price"
              required
              defaultValue={service.price}
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter price"
            />
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              required
              defaultValue={service.description}
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-62"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="label font-medium">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              defaultValue={service.imageUrl}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Provider Name Field */}
          <div>
            <label className="label font-medium">Provider Name</label>
            <input
              type="text"
              name="providerName"
              defaultValue={user.displayName}
              readOnly
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="label font-medium">Service Name</label>
            <input
              type="text"
              name="email"
              defaultValue={user.email}
              readOnly
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn mt-3 w-full bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium"
          >
            Edit Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditSerive;
