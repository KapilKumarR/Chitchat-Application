import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import './Chat.css'
import { FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const Chat = () => {
  return (
    <>
    <div className=''>
        <div className='flex gap-2 p-1 bg-purple-800'>
            <a href="/" className='pt-1'>
            <span className='text-white text-2xl active:text-purple-500 '><GoArrowLeft/></span>
            </a>
            <img className='w-8 rounded-[50%] border-2 border-gray-400' src="https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg" alt="" />
            <label htmlFor="" className='text-white pt-1 pl-2'>Aman Prajapati</label>
        </div>
        <div className=' background_image pb-3' >
            <div></div>
            <div className='flex relative  gap-2 p-2 pt-[275px]'>
            <input type="text" placeholder='Message' className='pl-3 py-2 rounded-2xl w-full outline-none bg-gray-600 text-white focus:bg-gray-700' />
            <label htmlFor="" className='text-2xl text-white pt-2 bg-purple-700 px-3 active:bg-white active:text-purple-700 rounded-[30%]'><FaMicrophone/></label>
            <label htmlFor="" className='text-2xl text-white pt-2 bg-purple-700 px-3 active:bg-white active:text-purple-700 rounded-[30%]'><IoMdSend/></label>
            </div>
        </div>
    </div>
    </>
  )
}

export default Chat