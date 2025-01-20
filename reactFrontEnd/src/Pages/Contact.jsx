import React from "react";
import './Contact.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <center>
        <img
          className="w-60"
          src="https://cdn.shopify.com/s/files/1/0528/5075/3731/files/contat-us.gif?v=1613934145"
          alt=""
        />
      </center>
      <form className="border border-gray-400 m-3 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="
      First Name"
      className="input_box"
          />
           <input
            type="text"
            placeholder="
      Last Name"
      className="input_box"
          />
           <input
            type="email"
            placeholder="
      Email Address"
      className="input_box"
          />
           <input
            type="number"
            placeholder="
      Phone Number"
      className="input_box"
          />
        </div> <br />
        <label htmlFor="" className=" font-medium"> Write some Message : </label> <br />
        <textarea className="input_box w-full" name="" id=""></textarea>
        <center>
            <button type="submit" className="bg-pink-700 text-white m-4 px-16 py-1 rounded-2xl font-medium active:scale-110">Submit</button>
        </center>
      </form>
      <div className="m-6">
        <h1 className="text-xl font-mono">Connect with us through:-</h1>
        <div className="flex justify-center gap-5 m-5">
          <a href="#">
             <span className="text-2xl text-green-700 active:scale-110">
              <FaWhatsapp/>
             </span>
             </a>
             <a href="#">
             <span className="text-2xl text-purple-700 active:scale-110">
             <FaInstagramSquare/>
             </span>
             </a>
             <a href="#">
             <span className="text-2xl text-blue-700 active:scale-110">
             <FaTelegram/>
             </span>
             </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
