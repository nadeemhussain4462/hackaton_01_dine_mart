import { Products } from "@/utils/mock";
import Image, { StaticImageData } from "next/image";

const getProductsDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

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
              <h2 className="text-base font-semibold text-gray-400">{product.tagline}</h2>
            </div>
            <div>
              <h3 className="mt-6 text-xs font-semibold">SELECT SIZE</h3>
              <div></div>
            </div>
            <p>Price {product.price}</p>
            <p>Category {product.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
