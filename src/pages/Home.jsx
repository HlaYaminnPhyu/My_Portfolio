import React from 'react'
import bac from '../images/wa.mp4'
import TypingEffect from '../components/TypingEffect';
const Hero = () => {
	

  return (
	<div className="relative h-[100vh]">
      {/* Video Background */}
      <video
        className="absolute opacity-60 top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={bac} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      


	
      {/* Content Container */}

	  
      <div className="relative z-10 flex items-center justify-between h-full">
        {/* Left Section */}
        <div className=" hidden md:flex lg:flex flex-col w-1/2 px-6 text-white">
          <h1 className="text-7xl animate__animated animate__fadeInLeft font-bold">Hello</h1>
          <p className="mt-4 animate__animated animate__slow animate__fadeInLeft"> Transforming ideas into stunning websites and applications</p>
        </div>
        
        {/* Right Section */}
        <div className="w-1/2 flex flex-row items-end px-6 text-white">
		
		<div className=" flex items-center gap-4">
            <div className=" bg-[#fdae16] h-44 w-2"></div>
            {/* <div className=" flex flex-col animate__animated animate__fadeInRight">
   <div className=" ">
   <h1 className=' text-6xl font-semibold mb-3 lg:text-5xl'>Hla Yaminn Phyu</h1> 
        <TypingEffect className=""/>
   </div>
     
   </div> */}

           
         
                <div className=" flex flex-col">
                  <div className=" animate__animated animate__fadeInRight">
                    <h1 className=" text-6xl font-semibold mb-3 lg:text-5xl">
                      Hla Yamin Phyu
                    </h1>
                    <div className=" text-2xl">
					<TypingEffect className="" />
					</div>
                    
                  </div>
                </div>

                <div className=" flex flex-col ml-10 gap-20 text-base text-[#fdae16]">
                  <p className=" rotate-90">Facebook</p>
                  <p className=" rotate-90">Instagram</p>
                  <p className=" rotate-90">LinkedIn</p>
                </div>
                {/* <div className=" bg-white h-[2px] w-44 "></div> */}
           
            
          </div>
              </div>
			  
      </div>
	  <div className=" divide-x divide-solid divide-gray-600 flex justify-center mx-auto gl -mt-28 relative z-10 w-full h-28">
		<div className=' w-1/2 md:w-1/4 lg:w-1/4 hidden hover:bg-[#3d5a22] md:flex text-[#fdae16] justify-center items-center'>Electronic Engineering</div>
		<div className=' w-1/2 md:w-1/4 lg:w-1/4 hidden hover:bg-[#4f772d] text-[#fdae16] md:flex justify-center items-center'>Diploma In Webdevelopment</div>
		<div className=' w-1/2 md:w-1/4 lg:w-1/4 text-[#fdae16] flex justify-center items-center'>Joined MMSIT</div>
		<div className=' w-1/2 md:w-1/4 lg:w-1/4 hover:bg-[#fdae16] text-[#fdae16] flex justify-center items-center hover:text-white'>Web Developer</div>

	  </div>
	  
    </div>
  )
}

export default Hero