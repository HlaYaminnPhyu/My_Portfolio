import React from "react";
import { motion } from "framer-motion";
import "animate.css";

const Home = () => {
  return (
    <section className=" h-app bg-black relative" id="home">
      <div className=" absolute h-full w-full"></div>
      

      <div className=" flex flex-col md:flex md:flex-row items-center justify-center h-full container mx-auto gap-3">
        <div className=" text-left mt-10 p-10">
          <h1 className=" text-[120px] mb-[30px] animate__animated animate__fadeInLeft">
            Hello
          </h1>
          <p className=" text-xl animate__slow animate__animated animate__slideInLeft">
            Award-winning product designer specialized in UX/UI,
          </p>
        </div>
     
        {/* <div className=" animate__animated animate__fadeInUp mt-20">
        <div className="cube-container">
<div id="cube">
  <figure className="face front"><img src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="" /></figure>
  <figure className="face back">2</figure>
  <figure className="face left">3</figure>
  <figure className="face right">4</figure>
  <figure className="face top">5</figure>
  <figure className="face bottom">6</figure>
</div>
</div>
        </div> */}

        {/* <div className=" animate__animated animate__fadeInUp mt-20"> */}
          {/* <iframe src="https://embed.lottiefiles.com/animation/85023" ></iframe> */}
          {/* <img
            src="https://unded-react.envalabdemos.com/static/media/vector.c5e85ba2f3b7759fa7a3.png"
            alt=""
          /> */}

{/* <div className="loader"></div>
          <div className="spinner">
    <div className="bubble-1"></div>
    <div className="bubble-2"></div>
  </div> */}
        {/* </div> */}


  


        <div className=" text-right mt-10 p-10">
          <h1 className=" text-[120px] mb-[30px] animate__animated animate__slideInRight">
            Hello
          </h1>
          <p className=" text-xl animate__slow animate__animated animate__slideInRight">
            Award-winning product designer specialized in UX/UI,
          </p>

          {/* <i>
            <img className=" w-20 h-20 animate-bounce"
              src="data:image/png;base64,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"
              alt=""
            />
          </i> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
