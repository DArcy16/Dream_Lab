import React from "react";
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" bg-[#DEEFF5] py-[40px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-[18px] gap-10 lg:gap-3">
        <div className="">
          <h3>DREAM LAB</h3>
        </div>
        <div className="">
          <h3 className=" font-semibold">Get Started</h3>
          <ul className="text-sm flex flex-col gap-3 mt-5">
            <li>
              <p>Books</p>
            </li>
            <li>
              <p>Articles</p>
            </li>
            <li>
              <p>Podcasts</p>
            </li>
            <li>
              <p>Videos</p>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className=" font-semibold">Useful Links</h3>
          <ul className="text-sm flex flex-col gap-3 mt-5">
            <li>
              <p>Library</p>
            </li>
            <li>
              <p>Why Choose</p>
            </li>
            <li>
              <p>Pricing</p>
            </li>
            <li>
              <p>About Us</p>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className=" font-semibold">Contact Us</h3>
          <ul className="text-sm flex flex-col gap-3 mt-5">
            <li className="flex items-center gap-5">
              <div className=" w-[25px] h-[25px] bg-dreamLabColor1 rounded-full text-white grid place-items-center">
                <FaPhoneAlt />
              </div>
              <p>09794461888</p>
            </li>
            <li className="flex items-center gap-5">
              <div className=" w-[25px] h-[25px] bg-dreamLabColor1 rounded-full text-white grid place-items-center">
                <AiFillMail />
              </div>
              <p>www.m.me/dreamlab.news</p>
            </li>
            <li className="mt-4 flex items-center justify-between">
              <h3 className=" text-[18px] font-semibold">Follow Us</h3>
              <div className="text-[20px] flex items-end gap-3">
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaLinkedin />
                <FaYoutube />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-[13px] md:text-sm mt-5 pt-5">
        <p className="text-grey">Copyright 2022 Dreamlabnews.All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
