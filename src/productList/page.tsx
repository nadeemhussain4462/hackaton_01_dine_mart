import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mock";

const ProductList = () => {
  const productChecks = Products.slice(0, 3);
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
      <div className="flex flex-col items-center md:flex-row gap-8 mt-10 ">
        {productChecks.map((Product) => (
          <ProductCard
            key={Product.id}
            title={Product.name}
            price={Product.price}
            img={Product.Image}
            category={Product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
