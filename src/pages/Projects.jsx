import React from "react";
import portfolio from "../images/portfolio_1.png";
import "animate.css";

const Projects = () => {
  return (
    <div id="projects" className=" h-app bg relative">
      <div className=' absolute h-full w-full hero-overlay'></div>
      <div className=" flex justify-center items-center ">
        <div className=" w-full mx-10">
          <div className=" my-20 text-center">
            <span className=" z-20 text-[16px] tracking-[8px] font-medium mb-[10px] text-white ">
              MY Experience resume
            </span>
            <h2 className=" text-[80px] font-[Italiana]">Work History</h2>
          </div>
          <div className="">
            <div className="flex h-auto gap-7 mb-10">
              <div className="flex-initial w-5/12 text-left">
                <h2
                  className=" text-3xl py-8
"
                >
                  Admin Dashboard
                </h2>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione ea in amet explicabo sit nostrum illum magni? Adipisci
                  laborum molestias animi unde saepe? A pariatur quasi minima
                  quis hic. Doloremque?
                </p>
                <button className=" px-7 mt-10 relative select-none regAni text-red-400 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg p-2 cursor-pointer">
                  See Detail
                </button>

                {/* <div className="container">

  <a href="#" className="button type--A">
    <div className="button__line"></div>
    <div className="button__line"></div>
    <span className="button__text">ENTRY</span>
    <div className="button__drow1"></div>
    <div className="button__drow2"></div>
  </a>

</div> */}
              </div>
              <div className="flex-initial w-7/12 p-12 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
                <img src={portfolio} className=" w-full h-[300px]" alt="" />
              </div>
            </div>
            <div className="flex h-auto gap-7 mb-10">
              <div className=" flex-initial w-7/12 p-12 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
                <img src={portfolio} className=" w-full h-[300px]" alt="" />
              </div>
              <div className=" flex-initial w-5/12 text-justify">
                <h2 className=" text-3xl py-8">Admin Dashboard</h2>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione ea in amet explicabo sit nostrum illum magni? Adipisci
                  laborum molestias animi unde saepe? A pariatur quasi minima
                  quis hic. Doloremque?
                </p>
                <button className="px-7 mt-10 relative select-none regAni text-red-400 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg p-2 cursor-pointer">
                  See Detail
                </button>
              </div>
            </div>
            <div className="flex h-auto gap-7 mb-10">
              <div className="flex-initial w-5/12 ">
                <h2 className=" text-3xl py-8 text-justify">Admin Dashboard</h2>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione ea in amet explicabo sit nostrum illum magni? Adipisci
                  laborum molestias animi unde saepe? A pariatur quasi minima
                  quis hic. Doloremque?
                </p>
                <button className="px-7 mt-10 relative select-none regAni text-red-400 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg p-2 cursor-pointer">
                  See Detail
                </button>
              </div>
              <div className="flex-initial w-7/12 p-12 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
                <img src={portfolio} className=" w-full h-[300px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;