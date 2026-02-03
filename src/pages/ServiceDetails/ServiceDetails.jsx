import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router";
import AuthContext from "../../context/AuthContext";
import { useRef } from "react";
import { toast } from 'react-toastify';

const ServiceDetails = () => {
  const service = useLoaderData().result;
  const {user} = useContext(AuthContext)
  // console.log(user)
  // console.log(service)

  const handleBooking = (e) => {
    e.preventDefault();

    const bookingInfo = {
      customerName : e.target.customerName.value,
      customerEmail : e.target.customerEmail.value,
      customerImage : user.photoURL,
      serviceId : service._id,
      bookingDate : e.target.bookingDate.value,
      price : service.price,
    }
    // console.log(user)
    // console.log(bookingInfo)

    fetch('http://localhost:3000/booking',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(bookingInfo)
    })
    .then(res => res.json())
    .then(data => {
      if(data.result.insertedId){
        modalRef.current.close()
        toast.success('Booking successfully submitted!')
      }
    })
    .catch(error => {
      // console.log(error)
      toast.error(error)
    })

  }

  const modalRef = useRef()
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

        <p className="text-sm text-gray-600 mt-2">{service.description}</p>

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

          <button
            onClick={() => modalRef.current.showModal()}
            className="btn mt-3 w-full bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium"
          >
            Book Now
          </button>
          <dialog
            id="my_modal_5"
            ref={modalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">{service.serviceName}</h3>
              <div className="flex justify-between items-center">
                <p className="py-4">{service.category}</p>
                <p>${service.price}</p>
              </div>
              <div>
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="label font-medium">Your Name</label>
                    <input
                      type="text"
                      name="customerName"
                      required
                      defaultValue={user.displayName}
                      readOnly
                      className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="label font-medium">Your Email</label>
                    <input
                      type="text"
                      name="customerEmail"
                      required
                      defaultValue={user.email}
                      readOnly
                      className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="label font-medium">Booking Date</label>
                    <input
                      type="date"
                      name="bookingDate"
                      required
                      className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                      placeholder="Enter name"
                    />
                  </div>
                  <button className="btn mt-3 w-full bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium">Book Service</button>
                </form>
                <form method="dialog">
                  <button className="btn mt-3 w-full bg-linear-to-r from-red-400 to-red-700 hover:to-red-900 text-white py-2 rounded-lg text-sm font-medium">Cancel</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
