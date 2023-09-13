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
          <div>
            <Image src={product.Image} alt={product.name} />
          </div>
          <div>
            Product Detail
            <p>Name {product.name}</p>
            <p>Price {product.price}</p>
            <p>Category {product.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
