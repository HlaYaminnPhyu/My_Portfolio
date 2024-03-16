import React, { useEffect } from "react";
import portfolio from "../images/portfolio_1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "animate.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import P from "../images/p.png";
import Aos from "aos";
// [#344c36] [#faad1b] #dbd2c1 #f6f1e3 #040707 #f1603c #fdae16 #f6efe1  #fdae16 #000000
const Projects = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
 
  return (
    <div id="projects" className=" h-full w-full text-white">
      <section className=" bg w-full" >
      <div className=' h-full w-full'></div>
      <div className=" flex justify-center items-center hero-overlay">
        <div className=" w-full mx-16">
          <div className=" z-20 my-20 text-center">
            <span className=" text-[16px] tracking-[8px] font-medium mb-[10px] text-[#faad1b]">
              MY Experience resume
            </span>
            <h2 className=" text-[80px] font-[Italiana] text-white z-50">Work History</h2>
          </div>

          
          <div className="">
            <div className=" flex flex-col md:flex-row lg:flex-row h-auto gap-10 mb-16 items-start">
              <div
    //            data-aos="fade-right"
    //            data-aos-offset="200"
    // data-aos-delay="50"
    // data-aos-duration="1000"
    // data-aos-easing="ease-in-out"
    // data-aos-mirror="true"
    // data-aos-once="false"
    // data-aos-anchor-placement="top-center" 
    className=" flex-initial w-6/12 ">
                <h2 
                data-aos="fade-right"
                data-aos-offset="200"
     data-aos-delay="50"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine"
     data-aos-mirror="true"
                  className=" text-3xl py-8"
                >
                  Admin Dashboard
                </h2>
                <p data-aos="fade-right"
                data-aos-offset="200"
     data-aos-delay="100"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine"
     data-aos-mirror="true" className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione ea in amet explicabo sit nostrum illum magni? Adipisci
                  laborum molestias animi unde saepe? A pariatur quasi minima
                  quis hic. Doloremque?
                </p>
                {/* <button className="px-7 mt-10 relative select-none text-green bg-[#ffffff19] backdrop-blur-sm border-r-[rgba(255,255,255,0.5)] border-b-[rgba(255,255,255,0.5)] border-solid gla border-b border-r rounded-lg p-2 cursor-pointer">
                  See Detail
                </button> */}
                <div data-aos="fade-right"
                data-aos-offset="200"
     data-aos-delay="100"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine"
     data-aos-mirror="true"
    //  data-aos-anchor-placement="top-top"
     className=" mt-10">
                <Link className=" px-10 py-2 border-2 border-[#fdae16]" to={"projects"}>View All</Link>
                </div>
              </div>

             


              <div className="flex-initial w-6/12 rounded-lg">
              {/* <div className="card ">
          <div className=" overflow-hidden h-[260px] rounded-t">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg"
              className=""
              alt=""
            />
          </div>
          <div className=" px-4 py-6 flex justify-between items-center rounded-b bg-[#ffffff19] backdrop-blur-sm border-b-[rgba(255,255,255,0.5)] border-r-[rgba(255,255,255,0.5)] border-solid border-b border-r glassmorphic">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#f6f1e3] font-[500] mb-3 leading-5">
                Lorem impsum dolor
              </h1>
              <div className=" text-[0.8rem] text-[#fdae16] font-normal">
                <span className=" ">Web Design</span> /{" "}
                <span className="">18 Sep. 2018</span>
              </div>
            </div>
            <span className=" text-[2.5rem]">
              <BsPlusCircle />
            </span>
          </div>
        </div> */}
        <div className=" ">
          <div className=" overflow-hidden h-[260px] rounded-t">

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
        
          
        <img
              src={P}
              className=""
              alt=""
            />
          
        </SwiperSlide>
        <SwiperSlide className="">
         
          <img
              src={P}
              className=""
              alt=""
            />
          
        </SwiperSlide>
      </Swiper>
            
          </div>
          <div className=" px-4 py-6 flex justify-between items-center rounded-b bg-[#ffffff19] backdrop-blur-sm border-b-[rgba(255,255,255,0.5)] border-r-[rgba(255,255,255,0.5)] border-solid border-b border-r glassmorphic">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#f6f1e3] font-[500] mb-3 leading-5">
                Lorem impsum dolor
              </h1>
              <div className=" text-[0.8rem] text-[#fdae16] font-normal">
                <span className=" ">Web Design</span> /{" "}
                <span className="">18 Sep. 2018</span>
              </div>
            </div>
            <span className=" text-[2.5rem]">
              <BsPlusCircle />
            </span>
          </div>
        </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row h-auto gap-10 mb-10 items-center">
            <div className="flex-initial w-full md:w-6/12 lg:w-6/12 rounded-lg">
              <div className="card ">
          <div className=" overflow-hidden h-[260px] rounded-t">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg"
              className=""
              alt=""
            />
          </div>
          <div className=" px-4 py-6 flex justify-between items-center rounded-b bg-[#ffffff19] backdrop-blur-sm border-b-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-b border-l glassmorphic">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#f6f1e3] font-[500] mb-3 leading-5">
                Lorem impsum dolor
              </h1>
              <div className=" text-[0.8rem] text-[#fdae16] font-normal">
                <span className=" ">Web Design</span> /{" "}
                <span className="">18 Sep. 2018</span>
              </div>
            </div>
            <span className=" text-[2.5rem]">
              <BsPlusCircle />
            </span>
          </div>
        </div>
              </div>
              <div data-aos="fade-left"
     data-aos-delay="50"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine"
     data-aos-mirror="true"
     className=" flex-initial w-full md:w-6/12 lg:w-6/12">
                <h2 className=" text-3xl py-8">Admin Dashboard</h2>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione ea in amet explicabo sit nostrum illum magni? Adipisci
                  laborum molestias animi unde saepe? A pariatur quasi minima
                  quis hic. Doloremque?
                </p>
                <div className=" mt-10">
                <Link className=" px-10 py-2 border-2 border-[#fdae16]" to={"projects"}>View All</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row h-auto gap-10 mb-10 items-center">
              <div data-aos="fade-right"
     data-aos-offset="200"
     data-aos-delay="50"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine"
     data-aos-mirror="true"  className="flex-initial w-6/12 ">
                <h2 className=" text-3xl py-8">Admin Dashboard</h2>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione ea in amet explicabo sit nostrum illum magni? Adipisci
                  laborum molestias animi unde saepe? A pariatur quasi minima
                  quis hic. Doloremque?
                </p>
                {/* <button className="px-7 mt-10 relative select-none text-green bg-[#ffffff19] backdrop-blur-sm border-r-[rgba(255,255,255,0.5)] border-b-[rgba(255,255,255,0.5)] border-solid gla border-b border-r rounded-lg p-2 cursor-pointer">
                  See Detail
                </button> */}
                <div className=" mt-10">
                <Link className=" px-10 py-2 border-2 border-[#fdae16]" to={"projects"}>View All</Link>
                </div>
              </div>
              <div className="flex-initial w-6/12 rounded-lg">
              <div className="card">
          <div className=" overflow-hidden h-[260px] rounded-t">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg"
              className=""
              alt=""
            />
          </div>
          <div className=" px-4 py-6 flex justify-between items-center rounded-b bg-[#ffffff19] backdrop-blur-sm border-b-[rgba(255,255,255,0.5)] border-r-[rgba(255,255,255,0.5)] border-solid border-b border-r glassmorphic">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#f6f1e3] font-[500] mb-3 leading-5">
                Lorem impsum dolor
              </h1>
              <div className=" text-[0.8rem] text-[#fdae16] font-normal">
                <span className=" ">Web Design</span> /{" "}
                <span className="">18 Sep. 2018</span>
              </div>
            </div>
            <span className=" text-[2.5rem]">
              <BsPlusCircle />
            </span>
          </div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
    </div>
  );
};

export default Projects;