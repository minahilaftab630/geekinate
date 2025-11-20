import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import designer from '../assets/designer.svg';

const Design = () => {
  return (
   <>
   <br /><br />
   <hr className='text-[#F4F5F6]' />
     <br /><br />
     <div className="design flex flex-col justify-center items-center gap-[20px] w-[100%] md:flex-row md:justify-center md:items-center md:gap-[20px] ">
      <div className="box2 h-[500px] w-[90%] ">
        <img src={designer} alt="" className='w-[90%] sm:w-[60%] sm:ml-[20%] md:w-[70%] ' data-aos="zoom-in-right"/>
      </div>
      <div className="box2  h-[500px] w-[90%] ">
            <h3 className='text-[35px] font-bold'  data-aos="zoom-in-up">Design</h3>
            <br />
          <p  data-aos="zoom-in-up">We design delightful experiences that build user trust. Developing tailored solutions for your workflow from scratch, or enhancing an already existing product.</p>
      <br />
      
     <p className=' flex items-center gap-2'  data-aos="zoom-in-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
     <p>Research & Analysis</p>
  
     </p>
      <p className=' flex items-center gap-2'  data-aos="zoom-in-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
     <p>Modern User Interfaces</p>
  
     </p>
      <p className=' flex items-center gap-2'  data-aos="zoom-in-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
     <p>Focus On User Experience (UX)</p>
  
     </p>
      <p className=' flex items-center gap-2'  data-aos="zoom-in-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
     <p>Design Consistency</p>
  
     </p>
      <p className=' flex items-center gap-2'  data-aos="zoom-in-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
     <p>Human-Centered Design</p>
  
     </p>
      <p className=' flex items-center gap-2' data-aos="zoom-in-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958]'/>
     <p>Prototyping</p>
  
     </p>
     
      </div>
     </div>
   </>
  )
}

export default Design