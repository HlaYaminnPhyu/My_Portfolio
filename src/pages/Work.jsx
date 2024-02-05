// import React from "react";
// import portfolio from "../images/portfolio_1.png";
// import "animate.css";

// const Work = () => {
//   return (
//     <div id="work" className=" h-app bg relative">
//       <div className=' absolute h-full w-full hero-overlay'></div>
//       <div className=" flex justify-center items-center ">
//         <div className=" w-full mx-10">
//           <div className=" my-20 text-center">
//             <span className=" z-20 text-[16px] tracking-[8px] font-medium mb-[10px] text-white ">
//               MY Experience resume
//             </span>
//             <h2 className=" text-[80px] font-[Italiana]">Work History</h2>
//           </div>
//           <div className="">
//             <div className="flex h-auto gap-7 mb-10">
//               <div className="flex-initial w-5/12 text-left">
//                 <h2
//                   className=" text-3xl py-8
// "
//                 >
//                   Admin Dashboard
//                 </h2>
//                 <p className="">
//                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                   Ratione ea in amet explicabo sit nostrum illum magni? Adipisci
//                   laborum molestias animi unde saepe? A pariatur quasi minima
//                   quis hic. Doloremque?
//                 </p>
//                 <button className=" px-7 mt-10 relative select-none regAni text-red-400 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg p-2 cursor-pointer">
//                   See Detail
//                 </button>

//                 {/* <div className="container">

//   <a href="#" className="button type--A">
//     <div className="button__line"></div>
//     <div className="button__line"></div>
//     <span className="button__text">ENTRY</span>
//     <div className="button__drow1"></div>
//     <div className="button__drow2"></div>
//   </a>

// </div> */}
//               </div>
//               <div className="flex-initial w-7/12 p-12 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
//                 <img src={portfolio} className=" w-full h-[300px]" alt="" />
//               </div>
//             </div>
//             <div className="flex h-auto gap-7 mb-10">
//               <div className=" flex-initial w-7/12 p-12 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
//                 <img src={portfolio} className=" w-full h-[300px]" alt="" />
//               </div>
//               <div className=" flex-initial w-5/12 text-justify">
//                 <h2 className=" text-3xl py-8">Admin Dashboard</h2>
//                 <p className="">
//                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                   Ratione ea in amet explicabo sit nostrum illum magni? Adipisci
//                   laborum molestias animi unde saepe? A pariatur quasi minima
//                   quis hic. Doloremque?
//                 </p>
//                 <button className="px-7 mt-10 relative select-none regAni text-red-400 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg p-2 cursor-pointer">
//                   See Detail
//                 </button>
//               </div>
//             </div>
//             {/* <div className="flex h-auto gap-7 mb-10">
//               <div className="flex-initial w-5/12 ">
//                 <h2 className=" text-3xl py-8 text-justify">Admin Dashboard</h2>
//                 <p className="">
//                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                   Ratione ea in amet explicabo sit nostrum illum magni? Adipisci
//                   laborum molestias animi unde saepe? A pariatur quasi minima
//                   quis hic. Doloremque?
//                 </p>
//                 <button className="px-7 mt-10 relative select-none regAni text-red-400 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg p-2 cursor-pointer">
//                   See Detail
//                 </button>
//               </div>
//               <div className="flex-initial w-7/12 p-12 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
//                 <img src={portfolio} className=" w-full h-[300px]" alt="" />
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsPlusCircle } from "react-icons/bs";
// [#344c36] [#faad1b] #dbd2c1 #f6f1e3 #040707 #f1603c #fdae16 #f6efe1  #fdae16 #000000
const Work = () => {
  return (
    <div id="work" className="bg-[#000] h-app">
      <section className=" flex flex-col justify-center items-center mb-16 sm:p-5 ">
        <h1 className=" text-3xl lg:text-5xl font-bold text-[#fdae16] uppercase mb-3">
          Portfolio
        </h1>
        <p className=" text-[#dbd2c1] mb-4 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className=" w-[40px] h-[5px] bg-[#faad1b]"></div>
      </section>
      <section className=" container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
        <div className="">
          <div className=" card mt-20 bg-[#232323]">
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
            <span className="text-portfolio-base text-[2.5rem]">
              <BsPlusCircle />
            </span>
          </div>
        </div>
        </div>
        <div className="mb-10 card bg-[#232323]">
          <div className=" overflow-hidden">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-2.jpg"
              className=" "
              alt=""
            />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#fdae16] font-[500] mb-3 leading-5">
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
        <div className=" card mt-20 bg-[#232323]">
          <div className=" overflow-hidden">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-3.jpg"
              className=""
              alt=""
            />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#fdae16] font-[500] mb-3 leading-5">
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
        
        {/* <div className=" card bg-[#000]">
          <div className=" overflow-hidden">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-4.jpg"
              className=""
              alt=""
            />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#fdae16] font-[500] mb-3 leading-5">
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
        <div className=" card">
          <div className=" overflow-hidden">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-5.jpg"
              className=""
              alt=""
            />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#fdae16] font-[500] mb-3 leading-5">
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
        <div className=" card">
          <div className=" overflow-hidden">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-6.jpg"
              className=" "
              alt=""
            />
          </div>
          <div className=" px-4 pt-8 pb-6 flex justify-between items-center">
            <div className="">
              <h1 className=" text-[1.2rem] text-[#fdae16] font-[500] mb-3 leading-5">
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
        </div> */}
      </section>
      <div className="">
          <button className=" px-5 py-2">See All</button>
        </div>
      <section className="h-screen md:h-[800px] lg:h-screen relative p-[1rem] md:p-[1rem] lg:p-[8rem] bg-cover bg-no-repeat bg-center flex justify-center items-center">
      
        {/* <div className=" absolute top-0 left-0 bg-portfolio-fill p-0 h-[100%] w-[100%] opacity-[0.7]"></div> */}
        
      <Swiper spaceBetween={30}
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
        <div className=" flex flex-col justify-center items-center gap-5">
          
            
            <h1 className=" uppercase text-[1.4rem] font-semibold tracking-wide">Xavi alonso</h1>
            <p className=" w-[350px] md:w-[600px] lg:w-[600px] text-xl text-center font-light leading-8">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                      </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" flex flex-col justify-center items-center gap-5">
            
            <h1 className=" uppercase text-[1.4rem] font-semibold tracking-wide">Marta socrate</h1>
            <p className=" w-[350px] md:w-[600px] lg:w-[600px] text-center text-xl font-light leading-8">
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
