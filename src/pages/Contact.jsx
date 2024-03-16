import React, { useRef } from 'react';
import Form from '../components/Form';

// [#344c36] [#faad1b] #dbd2c1 #f6f1e3 #040707 #f1603c #fdae16 #f6efe1  #fdae16 #000000
const Contact = () => {
  // bg-[#232323]
  
  return (
      <div className=" bg-[#232323] h-screen relative z-10 mt-0 md:mt-16 overflow-auto md:overflow-hidden" id="contact">
      <div className='absolute z-[-1] opacity-[0.3] bg-container bg-image w-full h-full pt-0 md:pt-16 mb-3rem'/>
        <Form/>
      </div>
  )
}

export default Contact