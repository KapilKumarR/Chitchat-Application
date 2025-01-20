import React from "react";
import { PersonData } from "../Userdata/Userdata";

const Userlist = () => {
  return (
    <>
      <div className="">
        {PersonData.map((item, index ) => (
            <a href="/chat">
          <div key={index} className="flex gap-4  border-b-2 border-gray-300 pb-2 pl-5 pt-2 active:bg-gray-400">
          <img src={item.dp} alt="" className="w-10 border-2 border-gray-500 rounded-[60%]"/>
          <label htmlFor="" className="pt-2 font-medium ">{item.name}</label>
          </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Userlist;
