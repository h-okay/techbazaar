import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col text-center pt-10 gap-10">
      <h1 className="text-7xl">Find the tech for you 🧑‍💻</h1>
      <p className="text-3xl">
        Beautiful devices that encourage you to get{" "}
        <span className="font-bold italic">creative</span>.
      </p>
      <button className="uppercase w-fit mx-auto px-10 py-3 bg-black text-white text-lg hover:scale-105 transition">
        Shop now
      </button>
    </div>
  );
}
