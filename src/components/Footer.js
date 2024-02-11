import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">FoodieWeb</h1>
          <p className="text-sm">
            Indulge in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
          <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Home
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/about"
            >
              About
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/menu"
            >
              Menu
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/ourdishes"
            >
              Our Dishes
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Premium Menu
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="mailto:admin@FoodieWeb.com"
            >
              FoodieWeb@email.com
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="tel:+64958248966"
            >
              +64 958 248 966
            </a>
            <div className="flex gap-2">
              <a
                className="hover:text-brightColor transition-all cursor-pointer"
                href="https://www.facebook.com"
              >
                <BsFacebook />
              </a>
              <a
                className="hover:text-brightColor transition-all cursor-pointer"
                href="https://www.twitter.com"
              >
                <RiTwitterXFill />
              </a>
              <a
                className="hover:text-brightColor transition-all cursor-pointer"
                href="https://www.instagram.com"
              >
                <BsInstagram />
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright
          <span className="text-brightColor"> 2024 FoodieWeb</span> | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
