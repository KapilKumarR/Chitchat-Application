import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";

const About = () => {
  return (
    <>
    <center className='font-bold text-2xl my-2'>About Us</center>
    <div className='ml-4'>
        <div className='mt-4'>
            <div className='flex gap-2'><label htmlFor="" className='font-serif text-xl'>Hello! Everyone</label> <span className='pt-1 text-2xl text-yellow-500'><MdOutlineWavingHand/></span> </div>
          <div className='mt-5'>
            <img className='w-36 border-2 border-gray-600 rounded-full' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/fc9d8c89639683.5dfafa64bc8ba.gif" alt="" />
            <label htmlFor="" className='font-medium pl-5'>Aman Prjapati</label>
            <p className='p-4'>
            Hi, I'm Aman Prajapati. As a BCA student, I discovered my enthusiasm for coding and went on to pursue a career in frontend development. I'm excited to share my skills and experiences with you
            </p>
            
          </div>
          <hr />
          <div className='mt-5'>
          <img className='w-36 border-2 border-green-600 rounded-[40%]' src="https://cdn.dribbble.com/users/1827485/screenshots/4298010/avatar.gif" alt="" />
          <label htmlFor="" className='font-medium pl-5 '>Kapil Kumar Rahul</label>
          <p className='p-4'>
            Hi, I'm Kapil Kumar Rahul. As a BCA student, I discovered my enthusiasm for coding and went on to pursue a career in backend development. I'm excited to share my skills and experiences with you
            </p>
          </div>

          <label htmlFor="" className='font-bold text-xl text-purple-800 py-5'>About Chat bot</label>
          <p className='p-5'>
          We've developed an intuitive chatbot using React JS, a powerful JavaScript library. This conversational AI is designed to provide seamless user interactions, leveraging React's efficient rendering capabilities to deliver fast and accurate responses. <br />With a user-friendly interface and robust functionality, my React JS chatbot offers a engaging and informative experience for users.
          </p>
        </div>
    </div>
    </>
  )
}

export default About