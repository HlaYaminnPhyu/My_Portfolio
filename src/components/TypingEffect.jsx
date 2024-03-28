import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import "animate.css";
const TypingEffect = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Front-end developer','Freelancer','Backend developer'],
      typeSpeed: 100,
      backSpeed: 100,
            loop : true,
            backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className="animate__slow animate__animated animate__slideInRight">
      <span ref={el} />
    </div>
  )
}

export default TypingEffect