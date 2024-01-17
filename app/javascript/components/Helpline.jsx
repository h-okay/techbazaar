import { Facebook, Instagram, Phone, Twitter, Youtube } from "lucide-react";
import React from "react";

export default function Helpline() {
  return (
    <div className="bg-[#252B42] text-white">
      <div className="flex items-center justify-between max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex gap-3 items-center">
          <Phone size={20} />
          <div className="flex flex-col md:flex-row items-start">
            <p>24/7 Customer service</p>
            <p className="font-bold md:pl-3">1-800-234-5678</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <Instagram size={20} />
          <Youtube size={20} />
          <Facebook size={20} />
          <Twitter size={20} />
        </div>
      </div>
    </div>
  );
}
