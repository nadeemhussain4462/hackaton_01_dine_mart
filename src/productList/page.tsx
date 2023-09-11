// import ProductCard from "@/components/ProductCard";
import ProductCard from "@/components/ProductCard";
import Image, { StaticImageData } from "next/image";
import prod1 from "/public/prod1.png";
import female9 from "/public/female9.png";
import prod3 from "/public/prod3.png";

const ProductList = () => {
  return (
    <div>
      <div className="mt-16">
        <h3 className="text-blue-600 text-xs font-semibold text-center">
          PRODUCTS
        </h3>
        <h1 className="font-semibold text-base mb-4 md:text-2xl lg:text-3xl text-center mt-3 capitalize">
          Check what we have
        </h1>
      </div>
      <div className="flex gap-8 mt-10">
        <ProductCard title="Brushed Raglan Sweatshirt" price={115.00} img={prod1}/>
        <ProductCard title="Summer jacket " price={140.00} img={female9} />
        <ProductCard title="Imperial Alpaca Hoodie" price={120.00} img={prod3} />
      </div>
    </div>
  );
};

export default ProductList;
