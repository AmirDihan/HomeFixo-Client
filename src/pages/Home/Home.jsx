import React from "react";
import Slider from "../../components/Slider";
import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./../../components/Navbar/ServicesCard";
import { toast } from "react-toastify";
import Faq from "../../components/Faq";

const Home = () => {
  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(true);
  const limit = 6;
  useEffect(() => {
    fetch(`https://home-fixo-server.vercel.app/services?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoader(false);
      })
      .catch((error) => {
        toast.error(error);
        setLoader(false);
      });
  }, []);
  // console.log(services);
  return (
    <div>
      <Slider></Slider>
      <div className="mt-10">
        <h3
          className="text-5xl font-bold mb-5 bg-linear-to-r from-blue-400 to-blue-900 
          bg-clip-text text-transparent"
        >
          Popular Services
        </h3>
        {loader ? (
          <div className="flex justify-center items-center min-h-75">
            <span className="loading loading-spinner loading-lg text-blue-600"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {services.map((service, index) => (
              <ServicesCard key={index} service={service}></ServicesCard>
            ))}
          </div>
        )}
      </div>
      <section className="py-5 mt-10">
        <div className="container">
          <div className="row justify-content-center text-center mb-2 mb-lg-4">
            <div className="col-12 col-lg-8 col-xxl-7 text-center mx-auto">
              <h2
                className="display-5 fw-bold text-start text-5xl font-bold mb-5 bg-linear-to-r from-blue-400 to-blue-900 
          bg-clip-text text-transparent"
              >
                Our Testimonials
              </h2>
              <p className="lead mt-5 text-3xl font-semibold text-start text-gray-600">
                Don't take our word for it! <br /> Hear it from our clients.
              </p>
            </div>
          </div>
          <div className="row g-5 py-4 justify-content-center">
            <div className="col-lg-8 flex flex-col md:flex-row gap-5">
              <div className="d-flex align-items-start mb-4 bg-base-200 rounded-xl p-4">
                <img
                  alt=""
                  className="w-25 h-25 rounded-full me-3"
                  src="https://st4.depositphotos.com/3433891/27213/i/450/depositphotos_272138564-stock-photo-young-handsome-man-bricks-wall.jpg"
                />
                <div className="bg-light p-3 p-md-4">
                  <div className="mb-1 text-blue-600">
                    <svg
                      fill="currentColor"
                      height="32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                    </svg>
                  </div>
                  <p className="lead">
                    I booked a home cleaning service through this platform and the experience was absolutely smooth. The service provider arrived on time, did a thorough job, and left my home spotless. The booking process was simple and transparent, which I really appreciated.
                  </p>
                  <div className="text-end pt-2">
                    <h5 className="fw-bold">Sajib Ahmed</h5>
                    <div className="text-muted">Marketing Executive</div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-start mb-4 bg-base-200 rounded-xl p-4">
                <img
                  alt=""
                  className="w-25 h-25 rounded-full me-3"
                  src="https://media.istockphoto.com/id/1187815798/photo/i-will-be-successful.jpg?s=170667a&w=0&k=20&c=YFHcxrh9qK_zESl8K304NGQruH3nYSRgWXfR5cIPsg8="
                />
                <div className="bg-light p-3 p-md-4">
                  <div className="mb-1 text-blue-600">
                    <svg
                      fill="currentColor"
                      height="32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                    </svg>
                  </div>
                  <p className="lead">
                    Finding a reliable electrician used to be stressful, but this website made it effortless. The technician was highly skilled and fixed the issue quickly. I was impressed by the professionalism and clear pricing. I’ll definitely use this service again.
                  </p>
                  <div className="text-end pt-2">
                    <h5 className="fw-bold">Tanvir Hossain</h5>
                    <div className="text-muted">Operations Manager</div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-start mb-4 bg-base-200 rounded-xl p-4">
                <img
                  alt=""
                  className="w-25 h-25 rounded-full me-3"
                  src="https://img.freepik.com/free-photo/close-up-portrait-beautiful-young-woman-with-red-long-hair-show-thumb-up-smiling-pleased-looking-logo-promo-text-aside-standing-white-background_176420-45606.jpg?semt=ais_hybrid&w=740&q=80"
                />
                <div className="bg-light p-3 p-md-4">
                  <div className="mb-1 text-blue-600">
                    <svg
                      fill="currentColor"
                      height="32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                    </svg>
                  </div>
                  <p className="lead">
                    This platform has been a game changer for managing home services. From plumbing to electrical work, every service I've booked has been top-notch. The providers are trustworthy, and customer support is very responsive.
                  </p>
                  <div className="text-end pt-2">
                    <h5 className="fw-bold">Nusrat Jahan</h5>
                    <div className="text-muted">Small Business Owner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full">
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
