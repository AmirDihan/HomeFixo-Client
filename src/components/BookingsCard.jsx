import React from "react";
import Swal from "sweetalert2";

const BookingsCard = ({ bookings }) => {

  const handleCancelService = (id) => {
    // console.log(id);
    fetch(`https://home-fixo-server.vercel.app/delete-booking/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your booking has been deleted.",
            icon: "success",
          });
        }
        else{
          Swal.fire({
            title: "Cannot Delete!",
            text: "Your booking is not deleted.",
            icon: "error",
          });  
        }
      });
  };
  return (
    <div className="overflow-x-auto bg-base-200 rounded-xl">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-center">
            <th>Serial No.</th>
            <th>Service</th>
            <th>Service Categroy</th>
            <th>Booking Date</th>
            <th>Cancel Booking</th>
          </tr>
          {bookings.map((book, index) => (
            <tr className="shadow-sm">
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="rounded-xl h-40 w-40">
                      <img src={book?.service?.imageUrl} alt="Service Image" />
                    </div>
                  </div>
                  <div>
                    <p>{book?.service?.serviceName}</p>
                  </div>
                </div>
              </td>
              <td>{book?.service?.category}</td>
              <td>{book?.bookingDate}</td>
              <th>
                <button
                  onClick={() => handleCancelService(book?._id)}
                  className="btn block mx-auto bg-linear-to-r from-red-400 to-red-700 hover:to-red-900 text-white py-2 rounded-lg text-sm font-medium"
                >
                  Cancel
                </button>
              </th>
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default BookingsCard;
