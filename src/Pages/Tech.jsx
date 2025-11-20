import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import test from '../assets/test.webp';

const Tech = () => {
  return (
    <>
    <br /><br />
  <hr className='text-[#F4F5F6]' />
    <br /><br /><br />
    <div className="tech w-[100%] flex flex-col justify-center items-center gap-[20px] md:flex-row md:justify-center md:items-center md:gap-[20px]  ">
        <div className="boxes2 w-[90%] h-[500px]">
            <h1 className='text-[35px] font-bold ml-[20%]'  data-aos="zoom-in-right">Tech Consultancy</h1>
            <br />
            <p className='ml-[20%]'  data-aos="zoom-in-right">We help organizations make use of technology to support their business goals. We collaborate with you to undertake idea validation, understand your requirements, and define scope. Our goal is to help you discover how our tech solutions can help you reduce business costs, create new revenue streams, streamline operations, and improve customer service.</p>
       <br />
 <p className=' flex items-center gap-2'  data-aos="zoom-out-left">
  <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
     <p>Idea Validation</p>
       
     </p>
     <p className=' flex items-center gap-2'  data-aos="zoom-out-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
     <p>Defining Scope</p>
          
     </p>
<p className=' flex items-center gap-2'  data-aos="zoom-out-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
    <p>Building concrete requirements</p>
       
        </p>
    <p className=' flex items-center gap-2'  data-aos="zoom-out-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
        <p>Technical evaluationy</p>
          
        </p>
         <p className=' flex items-center gap-2'  data-aos="zoom-out-left">
        <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
        <p>Resource Allocation</p>
             
         </p>
         <p className=' flex items-center gap-2'  data-aos="zoom-out-left">
         <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
         <p>Project Management</p>
                
          </p>
         <p className=' flex items-center gap-2'  data-aos="zoom-out-left">
         <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
       <p>Rapid Prototyping</p>
                   
      </p>

        </div>
        <div className="boxes2 w-[90%] h-[500px]">
<img src={test}alt="" className='w-[90%] sm:w-[60%] sm:ml-[30%] sm:mt-[20%] md:w-[50%] md:ml-[10%] ' data-aos="zoom-in-up" />
        </div>
    </div>
    </>
  )
}

export default Tech