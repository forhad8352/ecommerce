import React from "react";
import { FaRegHeart, FaCartPlus } from "react-icons/fa";
import { TbZoomIn } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Page = ({ AllPage }) => {
  let dispatch = useDispatch()
   let cartNav = (item) => {
     dispatch(addtoCart({ ...item, qun: 1 }));
   };
  return (
    <div>
      <div className=" flex flex-wrap">
        {AllPage.map((item) => (
          <div className="w-[24%] flex  flex-wrap">
            <Link to={`/ListGrid/${item.id}`}>
              <div className=" group overflow-hidden">
                <div className="   bg-[#F6F7FB] relative group-hover:bg-[#EBF4F3] duration-300">
                  <div className=" w-[100%] justify-center">
                    <img
                      src={item.thumbnail}
                      className="py-[40px] w-full "
                      alt=""
                    />
                  </div>

                  <div className=" absolute bottom-1 left-[-50px] group-hover:left-0 duration-300">
                    <div onClick={() => cartNav(item)} className="">
                      <FaCartPlus className=" text-[40px] py-[10px]" />
                    </div>
                    <TbZoomIn className=" text-[40px] py-[10px]" />
                    <div className="">
                      <FaRegHeart className=" text-[40px] py-[10px]" />
                    </div>
                  </div>
                </div>

                <div className=" text-center py-[20px]">
                  <h3 className=" font-hakto font-medium text-[18px] text-[#151875] w-[full]">
                    {item.title}
                  </h3>
                  <div className=" flex gap-x-[10px] justify-center py-[10px] items-center">
                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#DE9034]"></div>
                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#EC42A2]"></div>
                    <div className=" w-[10px] h-[10px] rounded-[50%] bg-[#8568FF]"></div>
                  </div>
                  <h4>
                    <span className=" font-hakto font-normal text-[14px] text-[#151875]">
                      ${item.price}
                    </span>{" "}
                    <span className=" font-hakto font-normal text-[14px] text-[#FB2E86]">
                      ${item.price}
                    </span>
                  </h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
