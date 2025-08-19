import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ w, hrading, p, hover, hidden = "" }) {
  return (
    <div
      className={` ${w} bg-zinc-800 rounded-xl p-5 text-white flex flex-col items-baseline group transition-colors duration-300 ${
        hover ? `hover:bg-violet-600` : ""
      } max-h-[500px] transition-colors duration-300 ease-in-out`}
    >
      <div className="w-full group-hover:scale-95 transition-transform duration-300">
        <div className="w-[100%] flex justify-between group-hover:text-white">
          <h1 className='text-3xl font-regular'>Explore us</h1>
          <FaArrowRightLong className="text-2xl " />
        </div>

        <h1 className="text-2xl mt-10 font-bold group-hover:">
          What ever you want
        </h1>
      </div>

      <div className="w-full mt-56">
        {hrading === true ? (
          <>
            <h1 className="text-6xl font-bold -tracking-tighter leading-none">
              Start Project
            </h1>
            <button className="rounded-full border-[2px] py-2 px-6 mt-6">
              Click me
            </button>
          </>
        ) : (
          <div className="text-zinc-800">
            <h1 className="text-6xl font-bold -tracking-tighter leading-none">
              Start Project
            </h1>
            <button className="rounded-full py-2 px-6 mt-6">Click me</button>
          </div>
        )}

        {p === true ? (
          <p className="text-xs font-extralight block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam qua
          </p>
        ) : (
          <p className="text-xs font-extralight text-zinc-800 block group-hover:hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam qua
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;