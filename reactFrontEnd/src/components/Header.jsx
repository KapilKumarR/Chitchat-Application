import React, { useState } from 'react'
import "./Header.css";
import { CgProfile } from "react-icons/cg";
import {FaBars, FaTimes} from 'react-icons/fa'

const header = () => {

    const [IsMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
     setIsMenuOpen(!IsMenuOpen);
    }

  return (
    <>
      <div className="bg-purple-700 opacity-90 sticky top-0">
        <div className="flex justify-between">
          <div>
            <a  className="text-2xl p-2 text-white" href="/">ChatAI</a>
            <ul  className={`${IsMenuOpen ? 'block mt-2 -ml-2 ': 'hidden'}`} id='navbar'>
                <li className='px-7 py-1'>
                    <a href="/">Home</a>
                </li>
                <li className='px-7 py-1'>
                    <a href="/about">About us</a>
                </li>
                <li className='px-7 py-1'>
                    <a href="/register">Register</a>
                </li>
                <li className='px-7 py-1'>
                    <a href="/contact">Contact Us</a>
                </li>
            </ul>
          </div>
          <div className='mt-1'>
            <a href="/profile" className="text-xl text-white ">
              <label htmlFor="" className="flex cursor-pointer">My Profile <span className="mt-1 ml-1 text-black"><CgProfile/></span></label>
            </a>
          </div>
          <div>
            <span>
            <button className='text-white m-2.5 text-xl sm:hidden' onClick={toggleMenu}>
                { IsMenuOpen ? (<FaTimes/>)   : (<FaBars/>)}             
            </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
