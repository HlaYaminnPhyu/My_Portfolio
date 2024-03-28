import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChartBar, FaBinoculars, FaBriefcase } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";
import arr from "../images/1.png";
import "aos/dist/aos.css";
import Aos from "aos";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const pagination = {
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const frMotion = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };
  return (
    <section className="my-10" id="services">
      <div className="mb-20">
        <div className="mb-20">
          <div className="text-center">
            <h1 className="text-5xl font-semibold mb-3 text-[#faad1b] uppercase">
              services
            </h1>
            <p className="text-[#dbd2c1] mb-3 px-5">
              Expert web development solutions tailored for you.
            </p>
            <div className="w-10 h-1 bg-portfolio-fill mx-auto"></div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 px-5 lg:px-10">
          <div data-aos="zoom-out-right" className="mt-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={frMotion}
              transition={{ duration: 1 }}
              className="w-[95%] lg:w-[93%] fade hover:border hover:border-[#faad1b] mb-10 rounded-lg mx-auto shadow-lg bg-[#344c36] p-2"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mt-5 mb-5">
                  <span className="ico-circle ">
                    {/* <i className="fa fa-briefcase text-[#B8B5C6]"></i> */}
                    <FaBriefcase />
                  </span>
                </div>
                <div className="">
                  <h1 className="text-2xl text-[#E6E2F0] mb-3">
                    Frontend DEVELOPMENT
                  </h1>
                  <p className="w-[90%] mb-3 mx-auto text-[#B8B5C6]">
                    "Expert in React.js, Js, Tailwind CSS, and Bootstrap for
                    standout frontend development services."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div data-aos="zoom-out-up" className=" mt-0 lg:-mt-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={frMotion}
              transition={{ duration: 1 }}
              className="w-[95%] lg:w-[93%] fade hover:border hover:border-[#faad1b] rounded-lg mx-auto shadow-lg mb-10 bg-[#344c36] p-2"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mt-5 mb-5">
                  <span className="ico-circle text-5xl">
                    <MdMiscellaneousServices />
                  </span>
                </div>

                <div className="">
                  <h1 className="text-2xl text-[#E6E2F0] mb-3">
                    Backend DEVELOPMENT
                  </h1>

                  <p className="w-[90%] mb-3 mx-auto text-center text-[#B8B5C6]">
                    "Specializing in backend development, I architect easy,
                    robust systems to power your digital ambitions."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div data-aos="zoom-out-left" className=" mt-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={frMotion}
              transition={{ duration: 1 }}
              className="w-[95%] lg:w-[93%] fade hover:border hover:border-[#faad1b] rounded-lg mx-auto shadow-lg mb-10 bg-[#344c36] p-2"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mt-5 mb-5">
                  <span className="ico-circle">
                    <FaChartBar className="" />
                  </span>
                </div>

                <div className="">
                  <h1 className="text-2xl text-[#E6E2F0] mb-3">
                    FullStack DEVELOPMENT
                  </h1>
                  <p className="w-[90%] mb-3 mx-auto text-[#B8B5C6]">
                    "From server to client, I've got your full-stack needs
                    covered with expert development services."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className="flex mt-10 lg:mt-[-70px] justify-center"
        >
          <div className=" flex">
            <img src={arr} className=" w-36 h-14 -mr-10" alt="" />
            <img src={arr} className=" w-36 h-14 scale-x-[-1]" alt="" />
          </div>
        </div>
        <section className=" mb-20 h-full mt-10 relative flex justify-center items-center">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper text-white"
          >
            <SwiperSlide className=" ">
              <div className=" flex justify-center items-center">
                <p className=" w-[500px] md:w-[600px] lg:w-[900px] text-xl text-center font-light leading-8">
                  "Building user-friendly websites with sleek designs to boost
                  your online presence and engage your audience effectively."
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className=" flex justify-center items-center">
                <p className=" w-[500px] md:w-[600px] lg:w-[900px] text-center text-xl font-light leading-8">
                  "I prioritize simplicity and functionality to deliver websites
                  that impress and drive results for your business."
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </section>
  );
};

export default Services;
