import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import ttt from "../assets/recent.png"
import { Link } from "react-router-dom";

import {
  productIncrement,
  productDecrement,
  productCross,
} from "../components/ProductSlice/productSlice";
import { useDispatch, useSelector } from 'react-redux';
const Cart = () => {
 

  let dispatch = useDispatch();
  let data = useSelector((state) => state.product.cartItem);

  const { totalprice, totalQuntity } = data.reduce(
    (acc, item) => {
      acc.totalprice += item.price * item.qun;
      acc.totalQuntity += item.qun;

      return acc
    },
    { totalprice: 0, totalQuntity: 0 }
  );

  return (
    <div>
      {" "}
      <div className=" py-[40px] ">
        <div className=" bg-[#F6F5FF] py-[90px]">
          <div className="container mx-auto">
            <div className="">
              <h2 className=" font-hakto font-semibold text-[#101750] text-[35px]">
                Shopping Curt
              </h2>
              <h2>
                <Link to="/">
                  <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                    Home.Pages
                  </span>
                </Link>{" "}
                <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                  .Shopping Curt
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-[140px]">
          <div className=" lg:flex justify-between">
            <div className="lg:w-[68%]">
              <div className=" flex justify-between">
                <div className="w-[40%]">
                  <h3 className=" font-hakto font-medium text-[#1D3178] text-[20px]">
                    Product
                  </h3>
                </div>
                <div className="lg:w-[20%] w-[17%]">
                  <h3 className=" font-hakto font-medium text-[#1D3178] text-[20px]">
                    Price
                  </h3>
                </div>
                <div className="w-[20%]">
                  <p className=" font-hakto font-medium text-[#1D3178] text-[20px]">
                    Quantity
                  </p>
                </div>
                <div className="lg:w-[20%] w-[16%]">
                  <h3 className=" font-hakto font-medium text-[#1D3178] text-[20px]">
                    Total
                  </h3>
                </div>
              </div>
              {data.map((item, i) => (
                <div className=" border-b-[2px] border-[#E1E1E4] pb-[30px]">
                  <div className=" flex justify-between items-center">
                    <div className="w-[40%]">
                      <div className="flex gap-x-[20px] py-3">
                        <div className=" relative">
                          <img
                            src={item.thumbnail}
                            className="w-[83px] h-[87px]"
                            alt=""
                          />
                          <div
                            onClick={() => dispatch(productCross(i))}
                            className=" absolute top-[-10px] right-[-10px]"
                          >
                            <RxCrossCircled className=" text-[25px] text-[#000000]" />
                          </div>
                        </div>
                        <div className="">
                          <h5 className=" font-hakto font-medium text-[16px] text-[#000000]">
                            Ut diam consequat
                          </h5>
                          <h6 className=" font-hakto font-normal text-[#A1A8C1] text-[12px]">
                            Color Brown
                          </h6>
                          <p className=" font-hakto font-normal text-[#A1A8C1] text-[12px]">
                            Size: XL
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-[20%]">
                      <div className="">
                        <h3 className=" font-hakto font-medium text-[14px] text-[#15245E]">
                          ${item.price}
                        </h3>
                      </div>
                    </div>
                    <div className="w-[20%]">
                      <div className=" border-[1px]  px-2 py-3 bg-[#BEBFC2] inline-block">
                        <div className=" flex lg:gap-x-[20px] gap-x-[8px] items-center">
                          <span onClick={() => dispatch(productDecrement(i))}>
                            <FaMinus />
                          </span>
                          <h2 className=" font-hakto font-medium text-[14px] text-[#15245E]">
                            {item.qun}
                          </h2>
                          <span onClick={() => dispatch(productIncrement(i))}>
                            <FaPlus />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[20%] ">
                      <h3 className=" font-hakto font-medium text-[14px] text-[#15245E] ">
                        ${item.price * item.qun}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}

              <div className=" flex justify-between py-[30px]">
                <button className=" border-[1px]  bg-[#FB2E86] px-4 py-3 rounded-[5px] text-white hover:bg-[#19D16F] duration-300">
                  <a className=" font-hakto font-medium text-[16px]">
                    Update Curt
                  </a>
                </button>

                <button className=" border-[1px]  bg-[#FB2E86] px-4 py-3 rounded-[5px] text-white hover:bg-[#19D16F] duration-300">
                  <a className=" font-hakto font-medium text-[16px]">
                    Clear Curt
                  </a>
                </button>
              </div>
            </div>
            <div className="lg:w-[28%]">
              <div className=" text-center mb-[40px]">
                <h3 className=" font-hakto font-semibold text-[#1D3178] text-[20px]">
                  Cart Totals
                </h3>
              </div>
              <div className=" border-[1px] border-[#F4F4FC] bg-[#F4F4FC] px-[20px] py-[20px] rounded-[10px]">
                <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3">
                  <h3 className=" font-hakto font-medium text-[#1D3178] text-[16px]">
                    Subtotals:
                  </h3>
                  <h3 className=" font-hakto font-medium text-[#1D3178] text-[16px]">
                    ${totalprice}
                  </h3>
                </div>
                <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                  <h3 className=" font-hakto font-medium text-[#1D3178] text-[16px]">
                    Total Quntity:
                  </h3>
                  <h3 className=" font-hakto font-medium text-[#1D3178] text-[16px]">
                    {totalQuntity}
                  </h3>
                </div>
                <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                  <h3 className=" font-hakto font-medium text-[#1D3178] text-[16px]">
                    Totals:
                  </h3>
                  <h3 className=" font-hakto font-medium text-[#1D3178] text-[16px]">
                    {totalprice}
                  </h3>
                </div>
                <div className=" flex gap-x-[20px] items-center my-[30px]">
                  <FaCheckCircle className=" text-[#19D16F] text-[18px]" />
                  <p className=" font-hakto font-medium text-[#8A91AB] text-[12px]">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
                <Link to="/Demo">
                  <button className=" border-[1px] py-[15px] bg-[#19D16F] w-full">
                    <a className=" font-hakto font-medium text-[#FFFFFF] text-[16px]">
                      Proceed To Checkout
                    </a>
                  </button>
                </Link>
              </div>

              <div className="border-[1px] border-[#F4F4FC] bg-[#F4F4FC] px-[20px] py-[20px] rounded-[10px] mt-[50px]">
                <div className=" text-center">
                  <h3 className=" font-hakto font-semibold text-[#1D3178] text-[20px]">
                    Calculate Shopping
                  </h3>
                </div>
                <div className="">
                  <div className=" border-b-[1px] border-[#C7CEE4] mt-[15px]">
                    <input
                      type="text"
                      placeholder="Bangladesh"
                      className=" w-full h-[40px] font-hakto font-light text-[#C5CBE3] text-[14px] bg-[#F4F4FC] outline-none"
                    />
                  </div>
                  <div className=" border-b-[1px] border-[#C7CEE4] mt-[15px]">
                    <input
                      type="text"
                      placeholder="Mirpur Dhaka - 1200"
                      className=" w-full h-[40px] font-hakto font-light text-[#C5CBE3] text-[14px] bg-[#F4F4FC] outline-none"
                    />
                  </div>
                  <div className=" border-b-[1px] border-[#C7CEE4] mt-[15px]">
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className=" w-full h-[40px] font-hakto font-light text-[#C5CBE3] text-[14px] bg-[#F4F4FC] outline-none"
                    />
                  </div>
                </div>
                <button className=" border-[1px]  bg-[#FB2E86] px-4 py-3 rounded-[5px] text-white hover:bg-[#19D16F] duration-300 mt-[30px]">
                  <a className=" font-hakto font-medium text-[17px]">
                    Calculate Shiping
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart