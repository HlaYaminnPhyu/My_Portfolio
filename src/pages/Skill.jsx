import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaBootstrap, FaPhp, FaLaravel } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Skill = () => {


  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);



  return (
    <div id="skills" className="bg-[#1f1f1f] h-full justify-center py-20">
      
      <div className=" bg-[#000] h-full flex flex-col w-full gap-4 p-7">
      <section className=" flex flex-col justify-center items-center mb-4 sm:p-5 ">
        <h1 className=" text-3xl lg:text-5xl font-bold text-[#fdae16] uppercase mb-3">
          SkillS
        </h1>
        <p className=" text-[#dbd2c1] text-center">
        Proficient in web development technologies and frameworks.
        </p>
      </section>

      
     
        <div className="hidden lg:flex lg:flex-row gap-4">
       
         <div className=" items-center w-full h-44 border-2 border-white flex flex-row-reverse justify-around bg-[#ffffff19] backdrop-blur-sm border-solid border-t-[rgba(255,255,255,0.5)] border-l-[rgba(39,71,32,0.5)] border-t border-l glassmorphic rounded-lg">
            

            <div className={`${isVisible ? 'car p-5' :''}`} ref={animationRef}>
              <div className={`${isVisible ? 'percent js' : ''}`}
      ref={animationRef}>
              <div className={`${isVisible ? 'dot' : ''}`}
      ref={animationRef}></div>
      
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number absolute inset-0 flex justify-center items-center flex-col">
                
                  
                  <h2>80%</h2>
                  <p>Javascript</p>
                </div>
              </div>
            </div>
            <div className=" text-8xl text-[#faad1b]">
              <IoLogoJavascript />
              
            </div>
          </div>
          <div className=" items-center w-full h-44 border-2 border-white flex flex-row-reverse justify-around bg-[#ffffff19] backdrop-blur-sm border-solid border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-t border-l glassmorphic rounded-lg">
            
            <div className="car p-5">
            <div className={`tailwind ${isVisible ? 'percent' : ''}`}
      ref={animationRef}>
                <div className={`${isVisible ? 'dot' : ''}`}
      ref={animationRef}></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number absolute inset-0 flex justify-center items-center flex-col">
                  <h2>90%</h2>
                  <p>Tailwind</p>
                </div>
              </div>
            </div>
            <div className=" text-8xl text-[#38bdf8]">
              <SiTailwindcss />
            </div>
          </div>
          <div className=" items-center w-full h-44 border-2 border-white flex flex-row-reverse justify-around bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
            
            <div className="car p-5">
            <div className={`bootstrap ${isVisible ? 'percent' : ''}`}
      ref={animationRef}>
                <div className={`${isVisible ? 'dot' : ''}`}
      ref={animationRef}></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number absolute inset-0 flex justify-center items-center flex-col">
                  <h2>80%</h2>
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div className=" text-8xl text-[#7611f6]">
              <FaBootstrap />
            </div>
          </div> 
          
          
        </div>
 
        <div className=" flex flex-col lg:flex-row gap-4">

          <div className=" items-center w-full h-44 border-2 border-white flex justify-around bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
          <div className="car p-5">
          <div className={`react ${isVisible ? 'percent' : ''}`}
      ref={animationRef}>
                <div className={`${isVisible ? 'dot' : ''}`}
      ref={animationRef}></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number absolute inset-0 flex justify-center items-center flex-col">
                  <h2>85%</h2>
                  <p>React</p>
                </div>
              </div>
            </div>
            <div className=" text-8xl text-[#087ea4]">
              <FaReact />
            </div>
          </div>
          <div className=" items-center w-full h-44 border-2 border-white flex justify-around bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
          <div className="car p-5">
        

          
          
              <div className={`php ${isVisible ? 'percent' : ''}`}
      ref={animationRef}>

               
                <div className={`${isVisible ? 'dot' : ''}`}
      ref={animationRef}></div>

                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number absolute inset-0 flex justify-center items-center flex-col">
                  <h2>80%</h2>
                  <p>Php</p>
                </div>
              </div>
            </div>
            <div className=" text-8xl text-[#4f5b93]">
              <FaPhp />
            </div>
          </div>
          <div className=" items-center w-full h-44 border-2 border-white flex justify-around bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
          <div className="car p-5">
          <div className={`lara ${isVisible ? 'percent' : ''}`}
      ref={animationRef}>
                <div className={`${isVisible ? 'dot' : ''}`}
      ref={animationRef}></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number absolute inset-0 flex justify-center items-center flex-col">
                  <h2>85%</h2>
                  <p>Laravel</p>
                </div>
              </div>
            </div>
            <div className=" text-8xl text-[#f9322c]">
              <FaLaravel />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Skill;
