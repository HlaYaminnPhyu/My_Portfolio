import React, { useEffect } from "react";
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
import m3 from "../images/m1.jpg";
import m4 from "../images/movie4.jpg";

import s7 from "../images/sh1.jpg";
import s8 from "../images/sh2.jpg";
import s9 from "../images/sh3.jpg";
import s10 from "../images/sh4.jpg";

import a1 from "../images/ad1.jpg";
import a2 from "../images/ad.jpg";
import a3 from "../images/ad3.jpg";
import a4 from "../images/ad9.jpg";

import c1 from "../images/contact1.jpg";
import c2 from "../images/contact2.jpg";
import c4 from "../images/contact4.jpg";
import c6 from "../images/contact6.jpg";

const Projects = () => {
  return (
    <div id="projects" className=" h-full w-full text-white">
      <section className=" bg w-full">
        <div className=" h-full w-full"></div>
        <div className=" flex justify-center items-center hero-overlay">
          <div className=" w-full mx-16">
            <div className=" z-20 my-14 text-center">
              <span className=" text-[16px] tracking-[8px] font-medium mb-[10px] text-[#faad1b]">
                MY Experience resume
              </span>
              <h2 className=" text-[60px] md:text-[80px] font-[Italiana] text-white z-50">
                Work History
              </h2>
            </div>

            <div className=" mx-10">
              <div className=" flex flex-col lg:flex-row h-auto gap-10 mb-10 items-start justify-center">
                <div className=" flex-initial w-full lg:w-6/12">
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
                  <p
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    data-aos-mirror="true"
                    className=""
                  >
                    "You can explore movies on my website, where you'll find
                    detailed information, trailers, popular picks, trends, IMDb
                    ratings, and categorization by genre. Dive into a vast
                    collection of films to discover your next favorite."
                  </p>

                  <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    data-aos-mirror="true"
                    className=" mt-10"
                  >
                    <Link
                      className=" px-10 py-2 border-2 border-[#fdae16] hover:bg-[#fdae16] hover:border-[#f5d69b]"
                      to={"https://flimflick.netlify.app/"}
                    >
                      See Detail
                    </Link>
                  </div>
                </div>

                <div className="flex-initial w-full lg:w-6/12 rounded-lg">

                  <div className=" ">
                    <div className=" overflow-hidden h-full lg:h-[260px] rounded-t">
                      <Swiper

                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}

                        modules={[Autoplay]}
                        className="mySwiper text-white"
                      >
                        <SwiperSlide className=" ">
                          <img src={m1} className="" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="">
                          <img src={m2} className="" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="">
                          <img src={m3} className="" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="">
                          <img src={m4} className="" alt="" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className=" px-4 py-4 md:py-6 flex justify-between items-center rounded-b bg-[#ffffff19] backdrop-blur-sm border-b-[rgba(255,255,255,0.5)] border-r-[rgba(255,255,255,0.5)] border-solid border-b border-r glassmorphic">
                      <div className="">
                        <h1 className=" text-base md:text-[1.2rem] text-[#f6f1e3] font-[500] mb-3 leading-5">
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
              <div className="flex flex-col-reverse lg:flex-row h-auto gap-10 mb-10 items-start">
                <div className="flex-initial w-full lg:w-6/12 rounded-lg">
                  <div className=" ">
                    <div className=" overflow-hidden h-full lg:h-[260px] rounded-t">
                      <Swiper
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper text-white"
                      >
                        <SwiperSlide className=" ">
                          <img src={s7} className="" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="">
                          <img src={s8} className="" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="">
                          <img src={s9} className="" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="">
                          <img src={s10} className="" alt="" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className=" px-4 py-4 md:py-6 flex justify-between items-center rounded-b bg-[#ffffff19] backdrop-blur-sm border-b-[rgba(255,255,255,0.5)] border-r-[rgba(255,255,255,0.5)] border-solid border-b border-r glassmorphic">
                      <div className="">
                        <h1 className=" text-base md:text-[1.2rem] text-[#f6f1e3] font-[500] mb-3 leading-5">
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
                <div className=" flex-initial w-full lg:w-6/12">
                  <h2
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    data-aos-mirror="true"
                    className=" text-3xl py-8"
                  >
                    Shopper (Bootstrap-Premium Theme)
                  </h2>
                  <div
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    data-aos-mirror="true"
                    className=""
                  >
                    <p className="">
                      "Discover the latest in fashion on my e-commerce website.
                      Explore a diverse selection of clothing items, from trendy
                      styles to timeless classics. Browse detailed descriptions,
                      customer reviews, and find the perfect outfit for any
                      occasion."
                    </p>
                    <div className=" mt-10">
                      <Link
                        className=" px-10 py-2 border-2 border-[#fdae16] hover:bg-[#fdae16] hover:border-[#f5d69b]"
                        to={
                          "https://65e2d241d2776b8002fb3cd8--stately-torte-2513e1.netlify.app/"
                        }
                      >
                        See Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row h-auto gap-10 mb-10 items-start">
                <div className="flex-initial w-full lg:w-6/12">
                  <h2
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    data-aos-mirror="true"
                    className=" text-3xl py-8"
                  >
                    Create Contact App
                  </h2>
                  <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    data-aos-mirror="true"
                    className=""
                  >
                    <p className="">
                      "Introducing Contact App, connect with api so go-easy for
                      contact management. With intuitive frontend and backend
                      integration, you can effortlessly login, register, and
                      manage your contacts. Connect with friends, edit details."
                    </p>
                    <div className=" mt-10">
                      <Link
                        className=" px-10 py-2 border-2 border-[#fdae16] hover:bg-[#fdae16] hover:border-[#f5d69b]"
                        to={
                          "https://github.com/HlaYaminnPhyu/Create_Contact.git"
                        }
                      >
                        See Detail
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-initial w-full lg:w-6/12 rounded-lg">
                  <div className=" ">
                    <div className=" overflow-hidden h-full lg:h-[260px] rounded-t">
                      <Swiper
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper text-white"
                      >
                        <SwiperSlide className=" ">
                          <img src={c1} className="" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="">
                          <img src={c2} className="" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="">
                          <img src={c4} className="" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="">
                          <img src={c6} className="" alt="" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className=" px-4 py-4 md:py-6 flex justify-between items-center rounded-b bg-[#ffffff19] backdrop-blur-sm border-b-[rgba(255,255,255,0.5)] border-r-[rgba(255,255,255,0.5)] border-solid border-b border-r glassmorphic">
                      <div className="">
                        <h1 className=" text-base md:text-[1.2rem] text-[#f6f1e3] font-[500] mb-3 leading-5">
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
              <div className="flex flex-col-reverse lg:flex-row h-auto gap-10 mb-10 items-start">
                <div className="flex-initial w-full lg:w-6/12 rounded-lg">
                  <div className=" ">
                    <div className=" overflow-hidden h-full lg:h-[260px] rounded-t">
                      <Swiper
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper text-white"
                      >
                        <SwiperSlide className=" ">
                          <img src={a1} className="" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="">
                          <img src={a2} className="" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="">
                          <img src={a3} className="" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="">
                          <img src={a4} className="" alt="" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className=" px-4 py-4 md:py-6 flex justify-between items-center rounded-b bg-[#ffffff19] backdrop-blur-sm border-b-[rgba(255,255,255,0.5)] border-r-[rgba(255,255,255,0.5)] border-solid border-b border-r glassmorphic">
                      <div className="">
                        <h1 className="mt-0 text-base md:text-[1.2rem] text-[#f6f1e3] font-[500] mb-3 leading-5">
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
                <div className=" flex-initial w-full lg:w-6/12">
                  <h2
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    data-aos-mirror="true"
                    className=" text-3xl py-8"
                  >
                    Admin Dashboard
                  </h2>
                  <div
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    data-aos-mirror="true"
                    className=""
                  >
                    <p className="">
                      "Experience my Admin Dashboard frontend, combining
                      intuitive navigation with dynamic charting capabilities.
                      Monitor data trends, track performance metrics, and
                      streamline management tasks with ease and efficiency."
                    </p>
                    <div className=" mt-10">
                      <Link
                        className=" px-10 py-2 border-2 border-[#fdae16] hover:bg-[#fdae16] hover:border-[#f5d69b]"
                        to={"https://github.com/HlaYaminnPhyu/Admin_dashboard"}
                      >
                        See Detail
                      </Link>
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
