import React, {useState} from 'react'
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {

  const[Password, SetPassword] = useState(true);

  const HandlePassword = () =>{
    SetPassword(!Password);
  }

  return (
    <>
    <div className="flex justify-center login_image">
        <div className="mt-5">
          <label htmlFor="" id="register_label">
            Login
          </label>
          <form action="" id="form" className="mt-5 mb-5 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-5">
              <span className="flex">
                <input
                  type="text"
                  className="bg-transparent text-black font-medium  py-1 rounded-xl pl-2"
                  id="input_box"
                  required
                  placeholder='User Name'
                  autoComplete='off'
                />
              </span>
              <span className="flex">
                <input
                  type="email"
                  className="bg-transparent text-black font-medium  py-1 rounded-xl pl-2"
                  id="input_box"
                  required
                  placeholder='Email or Phone number'
                />
              </span>
              <span className="flex">
                <input
                  type =  {Password ? "password" : "text"}
                  className="bg-transparent text-black font-medium  py-1 rounded-xl pl-2"
                  id="input_box"
                  required
                  placeholder='password'
                />
                 <label className="relative right-8 top-2" onClick={HandlePassword}>{Password ? <FaEyeSlash/> : <FaEye/>} </label>
              </span>
            </div>
            <label htmlFor="" className="text-green-300 font-medium underline flex gap-5 mt-3">
              <a href="">Forget Password ? </a> 
            </label>
            <center><button type="submit" className="bg-red-600 text-white px-10 py-1 rounded-xl mt-5 active:bg-red-800 active:scale-110">Sign in</button></center>
            <center><button type="submit" className="bg-purple-500 text-white px-10 py-1 rounded-xl mt-5 active:bg-red-800 active:scale-110 flex gap-2">Login With Google <span className='text-xl pt-1'><FcGoogle/></span></button></center>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login