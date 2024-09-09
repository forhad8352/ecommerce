import React, { useContext, useState } from "react";
import { IoGridSharp } from "react-icons/io5";
import { FaList, FaRegHeart, FaCartPlus } from "react-icons/fa";
import { TbZoomIn } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router-dom";
import Late from "../assets/latest4.png";
import { ApiData } from "../components/ContextApi";
import Page from "../components/pagination/Page";
import PaginationArea from "../components/pagination/PaginationArea";

const ListGrid = () => {
  let data = useContext(ApiData);

  let [pageStart, setPageStart] = useState(1);
  let [perPage, setPerPage] = useState(8);

  let lastPage = pageStart * perPage;
  let firstPage = lastPage - perPage;

  let AllPage = data.slice(firstPage, lastPage);

  let pageNumber = [];
  for (let i = 0; i < Math.ceil(data.length / perPage); i++) {
    pageNumber.push(i);
  }
  let paginate = (pageNumber) => {
    setPageStart(pageNumber + 1);
  };
  let next = () => {
    if (pageStart < pageNumber.length) {
      setPageStart((state) => state + 1);
    }
  };
  let prev = () => {
    if (pageStart > 1) {
      setPageStart((state) => state - 1);
    }
  };
  return (
    <div>
      <div>
        <div className="bg-[#F6F5FF] py-[100px] ">
          <div className="container mx-auto">
            <div className="">
              <h2 className=" font-hakto font-semibold text-[#101750] text-[35px]">
                Shop Grid Default
              </h2>
              <h2>
                <Link to="/">
                  <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                    Home.Pages
                  </span>
                </Link>{" "}
                <Link to="/">
                  <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                    .Shop Grid Default
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
                  <div className="flex gap-x-[10px] items-center">
                    <label
                      htmlFor=""
                      className="font-hakto font-medium text-[#3F509E] text-[16px]"
                    >
                      Per Page:
                    </label>
                    <select
                      name=""
                      id=""
                      className="border-[1px] border-[#E7E6EF] w-[80px] h-[40px] outline-none font-hakto font-medium text-[#3F509E] text-[16px]"
                    >
                      <option value="8">8</option>
                      <option value="12">12</option>
                      <option value="16">16</option>
                    </select>
                  </div>
                  <div className="flex gap-x-[10px] items-center">
                    <h4 className=" font-hakto font-medium text-[#3F509E] text-[16px]">
                      Sort By:
                    </h4>
                    <input
                      type="text"
                      className=" border-[1px] border-[#E7E6EF] w-[100px] h-[40px] outline-none font-hakto 
                                font-medium text-[#8A8FB9] text-[12px] pl-[5px]"
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
            {/* <div className=" flex flex-wrap">
             
              <div className="w-[24%] flex  flex-wrap">
                <div className=" group overflow-hidden">
                  <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                    <div className=" w-[90%] justify-center">
                      <img src={Late} className="py-[40px] w-full " alt="" />
                    </div>

                    <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">
                      <div
                        
                        className="  cursor-pointer"
                      >
                        <FaCartPlus className=" text-[40px] py-[10px]" />
                      </div>
                      <TbZoomIn className=" text-[40px] py-[10px]" />
                      <div
                       
                        className=" cursor-pointer"
                      >
                        <FaRegHeart className=" text-[40px] py-[10px]" />
                      </div>
                    </div>
                  </div>

                  <div className=" text-center py-[20px]">
                    <h3 className=" font-hakto font-medium text-[18px] text-[#151875]">
                      title
                    </h3>
                    <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                      <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                      <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                      <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                    </div>
                    <h4>
                      <span className=" font-hakto font-normal text-[14px] text-[#151875]">
                        $45
                      </span>{" "}
                      <span className=" font-hakto font-normal text-[14px] text-[#FB2E86]">
                        $49
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            
            </div> */}
          </div>
          <div className=" py-12">
            <Page AllPage={AllPage} />
            <div className="text-end pr-[130px]">
              <PaginationArea
                pageNumber={pageNumber}
                paginate={paginate}
                pageStart={pageStart}
                next={next}
                prev={prev}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListGrid;
