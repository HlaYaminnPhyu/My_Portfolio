import React from "react";
import myImg from "../images/myImage.jpg";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const About = () => {
  return (
    <div className=" min-h-full bg-[#1f1f1f]">
      <div className="bg-[#232323] flex items-center my-20 py-10 justify-around">
        <div className="relative">
          <div className="  outline-[#fdae16] outline outline-[5px] w-[350px] h-[350px]"></div>
          <img
            src={myImg}
            className=" bottom-5 right-5 absolute w-[350px] h-[350px]"
            alt=""
          />
        </div>
        <div className=" mt-12 md:mt-0 md:w-1/2">
          <p className=" text-3xl font-semibold  relative mb-10">
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
          <p className=" text-xl text-gray-400 tracking-wide font-light">
            Join me on my journey as I evolve and contribute to the dynamic
            realm of web development.
          </p>
          <div className=" flex mt-7 justify-between items-center">
            <div className="flex gap-3 cursor-pointer">
              <span className="flex justify-center items-center border-[3px] border-[#fdae16] hover:bg-[#fdae16] hover:border-[#f5d69b] hover:text-white w-12 h-12 rounded-full transition-all duration-300">
                <FaFacebook className="text-xl block" />
              </span>
              <span className="flex justify-center items-center border-[3px] border-[#fdae16] hover:bg-[#fdae16] hover:border-[#cde1f8] hover:text-white w-12 h-12 rounded-full transition-all duration-300">
                <FaInstagram className="text-xl block " />
              </span>
              <span className="flex justify-center items-center border-[3px] border-[#fdae16] hover:bg-[#fdae16] hover:border-[#cde1f8] hover:text-white w-12 h-12 rounded-full transition-all duration-300">
                <FaTwitter className="text-xl block" />
              </span>
              <span className="flex justify-center items-center border-[3px] border-[#fdae16] hover:bg-[#fdae16] hover:border-[#cde1f8] hover:text-white w-12 h-12 rounded-full transition-all duration-300">
                <FaLinkedinIn className="text-xl block" />
              </span>
            </div>
            <div className="">
              <button className=" px-6 py-2 rounded outline outline-[#fdae16]">
                Download My CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
