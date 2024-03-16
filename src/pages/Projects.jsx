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

import m1 from "../images/movie1.jpg";
import m2 from "../images/movie2.jpg";
import m3 from "../images/movie3.jpg";
import m4 from "../images/movie4.jpg";
import s1 from "../images/shop1.jpg";
import s2 from "../images/shop2.jpg";
import s3 from "../images/shop3.jpg";
import s5 from "../images/shop5.jpg";
import s6 from "../images/shop6.jpg";
import s7 from "../images/shop7.jpg";

import c1 from "../images/contact1.jpg";
import c2 from "../images/contact2.jpg";
import c4 from "../images/contact4.jpg";
import c6 from "../images/contact6.jpg";


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

          
          <div className=" mx-10">
            <div className=" flex flex-col md:flex-row lg:flex-row h-auto gap-10 mb-10 items-start justify-center">
              <div
    //            data-aos="fade-right"
    //            data-aos-offset="200"
    // data-aos-delay="50"
    // data-aos-duration="1000"
    // data-aos-easing="ease-in-out"
    // data-aos-mirror="true"
    // data-aos-once="false"
    // data-aos-anchor-placement="top-center" 
    className=" flex-initial w-full md:w-6/12 lg:w-6/12">
                <h2 
                data-aos="fade-right"
                data-aos-offset="200"
     data-aos-delay="50"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine"
     data-aos-mirror="true"
                  className=" text-3xl py-8"
                >
                  FlimFlick
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

             


              <div className="flex-initial w-full md:w-6/12 lg:w-6/12 rounded-lg">
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
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper text-white">
        <SwiperSlide className=" ">
        
          
        <img
              src={m1}
              className=""
              alt=""
            />
          
        </SwiperSlide>
        <SwiperSlide className="">
         
          <img
              src={m2}
              className=""
              alt=""
            />
          
        </SwiperSlide>
        <SwiperSlide className="">
         
          <img
              src={m3}
              className=""
              alt=""
            />
          
        </SwiperSlide>
        <SwiperSlide className="">
         
          <img
              src={m4}
              className=""
              alt=""
            />
          
        </SwiperSlide>
      </Swiper>
            
          </div>
          <div className=" px-4 py-6 flex justify-between items-center rounded-b bg-[#ffffff19] backdrop-blur-sm border-b-[rgba(255,255,255,0.5)] border-r-[rgba(255,255,255,0.5)] border-solid border-b border-r glassmorphic">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#f6f1e3] font-[500] mb-3 leading-5">
                Movie Website
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
            <div className="flex flex-col md:flex-row lg:flex-row h-auto gap-10 mb-10 items-start">
            <div className="flex-initial w-full md:w-6/12 lg:w-6/12 rounded-lg">
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
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper text-white">
        <SwiperSlide className=" ">
        
          
        <img
              src={s1}
              className=""
              alt=""
            />
          
        </SwiperSlide>
        <SwiperSlide className="">
         
          <img
              src={s2}
              className=""
              alt=""
            />
          
        </SwiperSlide>
        <SwiperSlide className="">
         
          <img
              src={s6}
              className=""
              alt=""
            />
          
        </SwiperSlide>
        <SwiperSlide className="">
         
          <img
              src={s5}
              className=""
              alt=""
            />
          
        </SwiperSlide>
      </Swiper>
            
          </div>
          <div className=" px-4 py-6 flex justify-between items-center rounded-b bg-[#ffffff19] backdrop-blur-sm border-b-[rgba(255,255,255,0.5)] border-r-[rgba(255,255,255,0.5)] border-solid border-b border-r glassmorphic">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#f6f1e3] font-[500] mb-3 leading-5">
                Premium Shopper
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
              <div
     className=" flex-initial w-full md:w-6/12 lg:w-6/12">
                <h2
                data-aos="fade-left"
                data-aos-offset="200"
     data-aos-delay="50"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine"
     data-aos-mirror="true" className=" text-3xl py-8">Premium Shopper (Bootstrap-Theme)</h2>
     <div data-aos="fade-left"
                data-aos-offset="200"
     data-aos-delay="100"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine"
     data-aos-mirror="true" className="">
      <p  className="">
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
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row h-auto gap-10 mb-10 items-start">
              <div className="flex-initial w-6/12 ">
                <h2
                data-aos="fade-right"
                data-aos-offset="200"
     data-aos-delay="50"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine"
     data-aos-mirror="true" className=" text-3xl py-8">Create Contact App</h2>
                <div data-aos="fade-right"
                data-aos-offset="200"
     data-aos-delay="100"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine"
     data-aos-mirror="true" className="">
      <p  className="">
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
              <div className="flex-initial w-full md:w-6/12 lg:w-6/12 rounded-lg">
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
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper text-white">
        <SwiperSlide className=" ">
        
          
        <img
              src={c1}
              className=""
              alt=""
            />
          
        </SwiperSlide>
        <SwiperSlide className="">
         
          <img
              src={c2}
              className=""
              alt=""
            />
          
        </SwiperSlide>
        <SwiperSlide className="">
         
          <img
              src={c4}
              className=""
              alt=""
            />
          
        </SwiperSlide>
        <SwiperSlide className="">
         
          <img
              src={c6}
              className=""
              alt=""
            />
          
        </SwiperSlide>
      </Swiper>
            
          </div>
          <div className=" px-4 py-6 flex justify-between items-center rounded-b bg-[#ffffff19] backdrop-blur-sm border-b-[rgba(255,255,255,0.5)] border-r-[rgba(255,255,255,0.5)] border-solid border-b border-r glassmorphic">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#f6f1e3] font-[500] mb-3 leading-5">
                Create Contact App
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
            <div className="flex flex-col md:flex-row lg:flex-row h-auto gap-10 mb-10 items-start">
            <div className="flex-initial w-full md:w-6/12 lg:w-6/12 rounded-lg">
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
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper text-white">
        <SwiperSlide className=" ">
        
          
        <img
              src={m1}
              className=""
              alt=""
            />
          
        </SwiperSlide>
        <SwiperSlide className="">
         
          <img
              src={m2}
              className=""
              alt=""
            />
          
        </SwiperSlide>
        <SwiperSlide className="">
         
          <img
              src={m3}
              className=""
              alt=""
            />
          
        </SwiperSlide>
        <SwiperSlide className="">
         
          <img
              src={m4}
              className=""
              alt=""
            />
          
        </SwiperSlide>
      </Swiper>
            
          </div>
          <div className=" px-4 py-6 flex justify-between items-center rounded-b bg-[#ffffff19] backdrop-blur-sm border-b-[rgba(255,255,255,0.5)] border-r-[rgba(255,255,255,0.5)] border-solid border-b border-r glassmorphic">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#f6f1e3] font-[500] mb-3 leading-5">
                Admin Dashboard
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
              <div
     className=" flex-initial w-full md:w-6/12 lg:w-6/12">
                
                <h2 data-aos="fade-left"
                data-aos-offset="200"
     data-aos-delay="50"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine"
     data-aos-mirror="true" className=" text-3xl py-8">Admin Dashboard</h2>
                <div data-aos="fade-left"
                data-aos-offset="200"
     data-aos-delay="100"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine"
     data-aos-mirror="true" className="">
      <p  className="">
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
            </div>
          </div>
        </div>
      </div>
      </section>
      
    </div>
  );
};

export default Projects;