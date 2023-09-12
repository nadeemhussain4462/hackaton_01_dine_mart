import Image from "next/image";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-blue-50">
      <div className="hidden lg:block">
        <div className="flex justify-between items-center h-20 px-28">
          <Link href={"/"}>
            <Image src={"/Logo.webp"} alt="logo" height={100} width={100} />
          </Link>
          <ul className="grid grid-cols-4 lg:gap-x-2 md:gap-x-1.5 scroll-m-20 text-sm font-normal tracking-tight">
            <li>
              <Link href={"category/female"}>Female</Link>
            </li>
            <li>
              <Link href={"category/male"}>Male</Link>
            </li>
            <li>
              <Link href={"category/kids"}>Kids</Link>
            </li>
            <li>
              <Link href={"/products"}>All Products</Link>
            </li>
          </ul>
          <div className="flex content-center bg-white border px-1 text-xs font-extralight tracking-tight h-6 rounded-md">
            <SearchIcon className="h-4 w-4 pt-1" />
            <input type=" text" placeholder=" what you looking for" />
          </div>
          <div className="h-11 w-11 flex justify-center items-center bg-slate-300 text-gray-500 rounded-full relative hover:scale-110 duration-300 ease-in">
            <ShoppingCartIcon />
            <span className="flex h-4 w-4 bg-red-500 text-white rounded-full items-center justify-center absolute bottom-7 left-7">
              0
            </span>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="flex justify-between items-center h-20 ">
          <div className="ml-8">
            <Image src={"/Logo.webp"} alt="logo" height={100} width={100} />
          </div>
          <div className="mr-8">
            <RiMenu3Fill className="h-6 w-6" />
          </div>
        </div>
        <div className="hidden">
          <div className=" flex flex-col items-center justify-center">
            <ul className="flex flex-col text-xl text-center">
              <li className="p-2">
                <Link href={"category/female"}>Female</Link>
              </li>
              <li className="p-2">
                <Link href={"category/male"}>Male</Link>
              </li>
              <li className="p-2">
                <Link href={"category/kids"}>Kids</Link>
              </li>
              <li className="p-2">
                <Link href={"products"}>All Products</Link>
              </li>
            </ul>
            <div className=" flex justify-center items-center text-center bg-slate-300 text-gray-500 rounded-full p-3 relative hover:scale-110 duration-300 ease-in">
              <ShoppingCartIcon />
              <span className="flex h-4 w-4 bg-red-500 text-white rounded-full items-center justify-center absolute bottom-8 left-6">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
