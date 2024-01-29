import React, { useRef } from 'react';
import Form from '../components/Form';


const Contact = () => {
  
  return (
      <div className='bg-portfolio-fill bg-[#dbd2c1] h-screen relative z-10 mt-0 md:mt-16 overflow-auto md:overflow-hidden' id="contact">
      <div className='absolute z-[-1] opacity-[0.3] bg-container bg-image w-full h-full pt-0 md:pt-16 mb-3rem'/>
        <Form/>
      </div>
  )
}

export default Contact