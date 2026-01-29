import React from "react";
import { use } from "react";
import AuthContext from "../../context/AuthContext";

const AddService = () => {
  const { user } = use(AuthContext);
  // console.log(user)

  const handleAddService = (event) => {
    event.preventDefault()

    const formData = {
      servieName : event.target.serviceName.value,
      category: event.target.category.value,
      price: event.target.price.value,
      description: event.target.description.value,
      imageUrl: event.target.imageUrl.value,
      providerName: event.target.providerName.value,
      email: event.target.email.value,
      created_at: new Date()
    }
    
    fetch('http://localhost:3000/service', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })

    event.target.reset()

  };
  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl mt-10">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Add New Service
        </h2>
        <form onSubmit={handleAddService} className="space-y-4">
          {/* Service Name, Category, Price, Description, Image URL, Provider Name, Email */}

          {/* Service Name Field */}
          <div>
            <label className="label font-medium">Service Name</label>
            <input
              type="text"
              name="serviceName"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
              name="category"
              required
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
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
