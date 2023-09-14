import { Products } from "@/utils/mock";
import Image, { StaticImageData } from "next/image";

const getProductsDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

const sizes = ["xs", "sm", "md", "lg", "xl"];
export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);
  return (
    <div className="flex mt-10">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
          {/* {left side} */}
          <div>
            <Image src={product.Image} alt={product.name} />
          </div>
          {/* {Right side} */}
          <div>
            <div>
              <h1 className="text-2xl">{product.name}</h1>
              <h2 className="text-base font-semibold text-gray-400">
                {product.tagline}
              </h2>
            </div>
            <div>
              <h3 className="mt-6 text-[10px] font-semibold">SELECT SIZE</h3>
              {/* {sizes} */}
              <div className="flex gap-x-3 mt-3">
                {sizes.map((item) => {
                  return (
                    <div className="flex justify-center items-center rounded-full border hover:shadow-xl h-7 w-7">
                      <span className="text-[12px] text-center font-semibold text-gray-500">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* {Quantity} */}
              <div className="flex mt-6">
                <h3 className="text-[12px] font-semibold self-center">Quantity :</h3>
                <div>1</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
