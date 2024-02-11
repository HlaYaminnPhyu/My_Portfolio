import React from 'react'
import {FaReact,FaBootstrap,FaPhp,FaLaravel} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {RiJavascriptLine} from 'react-icons/ri'
// [#344c36] [#faad1b] [#1f1f1f]
const Skill = () => {
  return (
	<div id="skills" className="bg-[#1f1f1f] h-screen py-20">
    <div className=" bg-[#000] h-full flex flex-col w-full p-7">
      <div className=" flex p-4">
      <div className=" bg-[#344c36] items-center w-full h-44 border-2 border-white flex justify-around bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
      
     <div className=" text-8xl text-[#7611f6]">
     <FaBootstrap />
     </div>
      <div className="car p-5">
      <div className="percent tailwind">
        <div className="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>

        </svg>
        <div className="number absolute inset-0 flex justify-center items-center flex-col">
          <h2>85%</h2>
          <p>Bootstrap</p>
        </div>
      </div>
    </div>


  </div>
  <div className=" items-center w-full mx-4 h-44 border-2 border-white flex justify-around bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(223,240,92,0.5)] border-l-[rgba(223,240,92,0.5)] border-solid border-t border-l glassmorphic rounded-lg">

  <div className=" text-8xl text-[#38bdf8]">
      <SiTailwindcss />
     </div>
     <div className="car p-5">
      <div className="percent tailwind">
        <div className="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>

        </svg>
        <div className="number absolute inset-0 flex justify-center items-center flex-col">
          <h2>85%</h2>
          <p>Bootstrap</p>
        </div>
      </div>
    </div>

  </div>
  <div className=" items-center w-full h-44 border-2 border-white flex justify-around bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
  <div className=" text-8xl text-[#faad1b]">
  <IoLogoJavascript />
  {/* <RiJavascriptLine /> */}
  </div>
  
  <div className="car p-5">
      <div className="percent tailwind">
        <div className="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>

        </svg>
        <div className="number absolute inset-0 flex justify-center items-center flex-col">
          <h2>85%</h2>
          <p>Bootstrap</p>
        </div>
      </div>
    </div>

  </div>
      </div>
        <div className=" bg-[#344c36] my-2 h-2 w-full"></div>
        <div className=" flex p-4">
      <div className=" bg-[#344c36] items-center w-full h-44 border-2 border-white flex justify-around bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
      <div className="car p-5">
      <div className="percent tailwind">
        <div className="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>

        </svg>
        <div className="number absolute inset-0 flex justify-center items-center flex-col">
          <h2>85%</h2>
          <p>Bootstrap</p>
        </div>
      </div>
    </div>
    <div className=' text-8xl text-[#087ea4]'><FaReact /></div>
 

  </div>
  <div className=" mx-4 bg-[#344c36] items-center w-full h-44 border-2 border-white flex justify-around bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
  <div className="car p-5">
      <div className="percent bootstrap">
        <div className="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>

        </svg>
        <div className="number absolute inset-0 flex justify-center items-center flex-col">
          <h2>85%</h2>
          <p>Bootstrap</p>
        </div>
      </div>
    </div>
  <div className=" text-8xl text-[#4f5b93]">
  <FaPhp />
     </div>

  </div>
  <div className=" bg-[#344c36] items-center w-full h-44 border-2 border-white flex justify-around bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l glassmorphic rounded-lg">
  <div className="car p-5">
      <div className="percent tailwind">
        <div className="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>

        </svg>
        <div className="number absolute inset-0 flex justify-center items-center flex-col">
          <h2>85%</h2>
          <p>Bootstrap</p>
        </div>
      </div>
    </div>
  <div className=" text-8xl text-[#f9322c]">
  <FaLaravel />
     </div>
  

  </div>
      </div>
    </div>
  {/* <div className="con">
    <div className="car p-5">
      <div className="percent tailwind">
        <div className="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>

        </svg>
        <div className="number absolute inset-0 flex justify-center items-center flex-col">
          <h2>85%</h2>
          <p>Bootstrap</p>
        </div>
      </div>
    </div>
    <div className="car p-5">
      <div className="percent bootstrap">
        <div className="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>

        </svg>
        <div className="number absolute inset-0 flex justify-center items-center flex-col">
          <h2>85%</h2>
          <p>Bootstrap</p>
        </div>
      </div>
    </div>
    <div className="car p-5">
      <div className="percent react">
        <div className="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>

        </svg>
        <div className="number absolute inset-0 flex justify-center items-center flex-col">
          <h2>85%</h2>
          <p>Bootstrap</p>
        </div>
      </div>
    </div>
   
  </div> */}
  </div>
  )
}

export default Skill