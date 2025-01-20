import React from "react";
import "./Profile.css";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <>
      <div id="profile_background" className="pb-4">
        <div className="flex justify-center" >
          <div className="mt-4">
            <span className="text-8xl text-black">
              <CgProfile />
              <label htmlFor="" className="text-xl -mt-12">
                User Name
              </label>
            </span>
            <label htmlFor=""></label>
            <h1></h1>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 m-5">
            <label htmlFor="" className="font-mono text-xl">First Name : <span></span></label>
            <label htmlFor="" className="font-mono text-xl">Last Name : <span></span></label>
            <label htmlFor="" className="font-mono text-xl">Email Address : <span></span></label>
            <label htmlFor="" className="font-mono text-xl">Phone Number : <span></span></label>
        </div>
      </div>
    </>
  );
};

export default Profile;
