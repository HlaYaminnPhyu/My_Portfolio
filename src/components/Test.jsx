import React, { useState } from 'react'
import {motion} from 'framer-motion'

const Test = () => {
	const [open,setOpen]=useState(false);
	const variants={
	  visible:{opacity:1,x:1000,transition:{duration:2}},
	  hidden:{opacity:0}
	}
	return (
	  <div id='home' className=' h-screen'>
	  <div className=' flex justify-center items-center'>
		<motion.div className='w-[100px] h-[100px]  bg-white' initial={{opacity:0.5, scale:0.5}} 
		// whileHover={{opacity:1, scale:2}}
		// whileTap={{opacity:1,scale:2}}
		// whileInView={{opacity:1, scale:2}}
		variants={variants}
		animate={open?"visible":"hidden"}
		// drag
		// transition={{duration:2}}
		>
  
		</motion.div>
		<button onClick={()=>setOpen(prev=>!prev)} className='bg-white'>Click</button>
	  </div>
	
	</div>
	)
}

export default Test