import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";
import ProductCard from "@/components/ProductCard";

const getProductsDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

export default function Page({ params }: { params: { id: number } }) {
  const result = getProductsDetail(params.id);
  return (
    <div className="flex justify-evenly mt-10">
      {/* {result.length > 0 ? (
        result.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.Image as StaticImageData}
            category={product.category}
          />
        ))
      ) : (
        <p>No Products Found</p>
      )} */}
      This is Product Detail Page for Product Id{params.id}
    </div>
  );
}
