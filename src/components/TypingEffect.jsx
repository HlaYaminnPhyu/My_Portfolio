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
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
    // const el = useRef();
    // useEffect(()=>{
    //     const type = new Typed(el.current,{
    //         strings : ['Front-end developer','Freelancer','Designer'],
    //         typeSpeed: 100,
    //         backSpeed: 100,
    //         loop : true,
    //         backDelay: 2000,
    //     })
    // },[])

  return (
    <div className="animate__slow animate__animated animate__slideInRight">
      <span ref={el} />
        {/* <span ref={el} className=' text-2xl'></span> */}
    </div>
  )
}

export default TypingEffect