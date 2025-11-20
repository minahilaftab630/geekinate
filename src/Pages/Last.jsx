import React from 'react'
import logo from '../assets/logo.png'
import us from '../assets/us.svg'
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import  pak from '../assets/pak.svg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { hover, motion } from "motion/react"

const Last = () => {
  return (
   <>
   <br /><br /><br /><br />
   <div className="custom-shape-divider-top-1763071584" id='last'>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
</div>
   <div className="last bg-[#202942] w-[100%] flex flex-col justify-center items-center gap-[20px] lg:flex-row lg:justify-center lg:items-center lg:gap-[20px]">
    <div className="box3 w-[100%] h-[450px] ml-[5%] sm:w-[80%] md:w-[70%]  ">
<img src={logo} alt="" className='w-[40%] mt-[25%] sm:w-[30%] md:w-[30%] lg:w-[40%]' />
<br /><br />
<img src={us} alt="" className='w-[10%] ' />
<div className="innerdiv w-[45%] h-[30px] ml-[12%]  relative bottom-[5%]">
<h3 className='font-bold  text-[#ADB5BD]'>USA - Head Office</h3>
</div>
 <p className=' flex items-center gap-2'>
  <IoLocationOutline className='text-[25px] mb-[5%]  text-[#ADB5BD]' />
   <p className='text-[15px]  text-[#ADB5BD]'>172 Woodport Road, Suite A #442, Sparta, New Jersey, 07871, USA.</p>
   </p>
  <br />
   <p className=' flex items-center gap-2'>
<FaPhone className=' text-[#ADB5BD]'/>
<span className=' text-[#48B958]'>+1 (512) 900-6431</span>
   </p>

    </div>
    <div className="box3  w-[100%] h-[450px] ml-[5%] sm:w-[80%] md:w-[70%]">
    <br /><br /><br /><br /><br /><br /><br />
      <img src={pak} alt="" className='w-[10%] ' />
      <div className="innerdiv w-[45%] h-[30px] ml-[12%]  relative bottom-[5%]">
<h3 className='font-bold text-[#ADB5BD]'>Pakistan</h3>
</div>
<p className=' flex items-center gap-2'>
  <IoLocationOutline className='text-[25px] mb-[5%]  text-[#ADB5BD]' />
   <p className='text-[15px]  text-[#ADB5BD]'>Twinhub, 4th Floor, The Interlace, I-8 Markaz, Islamabad</p>
   </p>
    <p className=' flex items-center gap-2'>
<FaPhone  className=' text-[#ADB5BD]'/>
<span className=' text-[#48B958]'>+92 333 5388734</span>
   </p>
    </div>
   
    <div className="box3  w-[100%] h-[450px] ml-[5%] sm:w-[80%] md:w-[70%]">
      <br /><br /><br /><br /><br /><br /><br />
    <h3 className='font-bold text-[20px] text-[#ADB5BD]'>Stay in Touch</h3>
    <br />  
    <div className="icon  flex gap-[10px]">
    <FaFacebookSquare className='text-[30px]  text-[#ADB5BD]' />
    <FaSquareInstagram className='text-[30px]  text-[#ADB5BD]'/>
    <FaSquareTwitter className='text-[30px]  text-[#ADB5BD]' />
    <FaLinkedin className='text-[30px]  text-[#ADB5BD]' />
    </div>
    </div>
   </div>
    <hr className='text-[#ADB5BD]' />
   <div className="foter  bg-[#202942] h-[70px] w-[100%] flex justify-center items-center">
    <p className=' text-[#ADB5BD]'>© 2025 Geekinate.</p>
    <div className="btm absolute right-4 ">
        <a href="#banner">
        <motion.div 
        
           whileHover={{ rotate: 160 }}
          transition={{ duration: 2 }}
     className="green bg-green-500 h-[35px] w-[35px] flex justify-center  items-center absolute  right-[0px] bottom-2 rounded-[5px]">
  
    </motion.div>
    </a>
     <FaArrowUp className=' text-[white] text-[12px] absolute bottom-5 right-3' />
 
   </div>
      
    </div>
  
   </>
  )
}

export default Last