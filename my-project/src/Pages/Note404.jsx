import React from 'react'
import Note from '../assets/note404.png'
import { Link } from 'react-router-dom';

const Note404 = () => {
  return (
    <div>
      {" "}
      <div className=" py-[50px]">
        <div className="container mx-auto">
          <div className=" text-center">
            <h3 className=" font-hakto font-semibold text-[36px] text-[#101750]">
              404 Not Found
            </h3>
          </div>
          <div className=" lg:w-[600px] mx-auto">
            <img src={Note} className=" w-full" alt="" />
          </div>
          <div className=" items-center justify-center text-center py-[40px]">
            <button className=" border-[1px] bg-[#FB2E86] px-4 py-[10px] mt-[30px]">
              <a className=" font-hakto font-medium text-[#FFFFFF] text-[16px]">
                <Link to="/">Back To Home</Link>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note404