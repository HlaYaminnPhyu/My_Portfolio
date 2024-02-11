import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "animate.css"
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const [open, setOpen] = useState(true);
  const menuLinks = [
    { id: 1, name: "HOME", link: "home" },
    { id: 2, name: "ABOUT", link: "about" },
    { id: 3, name: "SERVICES", link: "services" },
    { id: 4, name: "WORK", link: "work" },
    { id: 5, name: "SKILLS", link: "skills" },
    { id: 6, name: "CONTACT", link: "contact" },
  ];
  return (
    <nav>
      <div className=" w-full px-1 py-2 lg:p-4 lg:pt-5 md:mx-auto flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:justify-between font-bold fixed bg-black z-20">
        
        <div className="flex items-center justify-between px-2 lg:px-0">
          <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}
            className={`${
              open ? "text-[#faad1b]" : "text-[#faad1b]"
            } ml-0 lg:ml-14 text-[28px]`}
          >
            DevFolio
          </motion.span>
          <div onClick={() => setOpen(!open)} className="lg:hidden text-white">
            {open ? (
              <MdMenu className="text-3xl" />
            ) : (
              <MdClose className="text-3xl" />
            )}
          </div>
        </div>
        <ul className="text-black lg:text-[#faad1b] mr-0 lg:mr-14 lg:flex lg:py-0 lg:static lg:space-x-9 hidden">
          {menuLinks.map((item) => (
            // <motion.li
            //   variants={variants}
            //   whileHover={{ scale: 1.1 }}
            //   whileTap={{ scale: 0.95 }}
            // >
              <Link
                key={item.id}
                to={item.link}
                className={`lg:text-[15px] a py-3 lg:py-0 px-5 lg:px-0 font-semibold text-md duration-300 transition-all `}
              >
                {item.name}
              </Link>
            
          ))}
        </ul>
        <ul
          className={`text-black lg:text-white mr-0 lg:mr-14 flex flex-col lg:flex-row absolute top-12 right-4 left-4 bottom-4 py-3 lg:py-0 lg:static lg:space-x-9 transition-all duration-300 ${
            open ? "hidden" : "block lg:bg-transparent"
          }`}
        >
          {menuLinks.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`${
                location.pathname === item.link
                  ? "text-white"
                  : "hover:text-white"
              } lg:text-[15px] py-3 lg:py-0 px-5 lg:px-0 font-semibold text-md duration-300 transition-all `}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
