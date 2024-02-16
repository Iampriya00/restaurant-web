import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-8 text-white bg-black md:mt-0 rounded-smrounded-sm">
      <div className="flex flex-col justify-between p-8 px-5 md:flex-row md:px-32">
        <div className="w-full md:w-1/4">
          <h1 className="pb-4 text-xl font-semibold">FoodieWeb</h1>
          <p className="text-sm">
            Indulge in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>
        <div>
          <h1 className="pt-5 pb-4 text-xl font-medium md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
          <a
              className="transition-all cursor-pointer hover:text-brightColor"
              href="/"
            >
              Home
            </a>
            <a
              className="transition-all cursor-pointer hover:text-brightColor"
              href="/about"
            >
              About
            </a>
            <a
              className="transition-all cursor-pointer hover:text-brightColor"
              href="/menu"
            >
              Menu
            </a>
            <a
              className="transition-all cursor-pointer hover:text-brightColor"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className="pt-5 pb-4 text-xl font-medium md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="transition-all cursor-pointer hover:text-brightColor"
              href="/ourdishes"
            >
              Our Dishes
            </a>
            <a
              className="transition-all cursor-pointer hover:text-brightColor"
              href="/"
            >
              Premium Menu
            </a>
          </nav>
        </div>
        <div>
          <h1 className="pt-5 pb-4 text-xl font-medium md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="transition-all cursor-pointer hover:text-brightColor"
              href="mailto:admin@FoodieWeb.com"
            >
              FoodieWeb@email.com
            </a>
            <a
              className="transition-all cursor-pointer hover:text-brightColor"
              href="tel:+64958248966"
            >
              +64 958 248 966
            </a>
            <div className="flex gap-2">
              <a
                className="transition-all cursor-pointer hover:text-brightColor"
                href="https://www.facebook.com"
              >
                <BsFacebook />
              </a>
              <a
                className="transition-all cursor-pointer hover:text-brightColor"
                href="https://www.twitter.com"
              >
                <RiTwitterXFill />
              </a>
              <a
                className="transition-all cursor-pointer hover:text-brightColor"
                href="https://www.instagram.com"
              >
                <BsInstagram />
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <p className="py-4 text-center">
          @copyright
          <span className="text-brightColor"> 2024 FoodieWeb</span> | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
