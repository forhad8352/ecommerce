import React from 'react'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import clock2 from '../assets/clock.png'
import checklist2 from '../assets/checklist.png'

const OrderComplete = () => {
  return (
    <div>
      {" "}
      <div className=" ">
        <div className=" bg-[#F6F5FF] py-[90px]">
          <div className="container mx-auto">
            <div className="">
              <h2 className=" font-hakto font-semibold text-[#101750] text-[35px]">
                Order Completed
              </h2>
              <h2>
                <Link to="/">
                  <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                    Home.Pages
                  </span>
                </Link>

                <Link to="/OrderCompleted">
                  <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                    .OrderCompleted
                  </span>
                </Link>
              </h2>
            </div>
          </div>
        </div>

        <div className="py-[100px]">
          <div className="container mx-auto">
            <div className=" lg:w-[800px]  text-center mx-auto ">
              <div className="">
                <div className=" border-[1px] border-[#F6F5FF] py-[50px] px-[30px] relative">
                  <div className=" mx-[50%] ">
                    <FaCheck className=" text-[35px] text-[#FF1788]" />
                  </div>
                  <h3 className=" font-hakto font-semibold text-[#101750] text-[35px]">
                    Your Order Is Completed!{" "}
                  </h3>
                  <p className=" font-hakto font-normal text-[#8D92A7] text-[16px]">
                    Thank you for your order! Your order is being processed and
                    will be completed within 3-6 hours. You will receive an
                    email confirmation when your order is completed.
                  </p>
                  <Link to={"/ListGrid"}>
                    <button className=" border-[1px] border-[#FF1788] bg-[#FF1788] px-[15px] py-[10px]  rounded-[5px] mt-[15px]">
                      <a className=" font-hakto font-medium text-[16px] text-white">
                        Continue Shopping
                      </a>
                    </button>
                  </Link>
                  <div className=" absolute bottom-[-40px] lg:right-[-40px] right-0">
                    <img src={checklist2} alt="" />
                  </div>
                  <div className=" absolute lg:left-[-50px] left-0 lg:top-[30px] top-[0px]">
                    <img src={clock2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderComplete