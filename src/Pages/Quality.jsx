import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import geekinate from '../assets/geekinate.svg';

const Quality = () => {
  return (
   <>
  <hr className='text-[#F4F5F6]' />
   <br />
   <div className="quality flex flex-col justify-center items-center gap-[20px] w-[100%] md:flex-row md:justify-center md:items-center md:gap-[20px]" id='about'>
    <div className="box2 h-[500px] w-[90%] ">
      <img src={geekinate} alt="" className='w-[90%] sm:w-[60%] sm:ml-[20%] md:w-[70%] ' data-aos="zoom-in-right"/>
    </div>
    <div className="box2  h-[500px] w-[90%] ">
          <h3 className='text-[35px] font-bold' data-aos="zoom-in-up">Who we are?</h3>
          <br />
        <p data-aos="zoom-in-up">We are a team of geeks that provides exceptional technology solutions to businesses, startups, and enterprises.</p>
    <br />
    <p data-aos="zoom-in-up" >Our vision is to spread the power of technology across the globe and help businesses grow by delivering innovative software solutions.</p>
   <br />
   <p data-aos="zoom-in-up">Following are the top priorities for us at Geekinate with an aim to build long term successful business relationships with our clients.</p>
   <br />
   <p className=' flex items-center gap-2' data-aos="zoom-in-left">
   <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
   <p>Quality</p>

   </p>
    <p className=' flex items-center gap-2' data-aos="zoom-in-up">
   <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
   <p>Customer Satisfaction</p>

   </p>
    <p className=' flex items-center gap-2' data-aos="zoom-in-up">
   <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
   <p>Efficient Communication</p>

   </p>
    <p className=' flex items-center gap-2' data-aos="zoom-in-up">
   <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
   <p>Professional Services & Support</p>

   </p>
   
    </div>
   </div>
   </>
  )
}

export default Quality