import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";
import ProductCard from "@/components/ProductCard";

const getProductByCategory = (category: string) => {
  return Products.filter((product) => product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductByCategory(params.slug);
  return (
    <div className="flex justify-evenly mt-10">
      {result.length > 0 ? (
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
      )}
    </div>
  );
}
