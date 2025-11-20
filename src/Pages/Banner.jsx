import React from 'react'
import react from '../assets/react.svg'

const Banner = () => {
  return (
 <>
 <div className="banner bg-[#F8F9FC] w-[100%] flex flex-col  justify-center items-center gap-[20px] md:flex-row" id='banner'>
    
    <div className="boxes2 h-[500px] w-[90%]">
    <div className="innerdiv mt-[40%] ml-[8%] md:mt-[10%]">
     <h1 className='text-[30px] md:text-[40px]' data-aos="zoom-in-up">We are here to <span className='text-[#48B958]'>Geekinate </span>your needs</h1> 
     <br />
 <p className='text-[20px]' data-aos="zoom-in-up">Geekinate is the process of getting your technology needs fulfilled by our team of Geeks.
</p>
<br />

<button  className=' bg-[#48B958] text-white h-[40px] w-[50%] rounded-[8px] hover:bg-green-600 hover:cursor-pointer sm:w-[30%] '   data-aos="zoom-in-up">
  
  <a href="#contact">LET'S CONNECT</a>
  
  </button>

    </div>
        
    </div>
    
    <div className="boxes2 h-[500px] w-[50%]"  data-aos="zoom-in-up">
        <img src={react} alt="" className='w-[100%] mt-[70%] md:w-[90%] md:mt-[20%]' />
    </div>
 </div>

 </>
  )
}

export default Banner