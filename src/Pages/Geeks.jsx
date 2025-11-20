import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { FaLaptop } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";
import { hover, motion } from "motion/react"

const Geeks = () => {
  return (
    <>
      <br /><br /><br /><br />
      <div className="geeks  bg-[#F8F9FC] flex flex-col justify-center items-center w-[100%] text-center" id='courses'>
        <div className="box1 h-[120px] w-[90%] pt-[20px]">
          <h1 className='text-[25px] font-bold' data-aos="fade-up"
            data-aos-duration="1000" >What we do?</h1>
          <p data-aos="fade-up"
            data-aos-duration="1000">We are a team of Geeks with great expertise</p>
        </div>
      </div>
      <div className="boxes justify-center bg-[#F8F9FC]  flex flex-col  items-center gap-[20px] w-[100%] md:flex-row  ">
        <div className="boxes4 w-[90%] pt-[25px] text-center sm:w-[60%] ">
          <motion.div
            whileHover={{ rotate: 160 }}
          transition={{ duration: 2 }}
            className="sqr bg-gradient-to-r from-green-50 to-green-300 h-[60px] w-[60px]  rotate-45 rounded-[5px]  m-auto"> 
            </motion.div>
          
          <span> <FaUser className='relative bottom-[43px] left-[160px] text-[35px] md:left-[40%]' /></span>

          <br />
          <h3>Tech-Consultancy</h3>
          <br />
          <p>We help you research, discover and define the ideal technology solution to your needs.</p>
        </div>
        <div className="boxes4   w-[90%] pt-[25px] text-center sm:w-[60%] ">
          <motion.div 
           whileHover={{ rotate: 160 }}
          transition={{ duration: 2 }}
          className="sqr bg-gradient-to-r from-green-50 to-green-300 h-[60px] w-[60px]  rotate-45 rounded-[4px]  m-auto">

          </motion.div>
          <span><IoMdColorPalette className='relative bottom-[43px] left-[130px] text-[40px] sm:ml-[8%] md:left-[35%]' /></span>
          <br />
          <h3>Design</h3>

          <br />
          <p>We use the industry best practices to design user centric software solutions.</p>
        </div>
        <div className="boxes4   w-[90%]  pt-[25px] text-center sm:w-[60%] ">
          <motion.div
             whileHover={{ rotate: 160 }}
          transition={{ duration: 2 }}
           className="sqr bg-gradient-to-r from-green-50 to-green-300 h-[60px] w-[60px]  rotate-45 rounded-[4px]  m-auto">

           </motion.div>
          <span><FaLaptop className='relative bottom-[43px] left-[130px] text-[35px] sm:ml-[8%] md:left-[35%]' /></span>

          <br />
          <h3>Development</h3>
          <br />
          <p>We convert your requirements into fully functional Web, Mobile, or SAAS applications.</p>
        </div>
        <div className="boxes4   w-[90%]  pt-[25px] text-center sm:w-[60%] ">
          <motion.div 
             whileHover={{ rotate: 160 }}
          transition={{ duration: 2 }}
          className="sqr bg-gradient-to-r from-green-50 to-green-300 h-[60px] w-[60px]  rotate-45 rounded-[4px]  m-auto">

          </motion.div>
          <span><FaBullhorn className='relative bottom-[43px] left-[130px] text-[35px] sm:ml-[8%] md:left-[35%]' /></span>
          <br />
          <h3>Digital Marketing</h3>
          <br />
          <p>We help you reach the right audience, build brand loyalty, and drive measurable results.</p>


        </div>
      </div>
    </>
  )
}

export default Geeks