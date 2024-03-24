import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {FaChartBar,FaBinoculars,FaBriefcase} from "react-icons/fa"
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
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  const frMotion = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };
  return (
    <section className="my-10" id="services">
    <div className="mb-20">
      {/* Header */}
      <div className="mb-20">
        <div className="text-center">
          <h1 className="text-5xl font-semibold mb-3 text-[#faad1b] uppercase">services</h1>
          <p className="text-[#B8B5C6] mb-3 px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="w-10 h-1 bg-portfolio-fill mx-auto"></div>
        </div>
      </div>

      {/* Service cards */}
      <div className="md:grid md:grid-cols-3 px-5 lg:px-10">
        {/* md:grid-rows-2 */}
        {/* Web design */}
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
              <h1 className="text-2xl text-[#E6E2F0] mb-3">WEB DEVELOPMENT</h1>
              <p className="w-[90%] mb-3 mx-auto text-[#B8B5C6]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                hic commodi laboriosam fugiat magnam officia
              </p>
            </div>
          </div>
        </motion.div>
        </div>

        

        {/* Web developmet */}
        <div data-aos="zoom-out-up" className=" mt-0 md:-mt-10 lg:-mt-10">
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
                {/* <i className="fa fa-rectangle-list text-[#E6E2F0]"></i> */}
                <FaBinoculars />
              </span>
            </div>

            <div className="">
              <h1 className="text-2xl text-[#E6E2F0] mb-3">WEB DEVELOPMENT</h1>
              <p className="w-[90%] mb-3 mx-auto text-[#B8B5C6]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                hic commodi laboriosam fugiat magnam officia
              </p>
            </div>
          </div>
        </motion.div>
        </div>
        
        {/* Photography */}
        <div data-aos="zoom-out-left" className=' mt-10'>
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
                {/* <i className="fa fa-light fa-chart-simple text-black"></i> */}
                <FaChartBar className=""/>
              </span>
            </div>

            <div className="">
              <h1 className="text-2xl text-[#E6E2F0] mb-3">WEB DEVELOPMENT</h1>
              <p className="w-[90%] mb-3 mx-auto text-[#B8B5C6]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                hic commodi laboriosam fugiat magnam officia
              </p>
            </div>
          </div>
        </motion.div>
        </div>
        
        
        
        {/* <img src={arr} className=' w-24 ' alt="" />
        <img src={arr} className=' w-24 scale-x-[-1]' alt="" /> */}
     

      </div>
      <div data-aos="flip-left" className="flex mt-10 md:mt-[-40px] lg:mt-[-70px] justify-center">
        <div className=" flex">
        {/* <img className=' scale-x-[-1]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAuCAYAAABkgjQ+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG9SURBVHgB7ZjtbcIwEIYvUv+XTlB3gjIC3aAblA1gA+gE0Algk7BBRwhM0GxwvZPPqksdMB9SQ/I+0smOY13sN3eOHSIAAAAAAAAAAAC0B2YeiJXs0XIqNiTwgwgy5jSV3XPUd1QEE+QQK7ERnYOGKnUAE6rk42if8Sm+yd5AZUrffB7LHOacR5mdhgmnVQjNW40yG3vFeayyxGIfqusGx5/maHpLwnF++oXAGKf8FA3OtfOb2IiaqcW2Ubmz9tBWR9f+YUWxpX9A5jOXYpbZfS32Ho+1OOLcSaFr1KvYs9WvRVLIvfZdRv9f100vQuaic1iIucQ4lMGev5fg66BIiQepo6GZIy9caGsjsbABl+i3ob9ZU4tID1o5SaRDmICOvGjBnN3W+n3UHg/WUTvZikhPWrmaSJcSfV1c1BzqsbiPibaU+Jewpmhdao1I18YiOyWcLg0Tak47FWdDfYT9AXgm9pX4/Jd87nGlK7A/4FYNe6MR9Rnb+JYJcTSaptRnLLUWnGbJHTnQn40IMOHmdcdR3+H0j7fq0nXnjrpFnEa60/4QW8onvSbgsbVI/2SskFoAAAAAAAAA0C++ATJYg55nzWj6AAAAAElFTkSuQmCC" alt="" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAuCAYAAABkgjQ+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG9SURBVHgB7ZjtbcIwEIYvUv+XTlB3gjIC3aAblA1gA+gE0Algk7BBRwhM0GxwvZPPqksdMB9SQ/I+0smOY13sN3eOHSIAAAAAAAAAAAC0B2YeiJXs0XIqNiTwgwgy5jSV3XPUd1QEE+QQK7ERnYOGKnUAE6rk42if8Sm+yd5AZUrffB7LHOacR5mdhgmnVQjNW40yG3vFeayyxGIfqusGx5/maHpLwnF++oXAGKf8FA3OtfOb2IiaqcW2Ubmz9tBWR9f+YUWxpX9A5jOXYpbZfS32Ho+1OOLcSaFr1KvYs9WvRVLIvfZdRv9f100vQuaic1iIucQ4lMGev5fg66BIiQepo6GZIy9caGsjsbABl+i3ob9ZU4tID1o5SaRDmICOvGjBnN3W+n3UHg/WUTvZikhPWrmaSJcSfV1c1BzqsbiPibaU+Jewpmhdao1I18YiOyWcLg0Tak47FWdDfYT9AXgm9pX4/Jd87nGlK7A/4FYNe6MR9Rnb+JYJcTSaptRnLLUWnGbJHTnQn40IMOHmdcdR3+H0j7fq0nXnjrpFnEa60/4QW8onvSbgsbVI/2SskFoAAAAAAAAA0C++ATJYg55nzWj6AAAAAElFTkSuQmCC" alt="" /> */}
        <img src={arr} className=' w-36 h-14 -mr-10' alt="" />
        <img src={arr} className=' w-36 h-14 scale-x-[-1]' alt="" />
        </div>
        </div>
      <section className=" mb-20 md:h-[800px] lg:h-full mt-10 relative flex justify-center items-center">
      
        {/* <div className=" absolute top-0 left-0 bg-portfolio-fill p-0 h-[100%] w-[100%] opacity-[0.7]"></div> */}
        
        

      <Swiper 
      // pagination={pagination}
      // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
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
  </section>
  )
}

export default Services