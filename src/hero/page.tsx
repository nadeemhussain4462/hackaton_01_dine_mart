import React from "react";
import Image from "next/image";
import prod2 from "/public/prod2.webp";
import log1 from "/public/log1.webp";
import log2 from "/public/log2.webp";
import log3 from "/public/log3.webp";
import log4 from "/public/log4.webp";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "../../components/ui/badge";

const Hero = () => {
  return (
    <section className="flex justify-between items-center h-full">
      <div className="grid lg:grid-cols-2 sm:gap-8  mt-12 w-full">
        <div>
          <Badge className="bg-blue-100 text-blue-600 px-8 py-3 rounded-lg">
            Sale 70%
          </Badge>
          <h1 className="scroll-m-20 mt-4 lg:text-6xl md:text-5xl text-3xl font-semibold lg:py-10 tracking-tight ">
            An Industrial Take on Streetwear
          </h1>
          <p className="text-sm md:text-base md:mt-4 mt-2 lg:text-lg">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <div className="flex h-16 w-36 p-4 font-bold bg-slate-800 items-center justify-center text-white mt-8 border-2 border-gray-400 rounded-lg">
            <ShoppingCartIcon className="text-2xl" />
            <p className="pl-3 text-center ">Start Shopping</p>
          </div>
          <div className="flex lg:mt-10 md:mt-6 mt-5 lg:gap-6 md:gap-4 gap-5 lg:text-3xl text-2xl  ">
            <Image
              className=""
              src={log1}
              width={200}
              height={200}
              alt="text_logo"
            />
            <Image
              className=""
              src={log2}
              width={200}
              height={200}
              alt="text_logo"
            />
            <Image
              className=""
              src={log3}
              width={200}
              height={200}
              alt="text_logo"
            />
            <Image
              className=""
              src={log4}
              width={200}
              height={200}
              alt="text_logo"
            />
          </div>
        </div>
          </div>
        <div className="bg-orange-50 w-full rounded-full  ">
          <Image
            className="md:block sm:text-2xl sm:pl-10 hidden"
            src={prod2}
            width={628}
            height={604}
            alt="main_logo"
          />
        </div>
      {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={prod2}
              width={1000}
              height={1000}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
