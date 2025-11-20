import { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignLeft, FiX } from "react-icons/fi"; // ← added FiX
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav bg-[#FFFFFF] h-[80px] w-full  z-10 fixed flex justify-between items-center px-6 md:px-12 shadow-sm ">
       
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-[35%] sm:w-[20%] md:w-[10%]" />

      {/* Hamburger / Cross icon */}
      <div className="md:hidden block text-[30px] font-bold cursor-pointer">
        {open ? (
          <FiX onClick={() => setOpen(false)} />  // Cross icon
        ) : (
          <FiAlignLeft onClick={() => setOpen(true)} /> // Hamburger icon
        )}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-[18px] font-medium items-center">
        <li className="hover:text-[#48B958]"><Link to="/">Home</Link></li>
        <li className="hover:text-[#48B958]"><a href="#about">About</a></li>
        <li className="hover:text-[#48B958]"><a href="#last">Contact</a></li>
        <li className="hover:text-[#48B958]"><a href="#services">Services</a></li>
        <li className="hover:text-[#48B958]"><Link to="/design">Design</Link></li>
        <li className="hover:text-[#48B958]"><a href="#courses">Courses</a></li>
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute bg-gray-100 z-10 w-full left-0 top-[80px] flex flex-col items-center gap-6 py-6 text-[20px] font-medium shadow-md transition-all duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <li onClick={() => setOpen(false)} className="hover:text-[#48B958]"><Link to="/">Home</Link></li>
        <li onClick={() => setOpen(false)} className="hover:text-[#48B958]"><a href="#about">About</a></li>
        <li onClick={() => setOpen(false)} className="hover:text-[#48B958]"><a href="#last">Contact</a></li>
        <li onClick={() => setOpen(false)} className="hover:text-[#48B958]"><a href="#services">Services</a></li>
        <li onClick={() => setOpen(false)} className="hover:text-[#48B958]"><Link to="/design">Design</Link></li>
        <li onClick={() => setOpen(false)} className="hover:text-[#48B958]"><a href="#courses">Courses</a></li>
      </ul>
    </div>
  );
}
