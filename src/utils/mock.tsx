import {Product} from "@/utils/types";
import prod1 from "./public/prod1.png";
import Image, {StaticImageData} from "next/image";


export const Products : Product[]=[{
    id: 1,
    name: "prod1",
    price: 105,
    category: "female",
    Image:prod1,
    
},
{
    id: 2,
    name: "prod2",
    price: 110,
    category: "female",
    Image: prod1,
    
},
{
    id: 3,
    name: "prod3",
    price: 115,
    category: "female",
    Image: prod1,
    
},
{
    id: 4,
    name: "prod4",
    price: 120,
    category: "male",
    Image: prod1,
    
},
{
    id: 5,
    name: "prod5",
    price: 125,
    category: "male",
    Image: prod1,
    
},
{
    id: 6,
    name: "prod6",
    price: 130,
    category: "male",
    Image: prod1,
    
},
{
    id: 7,
    name: "prod7",
    price: 130,
    category: "kid",
    Image: prod1,
    
},
{
    id: 8,
    name: "prod8",
    price: 130,
    category: "kid",
    Image: prod1,
    
}];
