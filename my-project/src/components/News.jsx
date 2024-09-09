import React from "react";
import Neww from "../assets/market.png";
const News = () => {
  return (
    <div>
      <div className="mt-[100px]">
        <div className="bg-slate-600 text-center py-[100px] bg-cover bg-center lg:bg-cover">
          <h3 className="text-[35px] text-[#151875] font-josefin font-bold ">
            Get Leatest Update By Subscribe <br /> 0ur Newslater
          </h3>
          <button className="text-[17px] text-[#fff] border-[2px] border-[#FB2E86] font-josefin font-normal bg-[#FB2E86] py-[16px] px-[40px] rounded-[5px] hover:text-[#FB2E86] hover:bg-[#fff] ">
            Shop Now
          </button>
        </div>

        <div className=" flex justify-center lg:mt-[96px] mt-[50px] ">
          <img src={Neww} alt="" />
        </div>
      </div>
    </div>
  );
};

export default News;
