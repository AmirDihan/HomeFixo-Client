import React from "react";

const BookingsCard = ({ bookings }) => {
  return (
    <div className="overflow-x-auto bg-base-200 rounded-xl">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-center">
            <th>Serial No.</th>
            <th>Service</th>
            <th>Service Categroy</th>
            <th>Cancel Booking</th>
          </tr>
          {bookings.map((book, index) => (
            <tr className="shadow-sm">
              <td>{index+1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="rounded-xl h-40 w-40">
                      <img
                        src={book.imageUrl}
                        alt="Service Image"
                      />
                    </div>
                  </div>
                  <div>
                    <p>{book.serviceName}</p>
                  </div>
                </div>
              </td>
              <td>{book.category}</td>
              <th >
                <button className="btn block mx-auto bg-linear-to-r from-red-400 to-red-700 hover:to-red-900 text-white py-2 rounded-lg text-sm font-medium">
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
