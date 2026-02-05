import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router";

export default function App() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="relative w-full h-full bg-[url('https://i.ibb.co.com/DqNKZ0p/cleaning-service.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 p-6 top-80">
              <h3 className="text-white text-lg mb-4 w-200 mx-auto">
                You deserve a home that's clean, fresh, and tidy. Keeping
                it that way can be a challenge, though. But don't fret. Let us
                help.
              </h3>
              <Link
                to="/services"
                className="btn bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium"
              >
                Explore More
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full bg-[url('https://i.ibb.co.com/FkLYkHk3/Benefits-of-Commercial-Electrical-Services-for-Businesses-scaled.webp')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 p-6 top-80">
              <h3 className="text-white text-lg mb-4 w-200 mx-auto">
                Our professional electricians can come to your Woodstock home and diagnosis any problem you may be having.
              </h3>
              <Link
                to="/services"
                className="btn bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium"
              >
                Explore More
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full bg-[url('https://i.ibb.co.com/cc648G9h/How-does-plumbing-work.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 p-6 top-75">
              <h3 className="text-white text-lg mb-4 w-200 mx-auto">
                Plumbing services are essential for maintaining the comfort and functionality of your home. From fixing a dripping faucet to installing a new water heater, professional plumbers are equipped to handle a wide range of issues.
              </h3>
              <Link
                to="/services"
                className="btn bg-linear-to-r from-blue-400 to-blue-700 hover:to-blue-900 text-white py-2 rounded-lg text-sm font-medium"
              >
                Explore More
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
