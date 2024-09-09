import React from 'react'
import { CiMail } from "react-icons/ci";
import { FiPhoneCall,FiUser  } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    let data = useSelector((state) =>state.product.cartItem);
  return (
    <div className="py-[13px]  bg-[#7E33E0]">
      <div className="container mx-auto ">
        <div className=" lg:flex lg:justify-between">
          <div className="lg:w-[30%] lg:flex lg:justify-between">
            <div className="flex items-center lg:justify-start justify-center">
              <CiMail className=" text-[#f1f1f1] font-dfont font-semibold" />
              <p className="ml-[10px] text-[16px] text-[#f1f1f1] font-dfont font-semibold">
                forhadhossen328@gmail.com
              </p>
            </div>
            <div className="flex items-center lg:justify-start justify-center">
              <div className="text-[#f1f1f1] font-dfont font-semibold">
                <FiPhoneCall />
              </div>
              <div className="">
                <p className="ml-[10px] text-[16px] text-[#f1f1f1] font-dfont font-semibold">
                  01602762283
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[30%] w-full">
            <div className="lg:w-[50%] flex items-center w-full lg:justify-start justify-center">
              <div className="flex items-center text-[16px] text-[#f1f1f1] font-dfont font-semibold ">
                <span className="pr-[5px]">English</span>
                <FaAngleDown />
              </div>

              <div className=" px-[17px] flex items-center text-[16px] text-[#f1f1f1] font-dfont font-semibold ">
                <span className="pr-[5px]">USD</span>
                <FaAngleDown />
              </div>

              {/* <Link to="/myaccount"> */}
              <div className=" flex items-center">
                <span className="pr-[5px] text-[16px] text-[#f1f1f1] font-dfont font-semibold">
                  <Link to="/Myaccount">Login</Link>
                </span>
                <FiUser className="text-[#F1F1F1]" />
              </div>
              {/* </Link> */}

              <div className=" px-[17px] flex items-center text-[16px] text-[#f1f1f1] font-dfont font-semibold ">
                <span className="pr-[5px]">Wishlist</span>
                <FaRegHeart />
              </div>

              <Link to="/Cart">
              {data.length ? ( <div className="items-center text-[16px] text-[#f1f1f1] font-dfont font-semibold ">
                <BsCart />
              </div> ) : (" ")}
             
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header