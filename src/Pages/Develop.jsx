import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import SEO  from '../assets/SEO.svg';

const Develop = () => {
  return (
   <>
    <br /><br />
     <hr className='text-[#F4F5F6]' />
       <br /><br /><br />
       <div className="design w-[100%] flex flex-col justify-center items-center gap-[20px] md:flex-row md:justify-center md:items-center md:gap-[20px]  ">
           <div className="boxes2 w-[90%] h-[500px]">
               <h1 className='text-[35px] font-bold ml-[20%]' data-aos="zoom-in-right">Development</h1>
               <br />
               <p className='ml-[20%]' data-aos="zoom-in-right">Our geeks are highly skilled in developing cutting edge software solutions ranging from simple business or personal portfolio websites to blogs, e-commerce solutions, CMS, plugin development, API development/integrations and SAAS product development.</p>
          <br />
    <p className=' flex items-center gap-2'  data-aos="zoom-out-left">
     <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
        <p>SAAS Product Development</p>
          
        </p>
        <p className=' flex items-center gap-2'  data-aos="zoom-out-left">
        <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
        <p>Web App Development</p>
             
        </p>
   <p className=' flex items-center gap-2' data-aos="zoom-out-left">
        <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
       <p>Mobile App Development</p>
          
           </p>
       <p className=' flex items-center gap-2'  data-aos="zoom-out-left">
        <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
           <p>E-Commerce Development</p>
             
           </p>
            <p className=' flex items-center gap-2'  data-aos="zoom-out-left">
           <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
           <p>Custom Software Development</p>
                
            </p>
            <p className=' flex items-center gap-2'  data-aos="zoom-out-left">
            <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
            <p>MVP Development</p>
                   
             </p>
            <p className=' flex items-center gap-2'  data-aos="zoom-out-left">
            <FaRegCircleCheck  className='text-[20px] text-[#48B958] ml-[20%]'/>
          <p>MVP Development</p>
                      
         </p>
   
           </div>
           <div className="boxes2 w-[90%] h-[500px]">
   <img src={SEO}alt="" className='w-[90%] sm:w-[60%] sm:ml-[30%] sm:mt-[20%] md:w-[50%] md:ml-[10%] ' data-aos="zoom-in-up" />
           </div>
       </div>
   </>
  )
}

export default Develop