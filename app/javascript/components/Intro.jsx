import React from "react";

export default function Intro() {
  return (
    <div className="max-w-screen-xl mx-auto flex bg-[#DC8825] justify-center h-[300px]">
      <div className="flex flex-col justify-center items-start gap-5 p-3">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-blue-600 font-bold text-6xl lg:text-8xl antialiased">
            NEW ARRIVALS
          </h1>
          <p className="text-white text-lg lg:text-3xl">
            New stuff encourages you to be creative
          </p>
        </div>
        <button className="text-white bg-purple-600 p-4 font-bold hover:scale-105 transition text-lg lg:text-xl">
          SHOP NOW
        </button>
      </div>
      <img
        src="/images/hero.png"
        alt=""
        height={200}
        width={200}
        className="object-scale-down md:block hidden"
      />
    </div>
  );
}
