import React, { useRef } from 'react';
import Form from '../components/Form';

const Contact = () => {
  
  return (
      <div className=" bg-[#232323] md:h-[70vh] lg:h-[100vh] relative z-10 mt-0 md:mt-20 overflow-auto md:overflow-hidden" id="contact">
      <div className='absolute z-[-1] bg-container opacity-[0.3] bg-image w-full h-full pt-0 md:pt-0 mb-3rem'/>
        <Form/>
      </div>
  )
}

export default Contact