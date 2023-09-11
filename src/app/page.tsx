import Promotion from "@/promotion/page";
import ProductCard from "@/components/ProductCard";
import { Product } from '../utils/types';
import Uniqe from "@/uniqe/page";
import Hero from "@/hero/page";
import ProductList from "@/productList/page";
// import {ProductList} from "@/views/ProductList";



export default function Home() {
  return (
    <div>
      <h1>
        <Hero/>
        <Promotion />
        <ProductList />
        <Uniqe />
        
      </h1>
    </div>
  );
}
