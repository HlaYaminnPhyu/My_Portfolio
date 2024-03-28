import React, { useState } from "react";
import myImg from "../images/my2.jpg";
import cv from "../images/cv.pdf";

import "aos/dist/aos.css";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const About = () => {


  return (
    <div id="about" className=" min-h-full bg-[#1f1f1f]">
      <div className="bg-[#232323] flex flex-col md:flex-col lg:flex-row items-center my-20 py-10 md:justify-around">
        <div className="flex-initial">
        <div className="relative flex justify-center items-center">
          <div className="">
          {/* <div className=" mx-auto outline-[#fdae16] outline outline-[5px] w-[279px] h-[343px]"></div> */}
          {/* <div className=" mx-auto border-[#fdae16] border-[5px] w-[279px] h-[343px]"></div> */}
          <div data-aos="flip-right" className=" mx-auto border-[#fdae16] border-[5px] w-[295.2px] h-[358px]"></div>


          {/* <img
            src={myImg}
            className=" bottom-5 right-5 absolute w-[279px] h-[343px]"
            // className=" bottom-5 right-[130px] md:bottom-5 md:right-5 absolute w-[279px] h-[343px]"
            alt=""
          /> */}
          <img
         
            src={myImg}
            className=" mx-auto -translate-x-5 -translate-y-[380px] md:-translate-x-5 md:-translate-y-[380px] w-[295.2px] h-[358px] absolute"
            // className=" mx-auto w-[257.6px] h-[273.4px] absolute"

            alt=""
          />
          </div>
        </div>
        </div>
        <div className="flex-initial mt-8 lg:mt-0 w-full md:w-full lg:w-1/2 p-4">
        <div className=" ">
        <div className=" px-2">
          <p className=" text-4xl font-semibold mb-10">
            Hla Yaminn Phyu - Aspiring Web Developer
          </p>
          <p className=" text-xl text-[#B8B5C6] tracking-wide font-light">
            Greetings! I'm Hla Yaminn Phyu, an aspiring web developer on a
            journey of constant learning and growth.
          </p>
          <p className=" text-xl text-[#B8B5C6] tracking-wide font-light py-4">
            I am immersing myself in both frontend and backend technologies. I'm
            weaving together HTML, CSS, and JavaScript and user-friendly
            interfaces.
          </p>
          <p className=" text-xl text-[#B8B5C6] tracking-wide font-light">
            Join me on my journey as I evolve and contribute to the dynamic
            realm of web development.
          </p>
          <div className=" flex mt-7 justify-center md:justify-between items-center">
            <div className="flex gap-8 md:gap-3 cursor-pointer">
              <span className="flex justify-center items-center border-[3px] border-[#fdae16] hover:bg-[#fdae16] hover:border-[#f5d69b] w-12 h-12 rounded-full transition-all duration-300">
              <Link to={`https://github.com/HlaYaminnPhyu`}><FaGithub className="text-xl block" /></Link>
              </span>
              <span className="flex justify-center items-center border-[3px] border-[#fdae16] hover:bg-[#fdae16] hover:border-[#f5d69b] hover:text-white w-12 h-12 rounded-full transition-all duration-300">
                <Link to={`https://www.linkedin.com/in/hla-yaminn-phyu-512362255`}><FaLinkedinIn className="text-xl block" /></Link>
              </span>
              
              <span className="flex justify-center items-center border-[3px] border-[#fdae16] hover:bg-[#fdae16] hover:border-[#f5d69b] hover:text-white w-12 h-12 rounded-full transition-all duration-300">
              
              <Link to={`https://www.facebook.com/profile.php?id=61552310314731&mibextid=ZbWKwL`}><FaFacebook className="text-xl block" /></Link>
              </span>
              <span className="flex justify-center items-center border-[3px] border-[#fdae16] hover:bg-[#fdae16] hover:border-[#f5d69b] hover:text-white w-12 h-12 rounded-full transition-all duration-300">
              <Link to={`https://www.instagram.com/hlayaminnphyu?igsh=aDEyZ2Fidm44OHR3`}><FaInstagram className="text-xl block " /></Link>
            
              </span>
            </div>
            <div className="">
              <Link to={cv} className="hidden md:inline px-6 py-2 rounded outline outline-[#fdae16] hover:bg-[#fdae16] hover:outline-white" download>
                Download My CV
              </Link>


          
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
