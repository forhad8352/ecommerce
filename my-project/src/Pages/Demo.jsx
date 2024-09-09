import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productCross } from "../components/ProductSlice/productSlice";
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const Demo = () => {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.product.cartItem);
  let hendelremove = (item) => {
    dispatch(productCross(item));
  };
  const { totalprice, totalQuntity } = data.reduce(
    (acc, item) => {
      acc.totalprice += item.price * item.qun;
      acc.totalQuntity += item.qun;

      return acc;
    },
    { totalprice: 0, totalQuntity: 0 }
  );
  return (
    <div>
      {" "}
      <div className="">
        <div className=" bg-[#F6F5FF] py-[90px]">
          <div className="container mx-auto">
            <div className="">
              <h2 className=" font-hakto font-semibold text-[#101750] text-[35px]">
                Hekto Demo
              </h2>
              <h2>
                <Link to="/">
                  <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                    Home.Pages
                  </span>
                </Link>

                <Link to="/Demo">
                  <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                    Hekto Demo
                  </span>
                </Link>
              </h2>
            </div>
          </div>
        </div>

        <div className="py-[40px]">
          <div className="container mx-auto">
            <div className=" py-[20px]">
              <h3 className=" font-hakto font-semibold text-[#1D3178] text-[35px]">
                Hekto Demo
              </h3>
              <p className=" font-hakto font-medium text-[#1D3178] text-[16px]">
                Cart/ Information/ Shipping/ Payment
              </p>
            </div>

            <div className=" lg:flex justify-between ">
              <div className="lg:w-[60%] mb-[50px] lg:mb-0 bg-[#F8F8FD]  p-[100px]">
                <div className="flex justify-between ">
                  <div className="">
                    <h4 className="text-[18px] text-[#1D3178] leading-[21.9px] font-josefin font-bold">
                      Contact Information
                    </h4>
                  </div>
                  <div className="flex">
                    <h6 className="text-[14px] leading-[16.8px] font-medium text-[#C1C8E1] font-josefin">
                      Already have an account?
                    </h6>
                    <span className="text-[14px] leading-[16.8px] font-medium text-[#C1C8E1] font-josefin">
                      <Link to="/Myaccount">Login</Link>
                    </span>
                  </div>
                </div>
                <div className="border-b-[#BFC6E0] border-b-[2px] w-[698px] pt-[28px]">
                  <input
                    className="w-[698px] py-2 bg-[#F8F8FD] text-[14px] leading-[16.8px] font-semibold text-[#C1C8E1] font-josefin"
                    type="text"
                    placeholder="Email or mobile phone number"
                  />
                </div>
                <div>
                  <p className="text-[12px] font-medium leading-[14.4px] text-[#8A91AB] font-lato pt-[25px]">
                    Keep me up to date on news and excluive offers
                  </p>
                </div>
                <div className="text-[18px] text-[#1D3178] leading-[21.9px] font-josefin font-bold pt-[109px]">
                  <h4>Shipping address</h4>
                </div>
                <div className=" pt-[28px] w-[698px] flex justify-between">
                  <div className="border-b-[#BFC6E0] border-b-[2px] w-[330px]">
                    <input
                      className="w-[330px] py-2 bg-[#F8F8FD]  text-[14px] leading-[16.8px] font-semibold text-[#C1C8E1] font-josefin"
                      type="text"
                      placeholder="First name (optional)"
                    />
                  </div>
                  <div className="border-b-[#BFC6E0] border-b-[2px] w-[330px]">
                    <input
                      className="w-[330px] py-2 bg-[#F8F8FD] text-[14px] leading-[16.8px] font-semibold text-[#C1C8E1] font-josefin"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="border-b-[#BFC6E0] border-b-[2px] w-[698px] pt-[39px]">
                  <input
                    className="w-[698px] py-2 bg-[#F8F8FD] text-[14px] leading-[16.8px] font-semibold text-[#C1C8E1] font-josefin"
                    type="text"
                    placeholder="Address"
                  />
                </div>
                <div className="border-b-[#BFC6E0] border-b-[2px] w-[698px] pt-[39px]">
                  <input
                    className="w-[698px] py-2 bg-[#F8F8FD] text-[14px] leading-[16.8px] font-semibold text-[#C1C8E1] font-josefin"
                    type="text"
                    placeholder="Appaetnentment,suit,e.t.c (optinal)"
                  />
                </div>
                <div className="border-b-[#BFC6E0] border-b-[2px] w-[698px] pt-[39px]">
                  <input
                    className="w-[698px] py-2 bg-[#F8F8FD] text-[14px] leading-[16.8px] font-semibold text-[#C1C8E1] font-josefin"
                    type="text"
                    placeholder="City"
                  />
                </div>
                <div className=" pt-[39px] w-[698px] flex justify-between ">
                  <div className="border-b-[#BFC6E0] border-b-[2px] w-[330px]">
                    <input
                      className="w-[330px] py-2 bg-[#F8F8FD]  text-[14px] leading-[16.8px] font-semibold text-[#C1C8E1] font-josefin"
                      type="text"
                      placeholder="Bangladesh"
                    />
                  </div>
                  <div className="border-b-[#BFC6E0] border-b-[2px] w-[330px]">
                    <input
                      className="w-[330px] py-2 bg-[#F8F8FD] text-[14px] leading-[16.8px] font-semibold text-[#C1C8E1] font-josefin"
                      type="number"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
                <button className="pt-[117px]">
                  <span className="text-[16px] font-josefin leading-[18.75px] w-[120px] p-4 border-[2px] border-[#FB2E86]  text-center bg-[#FB2E86] text-[#FFFFFF] hover:bg-transparent hover:text-[#FB2E86]">
                    Continue Shipping
                  </span>
                </button>
              </div>
              <div className="lg:w-[29%]">
                {data.map((item, i) => (
                  <div className=" flex justify-between items-center border-b-[1px] border-[#E1E1E4] py-[10px] mt-[15px]">
                    <div className=" flex gap-x-[20px]">
                      <div className=" relative">
                        <img
                          src={item.thumbnail}
                          className=" w-[83px] h-[87px]"
                          alt=""
                        />
                        <div
                          onClick={() => hendelremove(i)}
                          className=" absolute top-[-10px] right-[-10px]"
                        >
                          <RxCrossCircled className=" text-[25px] text-[#000000]" />
                        </div>
                      </div>
                      <div className="">
                        <h5 className=" font-hakto font-medium text-[16px] text-[#000000]">
                          {item.title}
                        </h5>
                        <h6 className=" font-hakto font-normal text-[14px] text-[#A1A8C1]">
                          {item.brand}
                        </h6>
                        <p className=" font-hakto font-normal text-[14px] text-[#A1A8C1]">
                          Size: XL
                        </p>
                      </div>
                    </div>
                    <h4 className=" font-hakto font-medium text-[16px] text-[#15245E]">
                      ${item.price}
                    </h4>
                  </div>
                ))}
                <div className=" text-center py-[20px]">
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
                      Totals Quntity:
                    </h3>
                    <h3 className=" font-hakto font-medium text-[#1D3178] text-[16px]">
                      ${totalQuntity}
                    </h3>
                  </div>
                  <div className=" flex justify-between border-b-[1px] border-[#E8E6F1] py-3 mt-[40px]">
                    <h3 className=" font-hakto font-medium text-[#1D3178] text-[16px]">
                      Totals:
                    </h3>
                    <h3 className=" font-hakto font-medium text-[#1D3178] text-[16px]">
                      ${totalprice}
                    </h3>
                  </div>
                  <div className=" flex gap-x-[20px] items-center my-[30px]">
                    <FaCheckCircle className=" text-[#19D16F] text-[18px]" />
                    <p className=" font-hakto font-medium text-[#8A91AB] text-[12px]">
                      Shipping & taxes calculated at checkout
                    </p>
                  </div>
                  <Link to={"/OrderCompleted"}>
                    <button className=" border-[1px] py-[15px] bg-[#19D16F] w-full">
                      <a className=" font-hakto font-medium text-[#FFFFFF] text-[16px]">
                        Proceed To Order
                      </a>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
