import React, {useState} from "react";
import "./Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

  const[User, SetUser] = useState({
    first_name: "", last_name: "", email_address: "", password: "",
  })

  let name, value;
  const HandleUserInput = (e) =>{
     console.log(e);
    name = e.target.name;
    value = e.target.value;
    SetUser({...User, [name]:value});
  }

  const[Password, SetPassword] = useState(true);

  const HandlePassword = () =>{
    SetPassword(!Password);
  }

  return (
    <>
      <div className="flex justify-center login_image">
        <div className="mt-5">
          <label htmlFor="" id="register_label">
            Registration
          </label>
          <form action="" id="form" className="mt-5 mb-5 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-5">
              <span className="flex">
                <input
                  type="text"
                  className="bg-transparent text-black font-medium  py-1 rounded-xl pl-2"
                  id="input_box"
                  required
                  placeholder="First Name"
                  name="first_name"
                  value={User.first_name}
                  onChange={HandleUserInput}
                />
              </span>
              <span className="flex">
                <input
                  type="text"
                  className="bg-transparent text-black font-medium  py-1 rounded-xl pl-2"
                  id="input_box"
                  required
                  placeholder="Last Name"
                  name="Last_name"
                  value={User.last_name}
                  onChange={HandleUserInput}
                />
              </span>
              <span className="flex">
                <input
                  type="email"
                  className="bg-transparent text-black font-medium  py-1 rounded-xl pl-2"
                  id="input_box"
                  required
                  name="email"
                  placeholder="Email Address"
                  value={User.email}
                  onChange={HandleUserInput}
                />
              </span>
              <span className="flex">
                <input
                  type =  {Password ? "password" : "text"}
                  className="bg-transparent text-black font-medium  py-1 rounded-xl pl-2"
                  id="input_box"
                  placeholder="Password"
                  required
                  name="password"
                  value={User.password}
                  onChange={HandleUserInput}
                />
                <label className="relative right-8 top-2" onClick={HandlePassword}>{Password ? <FaEyeSlash/> : <FaEye/>} </label>
              </span>
            </div>
            <label htmlFor="" className="text-green-300 font-medium underline flex gap-5 mt-3">
              <a href="">Forget Password ? </a> 
              <h className="text-blue-950">Have account ? <a href="/login" className="font-bold">login</a>  </h>
            </label>
            <center><button type="submit" className="bg-red-600 text-white px-10 py-1 rounded-xl mt-5 active:bg-red-800 active:scale-110">Submit</button></center>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
