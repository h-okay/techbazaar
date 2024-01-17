import React, { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <nav className="border-gray-200 bg-[#FFFFFF]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href=""
          className="flex items-center space-x-3 rtl:space-x-reverse flex-1"
        >
          <img
            src="/images/logo.png"
            className="h-8 rounded-full"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            TechBazaar
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3 flex-1 justify-end items-center">
          <Search size={25} strokeWidth={2} className="hover:cursor-pointer" />
          <ShoppingCart
            size={25}
            strokeWidth={2}
            className="hover:cursor-pointer"
          />
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={handleOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navbar */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded hover:text-red-700 border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded hover:text-red-700 border-gray-700"
              >
                Explore
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded hover:text-red-700 border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navbar */}
        {open && (
          <div className="w-full" id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded  hover:bg-gray-700 hover:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded  hover:bg-gray-700 hover:text-white"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded  hover:bg-gray-700 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
