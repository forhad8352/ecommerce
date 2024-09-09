import React, { useContext, useState } from "react";
import { IoGridSharp } from "react-icons/io5";
import { FaList, FaRegHeart, FaCartPlus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { TbZoomIn } from "react-icons/tb";
import Imm from "../assets/latest.png";
import { ApiData } from "../components/ContextApi";
import late from "../assets/latest.png";
import { Link } from "react-router-dom";

const ListShop = () => {
  let data = useContext(ApiData);

  return (
    <div>
      <div className=" bg-[#F6F5FF] py-[90px]">
        <div className="container mx-auto">
          <div className="">
            <h2 className=" font-hakto font-semibold text-[#101750] text-[35px]">
              Shop List
            </h2>
            <h2>
              <Link to="/">
                <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                  Home.Pages
                </span>
              </Link>

              <Link to="/">
                <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                  .Shop List
                </span>
              </Link>
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className=" lg:flex justify-between items-center mt-[120px] mb-[140px]">
          <div className="lg:w-[50%]">
            <h4 className=" font-hakto font-semibold text-[#151875] text-[22px]">
              Ecommerce Acceories & Fashion item{" "}
            </h4>
            <p className=" font-hakto font-normal text-[#8A8FB9] text-[12px]">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div className="lg:w-[50%]">
            <div className=" lg:flex justify-between">
              <div className=" flex justify-between">
                <div className=" flex gap-x-[10px] items-center">
                  <label
                    htmlFor=""
                    className="font-hakto font-medium text-[#3F509E] text-[16px]"
                  >
                    Per Page:
                  </label>
                  <select
                    //     onChange={handelshowchange}
                    name=""
                    id=""
                    className="border-[1px] border-[#E7E6EF] w-[80px] h-[40px] outline-none font-hakto font-medium text-[#3F509E] text-[16px]"
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                  </select>
                </div>
                <div className="flex gap-x-[10px] items-center">
                  <h4 className=" font-hakto font-medium text-[#3F509E] text-[16px]">
                    Sort By:
                  </h4>
                  <input
                    type="text"
                    className=" border-[1px] border-[#E7E6EF] w-[100px] h-[40px] outline-none font-hakto font-medium text-[#8A8FB9] text-[12px] pl-[5px]"
                    placeholder="Best Match "
                  />
                </div>
              </div>
              <div className="flex gap-x-[10px] items-center lg:my-0 my-[10px]">
                <div className=" flex gap-x-[10px] items-center">
                  <h3 className=" font-hakto font-medium text-[#3F509E] text-[16px]">
                    View:
                  </h3>
                  <Link to="/ListGrid">
                    <div className="">
                      <IoGridSharp />
                    </div>
                  </Link>
                  <Link to="/ListShop">
                    <div className="">
                      <FaList />
                    </div>
                  </Link>
                </div>
                <input
                  type="text"
                  className=" border-[1px] border-[#E7E6EF] lg:w-[200px] w-full h-[40px] outline-none "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            {data.map((item) => (
              <div className=" border-[1px]  px-4 py-4 my-[25px] shadow-sm">
                <div className=" flex gap-x-[40px] items-center">
                  <div className="">
                    <img src={item.thumbnail} alt="" />
                  </div>
                  <div className=" w-[50%]">
                    <div className=" flex  items-center gap-x-[20px] py-[8px]">
                      <h3 className=" font-hakto font-medium text-[#111C85] text-[20px]">
                        {item.title}
                      </h3>
                      <div className=" flex gap-x-[10px] ">
                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                        <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                      </div>
                    </div>
                    <div className=" lg:flex gap-x-[20px] items-center py-4">
                      <div className="flex gap-x-[20px] items-center">
                        <h5 className=" font-hakto font-normal text-[16px] text-[#111C85] hover:text-[#FF2AAA] duration-300">
                          ${item.price}
                        </h5>
                        <h5 className=" font-hakto font-normal text-[16px] text-[#FF2AAA] hover:text-[#111C85] duration-300">
                          ${item.price}
                        </h5>
                      </div>
                      <div className=" flex gap-x-[10px]">
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <IoMdStarOutline />
                      </div>
                    </div>
                    <p className=" font-hakto font-light text-[17px] text-[#9295AA]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Magna in est adipiscing in phasellus non in justo.
                    </p>
                    <div className=" flex gap-x-[40px] pt-[18px]">
                      <FaCartPlus />
                      <TbZoomIn />
                      <FaRegHeart />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="">
            <div className=" border-[1px]  px-4 py-4 my-[25px] shadow-sm">
              <div className=" flex gap-x-[40px] items-center">
                <div className="">
                  <img src={Imm} alt="" />
                </div>

                <div className=" w-[50%]">
                  <div className=" flex  items-center gap-x-[20px] py-[8px]">
                    <h3 className=" font-hakto font-medium text-[#111C85] text-[20px]">
                      title
                    </h3>
                    <div className=" flex gap-x-[10px] ">
                      <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                      <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                      <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                    </div>
                  </div>
                  <div className=" lg:flex gap-x-[20px] items-center py-4">
                    <div className="flex gap-x-[20px] items-center">
                      <h5 className=" font-hakto font-normal text-[16px] text-[#111C85] hover:text-[#FF2AAA] duration-300">
                        $49
                      </h5>
                      <h5 className=" font-hakto font-normal text-[16px] text-[#FF2AAA] hover:text-[#111C85] duration-300">
                        $49
                      </h5>
                    </div>
                    <div className=" flex flex-wrap justify-between gap-x-[10px] text-[#FFC416]">
                      rating
                    </div>
                  </div>
                  <p className=" font-hakto font-light text-[17px] text-[#9295AA]">
                    descreption
                  </p>
                  <div className=" flex gap-x-[40px] pt-[18px]">
                    <div
                      //   onClick={() => cartitem(item)}
                      className=" cursor-pointer"
                    >
                      <FaCartPlus />
                    </div>
                    <TbZoomIn />
                    <div
                      //   onClick={() => Lovecart(item)}
                      className=" cursor-pointer"
                    >
                      <FaRegHeart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ListShop;
