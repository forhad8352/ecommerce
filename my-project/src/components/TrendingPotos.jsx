import React from "react";
import Tra from "../assets/tr1.png";
import Trad from "../assets/tr2.png";
import Tradi from "../assets/tr3.png";
import Tradin from "../assets/tr4.png";
import Trading from "../assets/tr5.png";
import Tradingg from "../assets/tr6.png";
import Cha from "../assets/c1.png";
import Chai from "../assets/c2.png";
import Chair from "../assets/c3.png";

const TrendingPotos = () => {
  return (
    <div>
      {" "}
      <div className="container mx-auto">
        <div className="text-center lg:pt-32 pt-[20px] pb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#151875] font-josefin font-bold">
            Trending Products
          </h2>
        </div>

        <div className="px-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-[95%] lg:mx-0 mx-auto">
              <div className="h-[350px] bg-white drop-shadow-xl">
                <div className="bg-[#F5F6F8] mx-auto w-full h-[242px] flex items-center justify-center">
                  <img
                    className="object-contain"
                    src={Tra}
                    alt="Cantilever chair"
                  />
                </div>
                <div className="pt-5 text-center">
                  <h2 className="text-lg md:text-xl text-[#151875] font-lato font-bold">
                    Cantilever chair
                  </h2>
                  <p className="text-sm md:text-base text-[#151875] font-lato font-bold">
                    $26.00
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[95%] lg:mx-0 mx-auto lg:pt-0 pt-[20px]">
              <div className="h-[350px] bg-white drop-shadow-xl">
                <div className="bg-[#F5F6F8] mx-auto w-full h-[242px] flex items-center justify-center">
                  <img
                    className="object-contain"
                    src={Trad}
                    alt="Cantilever chair"
                  />
                </div>
                <div className="pt-5 text-center">
                  <h2 className="text-lg md:text-xl text-[#151875] font-lato font-bold">
                    Cantilever chair
                  </h2>
                  <p className="text-sm md:text-base text-[#151875] font-lato font-bold">
                    $26.00
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[95%] lg:mx-0 mx-auto lg:pt-0 pt-[20px]">
              <div className="h-[350px] bg-white drop-shadow-xl">
                <div className="bg-[#F5F6F8] mx-auto w-full h-[242px] flex items-center justify-center">
                  <img
                    className="object-contain"
                    src={Tradi}
                    alt="Cantilever chair"
                  />
                </div>
                <div className="pt-5 text-center">
                  <h2 className="text-lg md:text-xl text-[#151875] font-lato font-bold">
                    Cantilever chair
                  </h2>
                  <p className="text-sm md:text-base text-[#151875] font-lato font-bold">
                    $26.00
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[95%] lg:mx-0 mx-auto lg:pt-0 pt-[20px]">
              <div className="h-[350px] bg-white drop-shadow-xl">
                <div className="bg-[#F5F6F8] mx-auto w-full h-[242px] flex items-center justify-center">
                  <img
                    className="object-contain"
                    src={Tradin}
                    alt="Cantilever chair"
                  />
                </div>
                <div className="pt-5 text-center">
                  <h2 className="text-lg md:text-xl text-[#151875] font-lato font-bold">
                    Cantilever chair
                  </h2>
                  <p className="text-sm md:text-base text-[#151875] font-lato font-bold">
                    $26.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 flex flex-wrap justify-between items-center">
          <div className="lg:w-[30%] w-full">
            <div className="relative border-[1px] border-[#FFF6FB] bg-[#FFF6FB] p-[25px] pb-[190px]">
              <h6 className="font-josefin font-semibold text-[26px] text-[#151875]">
                23% off in all products
              </h6>
              <button className="font-lato font-semibold text-[16px] text-[#FB2E86] border-b-[2px] border-[#FB2E86]">
                Shop Now
              </button>
              <div className="absolute bottom-0 right-0">
                <img src={Trading} alt="" />
              </div>
            </div>
          </div>

          <div className="lg:w-[35%] w-full">
            <div className="relative border-[1px] border-[#EEEFFB] bg-[#EEEFFB] p-[25px] pb-[190px]">
              <h6 className="font-josefin font-semibold text-[26px] text-[#151875]">
                23% off in all products
              </h6>
              <button className="font-lato font-semibold text-[16px] text-[#FB2E86] border-b-[2px] border-[#FB2E86]">
                View Collection
              </button>
              <div className="absolute bottom-0 right-0">
                <img src={Tradingg} alt="" />
              </div>
            </div>
          </div>

          <div className="lg:w-[25%] w-full mt-5 lg:mt-0">
            <div className="flex justify-evenly items-center">
              <img
                src={Cha}
                className="px-[20px] py-[5px] bg-[#F5F6F8]"
                alt="seat"
              />
              <div className="">
                <h5 className="font-josefin font-semibold text-[16px] text-[#151875]">
                  Executive Seat chair
                </h5>
                <h6 className="font-josefin font-normal text-[12px] text-[#151875] line-through">
                  $32.00
                </h6>
              </div>
            </div>
            <div className="flex justify-evenly items-center my-5">
              <img
                src={Chai}
                className="px-[20px] py-[5px] bg-[#F5F6F8]"
                alt="seat2"
              />
              <div className="">
                <h5 className="font-josefin font-semibold text-[16px] text-[#151875]">
                  Executive Seat chair
                </h5>
                <h6 className="font-josefin font-normal text-[12px] text-[#151875] line-through">
                  $32.00
                </h6>
              </div>
            </div>
            <div className="flex justify-evenly items-center">
              <img
                src={Chair}
                className="px-[20px] py-[4px] bg-[#F5F6F8]"
                alt="seat3"
              />
              <div className="">
                <h5 className="font-josefin font-semibold text-[16px] text-[#151875]">
                  Executive Seat chair
                </h5>
                <h6 className="font-josefin font-normal text-[12px] text-[#151875] line-through">
                  $32.00
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPotos;
