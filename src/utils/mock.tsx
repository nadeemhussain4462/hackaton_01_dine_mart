import Image, { StaticImageData } from "next/image";
import { Product } from "@/utils/types";
import prod1 from "/public/prod1.png";
import prod3 from "/public/prod3.png";
import male1 from "/public/male1.png";
import male2 from "/public/male2.png";
import female4 from "/public/female4.png";
import female5 from "/public/female5.png";
import female6 from "/public/female6.png";
import female7 from "/public/female7.png";
import female8 from "/public/female8.png";
import female9 from "/public/female9.png";

export const Products: Product[] = [
  {
    id: 1,
    name: "Brushed Raglan Sweatshirt",
    price: 105,
    tagline: "Sweatshirt",
    category: "female",
    Image: prod1,
  },
  {
    id: 2,
    name: "Brushed Bomber",
    price: 110,
    tagline: "Shirt",
    category: "female",
    Image: female9,
  },
  {
    id: 3,
    name: "Flex Sweatshirt",
    price: 115,
    tagline: "Sweatshirt",
    category: "female",
    Image: prod3,
  },
  {
    id: 4,
    name: "Flex Push Button Bomber",
    price: 120,
    tagline: "Button Bomber",
    category: "male",
    Image: male1,
  },
  {
    id: 5,
    name: "Flex Sweat_Tshirt",
    price: 125,
    tagline: "Sweat_Tshirt",
    category: "male",
    Image: male2,
  },
  {
    id: 6,
    name: "Imperial Alpaca Hoodie",
    price: 130,
    tagline: "Alpaca Hoodie",
    category: "female",
    Image: female7,
  },
  {
    id: 7,
    name: "Muscle Tank",
    price: 130,
    tagline: "Muscle Tank",
    category: "female",
    Image: female8,
  },
  {
    id: 8,
    name: "Pink Fleece Sweatpants",
    price: 130,
    tagline:"Sweatpants",
    category: "kid",
    Image: female5,
  },
  {
    id: 9,
    name: "Lite Sweatpants",
    price: 130,
    tagline:"string",
    category: "female",
    Image: female6,
  },
  {
    id: 10,
    name: "White Fleece Sweatpants",
    price: 130,
    tagline:"string",
    category: "kid",
    Image: female4,
  },
];
