import React from "react";
import { Link } from "react-router-dom";
import Maskk from "../assets/mask1.png";
import Maskkk from "../assets/mask2.png";
import Maskkkk from "../assets/mask3.png";
import AboutImg from "../assets/aboutus.png";
import Car from "../assets/car.png";
import Cas from "../assets/cash.png";
import Sup from "../assets/support.png";
import Qua from "../assets/quality.png";
import sayImg from "../assets/Say.png";
import sayImgg from "../assets/Say1.png";
import sayImggg from "../assets/Say2.png";

const AboutUs = () => {
  return (
    <div>
      <div className=" bg-[#F6F5FF] py-[90px]">
        <div className="container mx-auto">
          <div className="">
            <h2 className=" font-hakto font-semibold text-[#101750] text-[35px]">
              About Us
            </h2>
            <h2>
              <Link to="/">
                <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                  Home.Pages
                </span>
              </Link>{" "}
              <Link to="/Aboutus">
                <span className=" font-hakto font-medium text-[16px] text-[#101750]  hover:text-[#FB2E86] duration-300">
                  About Us
                </span>
              </Link>
            </h2>
          </div>
        </div>
      </div>

      <div className=" py-[50px]">
        <div className="container mx-auto">
          <div className=" lg:flex justify-between lg:gap-x-[100px] items-center">
            <div className="lg:w-[50%]">
              <div className="bg-[#2B3CAB] lg:w-[555px] w-[300px] lg:h-[390px] h-[200px]  rounded-[7px] relative group">
                <div className=" lg:w-[555px] w-[300px] lg:h-[390px]  h-[200px]  absolute group-hover:top-[-20px] group-hover:right-[-20px] duration-300">
                  <img src={AboutImg} className=" w-full" alt="" />
                </div>
              </div>
            </div>
            <div className="lg:w-[50%]">
              <div className=" py-[30px]">
                <h3 className=" font-hakto font-medium text-[#151875] text-[35px]">
                  Know About Our Ecomerce Business, History
                </h3>
                <p className=" font-hakto font-light text-[16px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis neque ultrices mattis aliquam, malesuada diam est.
                  Malesuada sem tristique amet erat vitae eget dolor lobortis.
                  Accumsan faucibus vitae lobortis quis bibendum quam.
                </p>

                <button className=" border-[1px] border-[#FB2E86] px-[15px] py-[10px] bg-[#FB2E86] rounded-[5px] hover:bg-transparent hover:text-[#FB2E86] mt-[50px]">
                  <a className=" font-hakto font-medium text-[18px] ">
                    Contact us
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto">
          <div className=" py-[10px] text-center">
            <h4 className=" font-hakto font-medium text-[42px] text-[#000000] mt-[141px]">
              Our Features
            </h4>
          </div>
          <div className=" lg:flex  justify-between py-[30px]">
            <div className="lg:w-[24%] w-full  hover:border-b-[3px] hover:border-[#FF9100] duration-300 lg:my-0 my-[20px]">
              <div className=" border-[1px] bg-white shadow-xl px-3 py-[50px] text-center">
                <div className=" w-[100px] mx-auto py-[30px]">
                  <img src={Car} className=" w-full" alt="" />
                </div>
                <div className="">
                  <h2 className=" font-hakto font-semibold text-[22px] text-[#151875]">
                    Free Delivery
                  </h2>
                  <p className=" font-hakto font-light text-[16px] text-[#1A0B5B]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[24%] w-full  hover:border-b-[3px] hover:border-[#FF9100] duration-300 lg:my-0 my-[20px]">
              <div className=" border-[1px] bg-white shadow-xl px-3 py-[50px] text-center">
                <div className=" w-[100px] mx-auto py-[30px]">
                  <img src={Cas} className=" w-full" alt="" />
                </div>
                <div className="">
                  <h2 className=" font-hakto font-semibold text-[22px] text-[#151875]">
                    100% Cash Back
                  </h2>
                  <p className=" font-hakto font-light text-[16px] text-[#1A0B5B]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[24%] w-full  hover:border-b-[3px] hover:border-[#FF9100] duration-300 lg:my-0 my-[20px]">
              <div className=" border-[1px] bg-white shadow-xl px-3 py-[50px] text-center">
                <div className=" w-[100px] mx-auto py-[30px]">
                  <img src={Qua} className=" w-full" alt="" />
                </div>
                <div className="">
                  <h2 className=" font-hakto font-semibold text-[22px] text-[#151875]">
                    Quality Product
                  </h2>
                  <p className=" font-hakto font-light text-[16px] text-[#1A0B5B]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[24%] w-full  hover:border-b-[3px] hover:border-[#FF9100] duration-300 lg:my-0 my-[20px]">
              <div className=" border-[1px] bg-white shadow-xl px-3 py-[50px] text-center">
                <div className=" w-[100px] mx-auto py-[30px]">
                  <img src={Sup} className=" w-full" alt="" />
                </div>
                <div className="">
                  <h2 className=" font-hakto font-semibold text-[22px] text-[#151875]">
                    24/7 Support
                  </h2>
                  <p className=" font-hakto font-light text-[16px] text-[#1A0B5B]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#FBFBFF] py-[50px] mb-[150px]">
        <div className="container mx-auto">
          <div className="">
            <h3 className=" font-hakto font-medium text-[35px] text-[#000000] text-center">
              Our Client Say!
            </h3>
            <div className=" flex justify-center gap-x-[20px] ">
              <div className=" mt-[10px]">
                <img src={sayImgg} alt="" />
              </div>
              <div className="">
                <img src={sayImggg} alt="" />
              </div>
              <div className=" mt-[10px]">
                <img src={sayImg} alt="" />
              </div>
            </div>
            <div className=" text-center w-[50%] mx-auto">
              <h4 className=" font-hakto font-medium text-[#151875] text-[22px]">
                Selina Gomez
              </h4>
              <p className=" font-hakto font-light text-[#8A8FB9] text-[10px] ">
                Ceo At Webecy Digital
              </p>

              <h3 className=" font-hakto font-normal text-[16px] text-[#8A8FB9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices
                dolor aliquam lacus volutpat praesent.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
