import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import AuthContext from "./../../context/AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";
import BookingsCard from "../../components/BookingsCard";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (!user?.email) return; // wait for user

    fetch(`https://home-fixo-server.vercel.app/my-bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data.data || []);
        setLoader(false);
      })
      .catch((err) => {
        toast.error(err);
        setLoader(false);
      });
  }, [user?.email]);

  // console.log(bookings);

  if (loader) {
    return (
      <div className="flex justify-center items-center min-h-75">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    );
  }
  return (
    <div>
      <BookingsCard bookings={bookings}></BookingsCard>
    </div>
  );
};

export default MyBookings;
