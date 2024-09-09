import React from "react";
import Shop from "../assets/shopex1.png";
import Shoppp from "../assets/shopex2.png";
import Shopppp from "../assets/shopex3.png";
import Shopp from "../assets/shopex4.png";
const Shopex = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:py-[58px]">
        <h2 className="lg:text-[42px] text-[38px] text-center text-[#151875] font-josefin font-bold">
          What Shopex Offer!
        </h2>
      </div>

      <div className="">
        <div className="lg:flex justify-between lg:mx-0 mx-[15px]">
          <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0">
            <div className="bg-[#FFFFFF] drop-shadow-xl">
              <div className="lg:pt-[56px] pt-[10px] lg:px-[120px]  lg:pb-[27px] pb-[10px] text-center">
                <img src={Shop} className="h-[70px] w-[70px] mx-auto" alt="" />
              </div>
              <div className="text-center">
                <h4 className=" pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold">
                  24/7 Support
                </h4>
                <p className=" pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0 ">
            <div className="bg-[#FFFFFF] drop-shadow-xl">
              <div className="lg:pt-[56px] pt-[10px] lg:px-[120px] lg:pb-[27px] pb-[10px] text-center">
                <img src={Shopp} className="h-[70px] w-[70px] mx-auto" alt="" />
              </div>
              <div className="text-center">
                <h4 className=" pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold">
                  24/7 Support
                </h4>
                <p className=" pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0 ">
            <div className="bg-[#FFFFFF] drop-shadow-xl">
              <div className="lg:pt-[56px] pt-[10px] lg:px-[120px] lg:pb-[27px] pb-[10px] text-center">
                <img
                  src={Shoppp}
                  className="h-[70px] w-[70px] mx-auto"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h4 className=" pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold">
                  24/7 Support
                </h4>
                <p className=" pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[24%] mt-[20px] lg:mt-0 ">
            <div className="bg-[#FFFFFF] drop-shadow-xl">
              <div className="lg:pt-[56px] pt-[10px] lg:px-[120px]  lg:pb-[27px] pb-[10px] text-center">
                <img
                  src={Shopppp}
                  className="h-[70px] w-[70px] mx-auto"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h4 className=" pb-[20px] text-[22px] text-[#151875] font-josefin font-semibold">
                  24/7 Support
                </h4>
                <p className=" pb-[45px] w-[70%] mx-auto text-[16px] text-[rgba(26,11,91,0.4)] font-josefin font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopex;
