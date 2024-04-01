import React from "react";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col p-[30px] bg-[#212121] text-orange-400 overflow-hidden max-w-[500px] mx-auto">
      <h1 className="text-[36px] font-light">Hello...</h1>

      <div className="my-8 relative flex flex-col items-center">
        <div
          className="bg-[url(https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]
           w-[500px] h-[500px] rounded-full bg-cover 
        bg-center"
        ></div>

        <div
          className="border-orange-400 border-[6px] rounded-full w-[530px] h-[530px] absolute 
        -top-[15px]"
        ></div>
      </div>

      <h1 className="text-[30px] font-light">
        My Name is <br /> Mochammad Ibnu Abbas
      </h1>
      <p className="text=[16px]font-light py-3">I'm a Junior Web Developer</p>

      <Link
        to={"/biodata"}
        className="w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full fixed -bottom-4 -right-4 flex justify-center items-center"
      >
        <FiPlay className="text-[42px]" />
      </Link>
    </div>
  );
}
