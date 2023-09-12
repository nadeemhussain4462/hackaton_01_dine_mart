import { Button } from "components/ui/button";
import React from "react";

export default function AddToCart() {
  return (
    <div>
      <Button className="flex h-10 w-30 p-4 font-light hover:bg-cyan-900 bg-slate-800 text-white mt-1  rounded-xl">
        <p className=" text-center text-xs mx-auto">Add To Cart</p>
      </Button>
    </div>
  );
}
