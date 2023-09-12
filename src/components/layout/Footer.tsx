import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-20 mx-24">
        <div className="p">
          <Link href={"/"}>
            <Image src={"/Logo.webp"} alt="logo" height={150} width={150} />
          </Link>
          <p className="mt-7 text-base text-gray-600">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-5 mt-6 text-center ">
            <div className="flex justify-center items-center bg-slate-100 w-10 h-10 rounded-xl">
              {" "}
              <IoLogoTwitter />
            </div>
            <div className="flex justify-center items-center bg-slate-100 w-10 h-10 rounded-xl">
              {" "}
              <FaFacebookF />
            </div>
            <div className="flex justify-center items-center bg-slate-100 w-10 h-10 rounded-xl">
              {" "}
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center md:flex-row gap-20 md:text-start mt-10 ">
          <div className="">
            <h3 className="text-base font-extrabold text-gray-700 mb-4">
              Company
            </h3>
            <ul className="flex flex-col scroll-m-20 text-base font-normal tracking-tight">
              <i className="py-1.5">
                <Link href={"/"}>About</Link>
              </i>
              <i className="py-1.5">
                <Link href={"/"}>Terms of Use</Link>
              </i>
              <i className="py-1.5">
                <Link href={"/"}>Privacy Policy</Link>
              </i>
              <i className="py-1.5">
                <Link href={"/"}>How it Works</Link>
              </i>
              <i className="py-1.5">
                <Link href={"/"}>Contact Us</Link>
              </i>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-extrabold text-gray-700 mb-4">
              Support
            </h3>
            <ul className="flex flex-col ">
              <i className="py-1.5">
                {" "}
                <Link href={"/"}>Support Carrer</Link>
              </i>
              <i className="py-1.5">
                {" "}
                <Link href={"/"}>24h Service</Link>
              </i>
              <i className="py-1.5">
                {" "}
                <Link href={"/"}>Quick Chat</Link>
              </i>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-extrabold text-gray-700 mb-4">
              Contact
            </h3>
            <ul className="flex flex-col">
              <i className="py-1.5">
                {" "}
                <Link href={"/"}>Whatsapp</Link>
              </i>
              <i className="py-1.5">
                {" "}
                <Link href={"/"}>Support 24h</Link>
              </i>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-start border-t pl-28 gap-5 md:text-start justify-around md:flex-row py-6 border-black text-gray-400 text-sm">
        <p className="">Copyright © 2022 Dine Market</p>
        <p className="">
          Design by. <br />{" "}
          <span className="font-bold text-gray-600">Weird Design Studio</span>
        </p>
        <p className="">
          Code by. <br />{" "}
          <span className="font-bold text-gray-600">
            nadeemhussain4462@ on github
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
