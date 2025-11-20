import React from 'react'
import amazon from '../assets/amazon.svg'
import reactapp from '../assets/reactapp.svg'
import mongodb from '../assets/mongodb.svg'
import node from '../assets/node.svg'
import unity from '../assets/unity.svg'

const Softwares = () => {
  return (
   <>
   <br /><br />
   <div className="software w-[100%] flex flex-wrap justify-center items-center gap-[20px]sm:flex sm:flex-wrap">
    
    <div className="boxes5 h-[100px] w-[45%] sm:w-[25%] md:w-[20%] lg:w-[10%]">
<img src={amazon} alt="" className='w-[100%] pt-[30px] pl-[40px]  ' />
    </div>
    <div className="boxes5  h-[100px] w-[45%] sm:w-[25%]  md:w-[20%] lg:w-[10%]">
     <img src={reactapp} alt="" className='w-[100%] pt-[30px] pl-[40px]' />
    </div>
    <div className="boxes5  h-[100px] w-[45%] sm:w-[25%]  md:w-[20%] lg:w-[10%]">
        <img src={mongodb} alt="" className='w-[100%] pt-[30px] pl-[40px]' />
    </div>
    <div className="boxes5 h-[100px] w-[45%] sm:w-[25%]  md:w-[20%] lg:w-[10%]">
        <img src={node} alt="" className='w-[100%] pt-[30px] pl-[40px]' />
    </div>
    <div className="boxes5  h-[100px] w-[45%] sm:w-[25%]  md:w-[20%] lg:w-[10%]">
        <img src={unity} alt="" className='w-[100%] pt-[30px] pl-[40px]'/>
    </div>
    <br /> 
  
    
   </div>
   </>
  )
}

export default Softwares