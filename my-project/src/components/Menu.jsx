import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaSearch, FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Menu = () => {

  let [activeMenu, setActiveMenu] = useState(
    localStorage.getItem("activeMenu") || ""
  );
  let [show, setShow] = useState(false);
  useEffect(() => {
    localStorage.setItem("activeMenu", activeMenu);
  }, [activeMenu]);
  return (
    <div className="container mx-auto">
      <div className="lg:flex lg:justify-between items-center lg:mx-0 mx-[10px] py-[15px]">
        <div className="lg:w-[70%] w-full flex lg:justify-start justify-between items-center">
          <div className="w-[10%]">
            <h2 className="text-[39px] text-[#0D0E43] font-josefin font-bold">
              Hekto
            </h2>
          </div>
          <div className="w-[65%]">
            <ul
              className={`lg:flex items-center justify-center lg:static absolute -z-30  ${
                show == true
                  ? "top-[220px] left-[0px] bg-[#F5F5F3] z-50  w-full  duration-700 text-center"
                  : " duration-700 top-[0px] left-[-300px] text-center  w-full bg-[none] "
              }`}
            >
              <li
                onClick={() => setActiveMenu("Home")}
                className={`${
                  activeMenu === "Home"
                    ? " text-[#FF2AAA] font-Lfont mr-3 font-normal text-[16px] "
                    : "  text-[#0D0E43] font-Lfont mr-3 font-normal text-[16px] "
                }`}
              >
                <Link to="/">Home </Link>
              </li>
              <li
                onClick={() => setActiveMenu("Pages")}
                className={`${
                  activeMenu === "Pages"
                    ? " text-[#FF2AAA] font-Lfont font-normal  text-[16px] "
                    : "  text-[#0D0E43] font-Lfont  font-normal text-[16px] "
                }`}
              >
                {" "}
                <Link to="AboutUs">Pages</Link>
              </li>
              <li
                onClick={() => setActiveMenu("Faq")}
                className={`${
                  activeMenu === "Faq"
                    ? " text-[#FF2AAA] font-Lfont font-normal mx-3 text-[16px] "
                    : "  text-[#0D0E43] font-Lfont mx-3 font-normal text-[16px] "
                }`}
              >
                {" "}
                <Link to="/Faq">FAQ</Link>
              </li>
              <li
                onClick={() => setActiveMenu("Products")}
                className={`${
                  activeMenu === "Products"
                    ? " text-[#FF2AAA] font-Lfont font-normal text-[16px] "
                    : "  text-[#0D0E43] font-Lfont font-normal text-[16px] "
                }`}
              >
                <Link to="/ListGrid">Products</Link>
              </li>
              <li
                onClick={() => setActiveMenu("Blog")}
                className={`${
                  activeMenu === "Blog"
                    ? " text-[#FF2AAA] font-Lfont font-normal mx-3 text-[16px] "
                    : "  text-[#0D0E43] font-Lfont mx-3 font-normal text-[16px] "
                }`}
              >
                <Link to="/Blog">Blog</Link>
              </li>
              <li
                onClick={() => setActiveMenu("Shop")}
                className={`${
                  activeMenu === "Shop"
                    ? " text-[#FF2AAA] font-Lfont font-normal text-[16px] "
                    : "  text-[#0D0E43] font-Lfont font-normal text-[16px] "
                }`}
              >
                Shop
              </li>
              <li
                onClick={() => setActiveMenu("Contact")}
                className={`${
                  activeMenu === "Contact"
                    ? " text-[#FF2AAA] font-Lfont font-normal mx-3 text-[16px] "
                    : "  text-[#0D0E43] font-Lfont mx-3 font-normal text-[16px] "
                }`}
              >
                <Link to="/Contact">Contact </Link>
              </li>
            </ul>
          </div>

          <div
            className=" lg:hidden relative "
            onClick={() => {
              setShow(!show);
            }}
          >
            {show == true ? (
              <RxCross2 className="text-[#262626] text-[25px]" />
            ) : (
              <FaBars className="text-[#262626] text-[25px]" />
            )}
          </div>
        </div>

        <div className="lg:w-[27%] w-full ">
          <div className="flex items-center lg:justify-start justify-center">
            <div className="">
              <input
                type="text"
                className=" border-[1px] bg-[#D9D9D9] border-[#E7E6EF] w-[280px] h-[32px]"
              />
            </div>
            <div className="py-[8px] px-[13px] bg-[#FB2E86] ml-[-2px] text-[#fff]">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
