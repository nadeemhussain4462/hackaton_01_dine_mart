import Image from "next/image";
import { Badge } from "lucide-react";
import prom1 from "../../public/prom1.webp";
import prom2 from "../../public/prom2.webp";
import prom3 from "../../public/prom3.webp";

const Promotion = () => {
  return (
    <section className="mt-16">
      <h3 className="text-blue-600 text-xs font-semibold text-center">
        PROMOTIONS
      </h3>
      <h1 className="font-semibold text-base mb-4 md:text-2xl lg:text-3xl text-center mt-3">
        Our Promotions Events
      </h1>
      {/* left side  */}
      <div className="grid sm:grid-cols-1 sm:mt-6 lg:grid-cols-2 gap-x-4 ">
        <div className=" grid md:grid-rows-2 sm:grid-rows-1 gap-6 sm:mt-6 w-auto">
          <div className="flex flex-row-reverse bg-slate-200">
            <div className=" flex h-48 w-1/2 ">
              <Image
                className="event-card"
                src={prom1}
                width={300}
                height={250}
                alt="promtion_card1"
              />
            </div>
            <div className="pl-4 md:text-center md:self-center self-center w-1/2">
              <span className="px- scroll-m-20 py-16 border-b pb-2 text-base md:text-2xl lg:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                GET UP TO
                <br />
                <span> 60% </span> <br />
              </span>
              <span className="md:text-lg text-sm text-center font-light">
                For the summer season
              </span>
            </div>
          </div>
          <div className="text-center h-48 pt-9 bg-slate-800 w-full text-white">
            <h1 className="lg:text-4xl md:text-3xl text-2xl  font-semibold">
              GET 30% Off
            </h1>
            <h4 className="text-xs mt-6">USE PROMO CODE</h4>

            <h2 className="text-lg border-1 rounded-lg px-2">DINEWEEKENDSALE</h2>
          </div>
        </div>
        {/* right side  */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:mt-6 mt-3 gap-6 ">
          <div className="flex flex-col ">
            <div className=" bg-orange-100 text-center pt-4">
              <span className=" ml-4">
                Flex Sweatshirt Bomber
                <br />
                <span className="">
                  <s>$100.00</s>
                </span>
                <span className="font-bold text-lg"> $75.00</span>
              </span>
              <Image
                className=" pt-14 "
                src={prom2}
                width={300}
                height={290}
                alt="promotion_card2"
              />
            </div>
          </div>
          <div className="bg-gray-300 text-center pt-4">
            <span className=" ml-4 py-3">
              Flex Push Button Bomber <br />
            </span>
            <span>
              <s>$225.00 </s>
            </span>
            <span className="font-bold text-lg"> $190.00</span>
            <Image
              className="pt-14 "
              src={prom3}
              width={300}
              height={290}
              alt="promotion_card3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
