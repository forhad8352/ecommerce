import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaStar,
  FaRegHeart,
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaRegStar,
  FaStarHalf,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Rea from "../assets/realated1.png";
import Real from "../assets/realated2.png";
import Reala from "../assets/realated3.png";
import Realat from "../assets/realated4.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/ProductSlice/productSlice";

const ProductDetails = () => {
  let ListgridId = useParams();
  let [singleProduct, setSingleProduct] = useState([]);
  let productId = useParams()
  const dispatch = useDispatch()
  let dataId = () => {
    axios
      .get(`https://dummyjson.com/products/${ListgridId.id}`)
      .then((response) => {
        setSingleProduct(response.data);
      });
  };

  useEffect(() => {
    dataId();
  }, []);


  let clientRating = Array.from({ length: 5 }, (elm, index) => {
    let number = index + 0.5;
    return (

 singleProduct.rating > index + 1 ? <FaStar/> :
 singleProduct.rating > number ? <FaStarHalf/> : <FaRegStar/>


    )
  });

   let handleAddtoCart = (item) => {
     dispatch(addToCart({ ...item, qun: 1 }));
   };
  return (
    <div>
      <div className=" bg-[#F6F5FF] py-[90px]">
        <div className="container mx-auto">
          <div className="">
            <h2 className=" font-hakto font-semibold text-[#101750] text-[35px]">
              Product Details
            </h2>
            <h2>
              <Link to="/">
                <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                  Home.Pages
                </span>
              </Link>{" "}
              <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                .Product Details
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className=" py-[100px]">
        <div className="container mx-auto">
          <div className=" border-[1px] px-[15px] py-[20px]  shadow-md">
            <div className=" lg:flex justify-between items-center">
              <div className="lg:w-[50%]">
                {singleProduct?.images?.map((item) => (
                  <div className="flex lg:gap-x-[50px] gap-x-[20px] ">
                    <div className="w-[20%]">
                      <div className=" ">
                        <div className="w-[151px] h-[155px] my-[11px]">
                          <img src={item} alt="" />
                        </div>
                        <div className="w-[151px] h-[155px] my-[11px]">
                          <img src={item} alt="" />
                        </div>
                        <div className="w-[151px] h-[155px] my-[11px]">
                          <img src={item} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="w-[27%] lg:my-0 my-[50%]">
                      <div className=" lg:w-[375px] w-[240px] lg:h-[487px] my-[11px]">
                        <img src={item} className=" w-full" alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:w-[50%]">
                <div className="">
                  <div className="">
                    <h3 className=" font-hakto font-semibold text-[#0D134E] text-[35px] text-center lg:text-start">
                      {singleProduct.title}
                    </h3>
                    <div className=" flex gap-x-[10px] items-center justify-center lg:justify-start text-[#FFC416]">
                      {clientRating}
                      <p>(22)</p>
                    </div>
                    <h5 className=" text-center lg:text-start">
                      <span className=" font-hakto font-light text-[#151875] text-[16px] ">
                        ${singleProduct.price}
                      </span>{" "}
                      <span className=" font-hakto font-light text-[#FB2E86] text-[16px]">
                        ${singleProduct.price}
                      </span>
                    </h5>
                    <h3 className=" font-hakto font-medium text-[19px] text-[#0D134E] py-[7px] text-center lg:text-start">
                      color
                    </h3>
                    <p className=" font-hakto font-light text-[#A9ACC6] text-[16px] py-[7px] text-center lg:text-start">
                      {singleProduct.description}
                    </p>
                    <div onClick={()=>handleAddtoCart(singleProduct)} className=" flex gap-x-[10px] items-center py-5">
                      <Link to="/Cart">
                        <button className=" border-[1px] px-4 py-3 bg-[#FB2E86] text-[#151875] rounded-[5px] hover:bg-transparent hover:text-[#FB2E86]">
                          <a className=" font-hakto font-medium text-[18px]">
                            Add To cart
                          </a>
                        </button>
                      </Link>

                      <i>
                        <FaRegHeart />
                      </i>
                    </div>
                    <h3 className=" text-center lg:text-start">
                      <span className=" font-hakto font-medium text-[19px] text-[#0D134E] py-[7px]">
                        Categories:
                      </span>{" "}
                      <span className=" font-hakto font-medium text-[19px] text-[#FB2E86] py-[7px]">
                        catetogory
                      </span>
                    </h3>
                    <h5 className=" text-center lg:text-start">
                      <span className=" font-hakto font-medium text-[19px] text-[#0D134E] py-[7px]">
                        Tags:
                      </span>{" "}
                      <span className=" font-hakto font-medium text-[19px] text-[#FB2E86] py-[7px]">
                        product tag
                      </span>
                    </h5>
                    <div className=" flex gap-x-[20px] items-center justify-center lg:justify-start py-[7px]">
                      <h3 className=" font-hakto font-medium text-[19px] text-[#0D134E]">
                        Share
                      </h3>
                      <div className=" flex gap-x-[20px]">
                        <FaFacebookF />
                        <FaInstagramSquare />
                        <FaTwitter />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#F9F8FE] py-[40px]">
        <div className="container mx-auto">
          <div className="">
            <ul className="flex gap-x-5 justify-center">
              <li>
                <a className=" font-hakto font-semibold text-[18px] text-[#151875]  hover:border-b-[2px] hover:border-[#151875] duration-200 gap-x-[50px]">
                  Description
                </a>
              </li>
              <li>
                <a className=" font-hakto font-semibold text-[18px] text-[#151875] hover:border-b-[2px] hover:border-[#151875] duration-200 gap-x-[50px]">
                  Additional Info
                </a>
              </li>
              <li>
                <a className=" font-hakto font-semibold text-[18px] text-[#151875] hover:border-b-[2px] hover:border-[#151875] duration-200 gap-x-[50px]">
                  Reviews
                </a>
              </li>
              <li>
                <a className=" font-hakto font-semibold text-[18px] text-[#151875]  hover:border-b-[2px] hover:border-[#151875] duration-200 gap-x-[50px]">
                  Video
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className=" font-hakto font-semibold text-[22px] text-[#151875] py-[10px]">
              Varius tempor.
            </h3>
            <p className=" font-hakto font-normal text-[16px] text-[#A9ACC6]">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
              consectetur neque, elit, aliquet. Non varius proin sed urna,
              egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
              justo, tortor sed donec tempus. Imperdiet consequat, quis diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
          <div className=" py-3">
            <h3 className=" font-hakto font-semibold text-[22px] text-[#151875]">
              More details
            </h3>
            <div className=" flex gap-x-[10px] items-center py-2">
              <FaArrowRightLong />
              <p className=" font-hakto font-normal text-[16px] text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
            <div className=" flex gap-x-[10px] items-center py-2">
              <FaArrowRightLong />
              <p className=" font-hakto font-normal text-[16px] text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
            <div className=" flex gap-x-[10px] items-center py-2">
              <FaArrowRightLong />
              <p className=" font-hakto font-normal text-[16px] text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
            <div className=" flex gap-x-[10px] items-center py-2">
              <FaArrowRightLong />
              <p className=" font-hakto font-normal text-[16px] text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto">
          <div className="">
            <h5 className=" font-hakto font-semibold text-[#101750] text-[36px]">
              Related Products
            </h5>
          </div>
          <div className=" flex justify-between">
            <div className="w-[24%]">
              <div className=" py-3">
                <img src={Rea} className="w-full" alt="" />
                <div className=" lg:flex justify-between items-center py-[10px]">
                  <h3 className=" font-hakto font-medium text-[16px] text-[#151875]">
                    Mens Fashion Wear
                  </h3>
                  <div className=" flex gap-x-[10px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <h6 className=" font-hakto font-medium text-[13px] text-[#151875]">
                  $43.00
                </h6>
              </div>
            </div>
            <div className="w-[24%]">
              <div className=" py-3">
                <img src={Real} className="w-full" alt="" />
                <div className=" lg:flex justify-between items-center py-[10px]">
                  <h3 className=" font-hakto font-medium text-[16px] text-[#151875]">
                    Mens Fashion Wear
                  </h3>
                  <div className=" flex gap-x-[10px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <h6 className=" font-hakto font-medium text-[13px] text-[#151875]">
                  $43.00
                </h6>
              </div>
            </div>
            <div className="w-[24%]">
              <div className=" py-3">
                <img src={Reala} className="w-full" alt="" />
                <div className=" lg:flex justify-between items-center py-[10px]">
                  <h3 className=" font-hakto font-medium text-[16px] text-[#151875]">
                    Mens Fashion Wear
                  </h3>
                  <div className=" flex gap-x-[10px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <h6 className=" font-hakto font-medium text-[13px] text-[#151875]">
                  $43.00
                </h6>
              </div>
            </div>
            <div className="w-[24%]">
              <div className=" py-3">
                <img src={Realat} className="w-full" alt="" />
                <div className=" lg:flex justify-between items-center py-[10px]">
                  <h3 className=" font-hakto font-medium text-[16px] text-[#151875]">
                    Mens Fashion Wear
                  </h3>
                  <div className=" flex gap-x-[10px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <h6 className=" font-hakto font-medium text-[13px] text-[#151875]">
                  $43.00
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
