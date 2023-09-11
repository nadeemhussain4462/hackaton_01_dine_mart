import Image, { StaticImageData } from "next/image";

export type Product = {
  // image: StaticImageData;
  id: number;
  name: string;
  price: number;
  category: string;
  Image: string | StaticImageData;
};
