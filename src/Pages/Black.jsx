import React from 'react'
import sortlist from '../assets/sortlist.webp'
import awspartner from '../assets/awspartner.webp'
import clutch from '../assets/clutch.webp'
import shopifypartner from '../assets/shopifypartner.webp'
import googlepartner from '../assets/googlepartner.webp'
import cloudways from '../assets/cloudways.webp'

const Black = () => {
  return (
   <>
   <br /><br />
    <hr className='text-[#F4F5F6]' />
    <br />
    <div className="custom-shape-divider-top-1763071584">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
</div>

   <div className="black bg-[#202942] w-[100%] flex justify-center items-center" id='services'>
    <div className="box1 w-[50%] h-[160px] text-center ">
        <h1 className='font-bold text-[20px]  mt-[20%] text-[#F8F9FC] sm:text-[20px] md:text-[30px]'>Collaborators and Partners</h1>
    </div>
   </div>
    <div className="big bg-[#202942] flex flex-wrap w-[100%] justify-center items-center gap-[20px]">
        <div className="boxes6 w-[25%] h-[150px]">
            <img src={sortlist} alt="" className='w-[70%] m-auto mt-[10%] md:w-[40%]' />
        </div>
        <div className="boxes6  w-[25%] h-[150px]">
            <img src={awspartner} alt="" className='w-[70%] m-auto mt-[10%] md:w-[40%]'  />
        </div>
        <div className="boxes6  w-[25%] h-[150px]">
            <img src={clutch} alt="" className='w-[70%] m-auto mt-[10%] md:w-[40%]' />
        </div>
        <div className="boxes6  w-[25%] h-[150px]">
            <img src={shopifypartner} alt="" className='w-[70%] m-auto mt-[10%] md:w-[40%]' />
        </div>
        <div className="boxes6 w-[25%] h-[150px]">
            <img src={googlepartner} alt="" className='w-[70%] m-auto mt-[10%] md:w-[40%]' />
        </div>
        <div className="boxes6  w-[25%] h-[150px]">
            <img src={cloudways} alt="" className='w-[70%] m-auto mt-[10%] md:w-[40%]' />
        </div>

    </div>
   </>
  )
}

export default Black