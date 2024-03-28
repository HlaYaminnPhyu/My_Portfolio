import React from "react";
import bac from "../images/wa.mp4";
import TypingEffect from "../components/TypingEffect";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div id="home" className="relative h-screen md:h-[100vh]">
      <video
        className="absolute opacity-60 top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={bac} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col gap-28 items-center justify-center md:flex-row md:items-center md:justify-between h-full">
        <div className=" flex flex-col w-full md:w-1/2 px-6 text-white ">
          <h1 className=" text-7xl animate__animated animate__fadeInLeft font-bold">
            Hello
          </h1>
          <p className="mt-4 text-base animate__animated animate__slow animate__fadeInLeft">
            Transforming ideas into stunning websites and applications
          </p>
        </div>

        <div className=" w-full md:w-1/2 flex flex-row items-end px-4 text-white">
          <div className=" flex items-center gap-2 md:gap-4">
            <div className=" bg-[#fdae16] h-44 w-2"></div>
            <div className=" w-[370px] flex flex-col">
              <div className=" animate__animated animate__fadeInRight">
                <h1 className=" text-4xl md:text-5xl font-semibold mb-3 lg:text-[2.5rem]">
                  Hla Yaminn Phyu
                </h1>
                <div className=" text-xl md:text-2xl">
                  <TypingEffect className="" />
                </div>
              </div>
            </div>

            <div className="hidden md:flex md:flex-col md:ml-20 gap-20 text-base text-[#fdae16]">
              <Link className=" rotate-90">LinkedIn</Link>
              <Link className=" rotate-90">Facebook</Link>
              <Link className=" rotate-90">Github</Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" divide-x divide-solid divide-gray-600 flex justify-center mx-auto gl h-28 -mt-28 md:-mt-14 relative z-10 w-full md:h-14">
        <div className=" w-1/2 md:w-1/4 lg:w-1/4 hidden hover:bg-[#3d5a22] md:flex text-[#fdae16] justify-center items-center">
          Electronic Engineering
        </div>

        <div className=" w-1/2 md:w-1/4 lg:w-1/4 hidden text-[#fdae16] hover:bg-[#3d5a22] md:flex justify-center items-center">
          Joined MMSIT
        </div>
        <div className=" w-1/2 md:w-1/4 lg:w-1/4 hover:bg-[#3d5a22] text-[#fdae16] flex justify-center items-center">
          Web Developer
        </div>
        <div className=" w-1/2 md:w-1/4 lg:w-1/4 hover:bg-[#3d5a22] text-[#fdae16] flex justify-center items-center text-center">
          Diploma In Webdevelopment
        </div>
      </div>
    </div>
  );
};

export default Hero;
