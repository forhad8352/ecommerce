import React from "react";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomIn } from "react-icons/md";
import Lat from "../assets/latest.png";
import Late from "../assets/latest1.png";
import Latest from "../assets/latest3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto">
      <div className=" text-center">
        <h2 className="text-[42px] text-[#151875] font-josefin font-bold pb-9">
          Leatest Products
        </h2>
      </div>
      <Slider {...settings}>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 group">
          <div className="drop-shadow-xl">
            <div className="w-[360px] h-[306px] bg-[#F7F7F7] group-hover:bg-transparent duration-500 overflow-hidden relative ">
              <div className="pt-[33px] pb-[8px] pl-[73px] pr-[64px]">
                <img src={Lat} alt="" />
              </div>

              <div className="">
                <div className="flex justify-between bg-[#fff] pb-[20px] pt-[5px]">
                  <h4 className="text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]">
                    Comfort Handy Craft
                  </h4>
                  <h6 className="text-[16px] text-[#151875] font-josefin font-normal">
                    $42.00
                  </h6>
                </div>
              </div>

              <div className="absolute bottom-[65px] left-[-30px] group-hover:left-[20px]  duration-500">
                <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <BsCart />
                </div>

                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <CiHeart />
                </div>

                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <MdOutlineZoomIn />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 group">
          <div className="drop-shadow-xl">
            <div className="w-[360px] h-[306px] bg-[#F7F7F7] group-hover:bg-transparent duration-500 overflow-hidden relative">
              <div className="pt-[33px] pb-[8px] pl-[73px] pr-[64px]">
                <img src={Late} alt="" />
              </div>

              <div className="">
                <div className="flex justify-between bg-[#fff] pb-[20px] pt-[5px]">
                  <h4 className="text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]">
                    Comfort Handy Craft
                  </h4>
                  <h6 className="text-[16px] text-[#151875] font-josefin font-normal">
                    $42.00
                  </h6>
                </div>
              </div>

              <div className="absolute bottom-[65px] left-[-30px] group-hover:left-[20px]  duration-500">
                <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <BsCart />
                </div>

                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <CiHeart />
                </div>

                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <MdOutlineZoomIn />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 group">
          <div className="drop-shadow-xl">
            <div className="w-[360px] h-[306px] bg-[#F7F7F7] group-hover:bg-transparent duration-500 overflow-hidden relative">
              <div className="pt-[33px] pb-[8px] pl-[73px] pr-[64px]">
                <img src={Lat} alt="" />
              </div>

              <div className="">
                <div className="flex justify-between bg-[#fff] pb-[20px] pt-[5px]">
                  <h4 className="text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]">
                    Comfort Handy Craft
                  </h4>
                  <h6 className="text-[16px] text-[#151875] font-josefin font-normal">
                    $42.00
                  </h6>
                </div>
              </div>

              <div className="absolute bottom-[65px] left-[-30px] group-hover:left-[20px]  duration-500">
                <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <BsCart />
                </div>

                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <CiHeart />
                </div>

                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <MdOutlineZoomIn />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 group">
          <div className="drop-shadow-xl">
            <div className="w-[360px] h-[306px] bg-[#F7F7F7] group-hover:bg-transparent duration-500 overflow-hidden relative">
              <div className="pt-[33px] pb-[8px] pl-[73px] pr-[64px]">
                <img src={Latest} alt="" />
              </div>

              <div className="">
                <div className="flex justify-between bg-[#fff] pb-[20px] pt-[5px]">
                  <h4 className="text-[16px] text-[#151875] font-josefin font-normal border-b-[1px] border-[#EEEFFB]">
                    Comfort Handy Craft
                  </h4>
                  <h6 className="text-[16px] text-[#151875] font-josefin font-normal">
                    $42.00
                  </h6>
                </div>
              </div>

              <div className="absolute bottom-[65px] left-[-30px] group-hover:left-[20px]  duration-500">
                <div className="text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <BsCart />
                </div>

                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <CiHeart />
                </div>

                <div className=" text-[#1DB4E7] h-[25px] w-[25px] translate-y-[-4px] rounded-[50%] hover:bg-[#EEEFFB] hover:text-[#2F1AC4] duration-500">
                  <MdOutlineZoomIn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default LatestProduct;
