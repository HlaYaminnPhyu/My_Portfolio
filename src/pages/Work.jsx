import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-scroll";
import Navbar from "../components/Navbar";
const Work = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div id="work" className="bg-[#000] h-app">
      <section className=" flex flex-col justify-center items-center mb-4 sm:p-5 ">
        <h1 className=" text-3xl lg:text-5xl font-bold text-[#fdae16] uppercase mb-3">
          Portfolio
        </h1>
        <p className=" text-[#dbd2c1] mb-4 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className=" w-[40px] h-[5px] bg-[#faad1b]"></div>
      </section>
      <section className=" container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
        
          <div className=" card md:mt-20 bg-[#232323]">
          <div className=" overflow-hidden">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg"
              className=" "
              alt=""
            />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#f6f1e3] font-[500] mb-3 leading-5">
                Lorem impsum dolor
              </h1>
              <div className=" text-[0.8rem] text-[#fdae16] font-normal">
                <span className=" text-portfolio-base">Web Design</span> /{" "}
                <span className="">18 Sep. 2018</span>
              </div>
            </div>
            <span className=" text-[2.5rem]">
              <BsPlusCircle />
            </span>
          </div>
        </div>
        
        <div className=" card md:mb-20 bg-[#232323]">
          <div className=" overflow-hidden">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-2.jpg"
              className=" "
              alt=""
            />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-[1.2rem] text-white font-[500] mb-3 leading-5">
                Lorem impsum dolor
              </h1>
              <div className=" text-[0.8rem] text-[#fdae16] font-normal">
                <span className=" text-portfolio-base">Web Design</span> /{" "}
                <span className="">18 Sep. 2018</span>
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <BsPlusCircle />
            </span>
          </div>
        </div>
        <div className=" card md:mt-20 bg-[#232323]">
          <div className=" overflow-hidden">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-3.jpg"
              className=""
              alt=""
            />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-[1.2rem] text-white font-[500] mb-3 leading-5">
                Lorem impsum dolor
              </h1>
              <div className=" text-[0.8rem] text-[#fdae16] font-normal">
                <span className=" text-portfolio-base">Web Design</span> /{" "}
                <span className="">18 Sep. 2018</span>
              </div>
            </div>
            <span className="text-portfolio-base text-[2.5rem]">
              <BsPlusCircle />
            </span>
          </div>
        </div>
        
      </section>
      <div className=" flex mt-10 md:mt-[-40px] justify-center">
          <Link className=" px-10 py-2 border-2 border-[#fdae16]" to={"projects"}>View All</Link>
         
        </div>
      <section className=" mb-20 md:h-[800px] lg:h-full mt-12 relative flex justify-center items-center">
      
      <Swiper 
      pagination={pagination}
      
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper text-white">
        <SwiperSlide className=" ">
        <div className=" flex justify-center items-center">
          
            <p className=" w-[500px] md:w-[600px] lg:w-[900px] text-xl text-center font-light leading-8">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                      </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" flex justify-center items-center">
            <p className=" w-[500px] md:w-[600px] lg:w-[900px] text-center text-xl font-light leading-8">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                      </p>
          </div>
        </SwiperSlide>
      </Swiper>
      </section>
    </div>
  );
};

export default Work;
