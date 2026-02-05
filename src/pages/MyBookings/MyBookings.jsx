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

  useEffect(() => {
    if (!user?.email) return; // wait for user

    fetch(`http://localhost:3000/my-bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data.data || []))
      .catch((err) => toast.error(err));
  }, [user?.email]);

  console.log(bookings);
  return(
    <div>
      <BookingsCard bookings={bookings}></BookingsCard>
    </div>
  );
};

export default MyBookings;
