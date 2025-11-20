import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import marketing from '../assets/marketing.svg';

const Digital = () => {
  return (
  <>
  <br /><br />
   <hr className='text-[#F4F5F6]' />
     <br /><br />
     <div className="digital flex flex-col justify-center items-center gap-[20px] w-[100%] md:flex-row md:justify-center md:items-center md:gap-[20px] ">
      <div className="box2 h-[500px] w-[90%] ">
        <img src={marketing} alt="" className='w-[90%] sm:w-[60%] sm:ml-[20%] md:w-[70%] ' data-aos="zoom-in-right"/>
      </div>
      <div className="box2  h-[500px] w-[90%] ">
            <h3 className='text-[35px] font-bold'  data-aos="zoom-in-up">Digital Marketing</h3>
            <br />
          <p  data-aos="zoom-in-up">We offer a range of services to help you reach your target audience, boost engagement, and increase conversions, all guided by in-depth analysis. Our team of experienced digital marketing specialists can help you with:</p>
      <br />
     
     <p className=' flex items-center gap-2'  data-aos="zoom-in-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
     <p>Social Media Management</p>
  
     </p>
      <p className=' flex items-center gap-2'  data-aos="zoom-in-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
     <p>Social Media Management</p>
  
     </p>
      <p className=' flex items-center gap-2'  data-aos="zoom-in-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
     <p>Content Marketing</p>
  
     </p>
      <p className=' flex items-center gap-2'  data-aos="zoom-in-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
     <p>Facebook Ads Management</p>
  
     </p>
      <p className=' flex items-center gap-2'  data-aos="zoom-in-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
     <p>Google Ads Management</p>
  
     </p>
      <p className=' flex items-center gap-2'  data-aos="zoom-in-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
     <p>Tiktok Ads Management</p>
  
     </p>
     
      </div>
     </div>
  </>
  )
}

export default Digital