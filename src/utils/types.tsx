import Image, { StaticImageData } from "next/image";

export type Product = {
  id: number;
  name: string;
  price: number;
  tagline: string;
  category: string;
  Image: string | StaticImageData;
};
