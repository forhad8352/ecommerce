import React from "react";
import Frm1 from "../assets/frame1.png";
import Frm2 from "../assets/frame2.png";
import Frm3 from "../assets/frame3.png";
import { BsVectorPen } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
const LatestBlog = () => {
  return (
    <div className=" py-[40px]">
      <div className="container mx-auto">
        <div className="py-[30px]">
          <h3 className=" font-hakto font-semibold text-[35px] text-[#151875] text-center">
            Leatest Blog
          </h3>
        </div>
        <div className=" lg:flex justify-between">
          <div className="lg:w-[32%] py-2">
            <div className=" px-4 group shadow-xl rounded-[10px] ">
              <img src={Frm1} alt="" />
              <div className=" flex gap-x-[30px]">
                <div className="flex gap-x-2 items-center">
                  <BsVectorPen className=" text-[#FB2E86]" />
                  <p className=" font-hakto font-normal text-[#151875] text-[14px]">
                    SaberAli
                  </p>
                </div>
                <div className=" flex gap-x-2 items-center">
                  <FaRegCalendarAlt className=" text-[#FFA454]" />
                  <p className=" font-hakto font-normal text-[#151875] text-[14px]">
                    21 August,2020
                  </p>
                </div>
              </div>
              <div className=" py-[20px]">
                <h4
                  className=" font-hakto font-medium text-[#151875] text-[16px]
                                  group-hover:text-[#FB2E86] duration-300 py-[20px]"
                >
                  Top esssential Trends in 2021
                </h4>
                <p className=" font-hakto font-medium text-[#72718F] text-[16px]">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>
                <button
                  className="border-b-[2px] border-[#151875] font-hakto font-medium text-[#151875] text-[16px]
                                   group-hover:text-[#FB2E86] group-hover:border-[#FB2E86] duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-[32%] py-2">
            <div className=" px-4 group shadow-xl rounded-[10px]">
              <img src={Frm2} alt="" />
              <div className=" flex gap-x-[30px]">
                <div className="flex gap-x-2 items-center">
                  <BsVectorPen className=" text-[#FB2E86]" />
                  <p className=" font-hakto font-normal text-[#151875] text-[14px]">
                    SaberAli
                  </p>
                </div>
                <div className=" flex gap-x-2 items-center">
                  <FaRegCalendarAlt className=" text-[#FFA454]" />
                  <p className=" font-hakto font-normal text-[#151875] text-[14px]">
                    21 August,2020
                  </p>
                </div>
              </div>
              <div className=" py-[20px]">
                <h4
                  className=" font-hakto font-medium text-[#151875] text-[16px]
                     group-hover:text-[#FB2E86] duration-300 py-[20px]"
                >
                  Top esssential Trends in 2021
                </h4>
                <p className=" font-hakto font-medium text-[#72718F] text-[16px]">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>
                <button
                  className="border-b-[2px] border-[#151875] font-hakto font-medium text-[#151875] text-[16px]
                     group-hover:text-[#FB2E86] group-hover:border-[#FB2E86] duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-[32%] py-2">
            <div className=" px-4 group shadow-xl rounded-[10px]">
              <img src={Frm3} alt="" />
              <div className=" flex gap-x-[30px]">
                <div className="flex gap-x-2 items-center">
                  <BsVectorPen className=" text-[#FB2E86]" />
                  <p className=" font-hakto font-normal text-[#151875] text-[14px]">
                    SaberAli
                  </p>
                </div>
                <div className=" flex gap-x-2 items-center">
                  <FaRegCalendarAlt className=" text-[#FFA454]" />
                  <p className=" font-hakto font-normal text-[#151875] text-[14px]">
                    21 August,2020
                  </p>
                </div>
              </div>
              <div className=" py-[20px]">
                <h4
                  className=" font-hakto font-medium text-[#151875] text-[16px]
                     group-hover:text-[#FB2E86] duration-300 py-[20px]"
                >
                  Top esssential Trends in 2021
                </h4>
                <p className=" font-hakto font-medium text-[#72718F] text-[16px]">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>
                <button
                  className="border-b-[2px] border-[#151875] font-hakto font-medium text-[#151875] text-[16px]
                     group-hover:text-[#FB2E86] group-hover:border-[#FB2E86] duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
