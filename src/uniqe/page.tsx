import React from "react";
import Image from "next/image";
import female7 from "/public/female7.png";
import { Button } from "components/ui/button";

const Uniqe = () => {
  return (
    <div className="mt-10 md:mt-40">
      <div className="flex justify-center md:justify-end">
        <div className="w-[200px] md:w-[500px] md:mr-20">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>
      </div>
      {/* <div className="grid "> */}
      <div className="grid lg:grid-cols-[500px,1fr] sm:grid-cols-1  mt-10">
        {/* left side */}
        <div className="grid sm:grid-cols-2 text-start md:gap-12 space-x-1 p-8">
          <div>
            <h1 className="text-baes font-semibold mb-4">
              Using Good Quality Materials
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <h1 className="text-baes font-semibold mb-4">
              100% Handmade Products
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div>
            <h1 className="text-baes font-semibold mb-4 mt-6">
              Modern Fashion Design
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <h1 className="text-baes font-semibold mb-4 mt-6">
              Discount for Bulk Orders
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>
        {/* right side  */}
        <div className="grid lg:grid-cols-2 sm:grid-cols-2">
          <div className="p-10">
            <Image
              className=""
              src={"/female7.png"}
              alt="uniqe_logo"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <h4 className="scroll-m-20 text-sm md:text-xl sm:m-8 font-extralight break-all tracking-tighter md:tracking-widest mx-10 md:mx-0">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </h4>
            <Button className="flex h-12 w-36 p-4 font-light bg-slate-800 items-center justify-center text-white mt-1  rounded-lg">
              <p className="pl-3 text-center text-xs ">See All Products</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-36">
        <h2 className="text-center tracking-widest sm:text-2xl lg:text-3xl font-bold">Subscribe Our Newsletter</h2>
        <p className="text-center mt-5 font-extralight text-base">Get the latest information and promo offers directly</p>
        <div className="flex lg:flex-row items-center justify-center gap-4 mt-8 flex-col">
          <input className="border border-black p-2 rounded-lg px-10 text-xs text-gray-900 font-light" type="text" placeholder="input email address" />
          <Button className="flex h-9 w-32 p-4 font-light bg-slate-800 items-center justify-center text-white mt-1  rounded-lg">
            <p className="pl-3 text-center text-xs ">Get Started</p>
          </Button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Uniqe;
