import React, { useState } from "react";
import { Search, ShoppingCart, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function switchOpen() {
    setOpen(!open);
  }

  return (
    <nav className="text-lg">
      <div
        id="desktop-navbar"
        className="hidden md:flex justify-center mx-auto p-4 lg:w-2/3 w-full gap-10"
      >
        <a className="font-bold text-2xl flex-1" href="">
          TechBazaar
        </a>
        <div className="flex gap-10 items-center justify-center ">
          <a href="">Home</a>
          <a href="">Catalogue</a>
          <a href="">Contact</a>
        </div>
        <div className="flex gap-3 items-center justify-end flex-1">
          <Search
            size={20}
            strokeWidth={1.5}
            className="hover:cursor-pointer"
          />
          <ShoppingCart
            size={20}
            strokeWidth={1.5}
            className="hover:cursor-pointer"
          />
        </div>
      </div>
      <div
        id="mobile-navbar"
        className="flex md:hidden justify-between items-center p-4 relative"
      >
        <a className="font-bold text-2xl" href="">
          TechBazaar
        </a>
        <Menu
          size={30}
          strokeWidth={1.5}
          onClick={switchOpen}
          className="hover:cursor-pointer"
        />
      </div>
      {open && (
        <div className="absolute top-12 right-5 bg-black p-4 rounded-lg text-white flex flex-col items-center justify-center text-xl">
          <a href="">Home</a>
          <a href="">Catalogue</a>
          <a href="">Contact</a>
        </div>
      )}
    </nav>
  );
}
