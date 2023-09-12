import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mock";
const AllProducts = () => {
  return (
    <div className="flex justify-evenly flex-wrap mt-10">
      {Products.map((Product) => (
        <ProductCard
          key={Product.id}
          title={Product.name}
          price={Product.price}
          img={Product.Image}
          category={Product.category}
        />
      ))}
    </div>
  );
};

export default AllProducts;
