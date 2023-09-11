import Image, { StaticImageData } from "next/image";
function ProductCard(props: {
  title: string;
  price: number;
  img: StaticImageData | string;
  // category: string;
}) {
  return (
    <div>
      <Image src={props.img} alt="product_image" width={350} height={400} />
      <h3 className="font-semibold mt-3">{props.title}</h3>
      <p className="font-semibold">$ {props.price}</p>
      {/* <p className="font-semibold">{props.category}</p> */}
    </div>
  );
}
export default ProductCard;
