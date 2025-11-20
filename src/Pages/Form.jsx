import React from 'react'
import contact from '../assets/contact.svg'
import { Link } from 'react-router'

const Form = () => {
  return (
   <>
   <br /><br /><br />
   <div className="first w-[100%] flex justify-center items-center " id='contact'>
    <div className="box1 h-[100px] w-[100%] text-center sm:w-[60%]">
        <h1 className='text-[20px] font-bold font-serif' data-aos="fade-up"
  
     data-aos-duration="3000">Get In Touch!</h1>
    <br />
        <p data-aos="fade-up"
     data-aos-duration="3000">We love to talk to the people, listen to their requirements and team up to refine and Geekinate their tech needs.</p>
    </div>
   </div>
   <div className="form flex flex-col justify-center items-center gap-[20px] w-[100%]  md:flex-row md:justify-center md:items-center ">
    <div className="box2 w-[100%] h-[400px] sm:w-[60%]">
      <img src={contact} alt="" className='w-[70%] ml-[10%] mt-[45%] sm:mt-[10%] md:ml-[40%] md:w-[50%]'  data-aos="zoom-in-right"/>   
    </div>
    <div className="box2  w-[70%]  h-[400px]  border-2 border-[#edf2f2] rounded-[5px] md:w-[40%] md:mr-[20%] md:mt-[10%] ">
        
        <form action="" className=' w-[100%] flex flex-col justify-center items-center gap-[10px] h-[400px] '>
           <div className="box1 w-[100%] h-[150px] flex flex-col justify-center items-center gap-[20px] sm:w-[60%]  md:flex-row md:justify-center md:items-center">
            <div className="box2 w-[100%] h-[150px] " data-aos="fade-left" >
                <label htmlFor="" className='text-[20px]'>Name*</label>
                <br /><br />
               <input type="name" className='border border-black rounded-[5px] w-[70%] ' />
            </div>
            <div className="box3 w-[100%]  h-[150px]" data-aos="fade-left">
                <label htmlFor="" className='text-[20px]'>Your Email*</label>
                <br /><br />
                <input type="mail" className='border border-black rounded-[5px]  w-[70%]' />
            </div>
           </div>
    
           <div className="box4 w-[100%] h-[120px] sm:w-[60%]" data-aos="fade-left">
            <label htmlFor="" className='text-[20px]'>Message*</label>
            <textarea name="" id="" className='w-[90%] h-[80px] border border-black rounded-[5px] '></textarea>
           </div>
           <button className=' bg-[#48B958] text-white h-[50px] w-[100%] rounded-[8px]  hover:bg-green-600 hover:cursor-pointer sm:w-[60%]' data-aos="fade-left">Send Message</button>
        </form>
    </div>
   </div>
   </>
  )
}

export default Form