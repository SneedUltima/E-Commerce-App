import React from "react";
import { Link } from "react-router-dom";
import NewProducts from "../img/NewProducts.jpg";
import Sale from "../img/Sale.jpg";
import PreWorkout from "../img/PreWorkout.webp";
import Protein from "../img/Protein.webp";

const Categories = () => {
  return (
    <div className="flex h-[80vh] gap-[10px] m-[10px]">
      <div className="col flex flex-col gap-[10px]">
        <div className="row relative">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={NewProducts}
            alt=""
          />
          <button className="absolute min-w-[100px] w-fit h-[50px] p-[30px] flex justify-center items-center top-0 bottom-0 left-0 right-0 m-auto bg-[#22C55E] tracking-wide rounded-md text-white text-2xl uppercase cursor-pointer font-semibold">
            <Link to="/products/1">New Products</Link>
          </button>
        </div>
        <div className="row relative overflow-hidden">
          <img className="w-[100%] h-[100%] object-cover" src={Sale} alt="" />
          <button className="absolute min-w-[100px] w-fit h-[50px] p-[30px] flex justify-center items-center top-0 bottom-0 left-0 right-0 m-auto bg-[#22C55E] tracking-wide rounded-md text-white text-2xl uppercase cursor-pointer font-semibold">
            <Link to="/products/1">Sale</Link>
          </button>
        </div>
      </div>
      <div className="col flex gap-[10px]">
        <div className="row relative">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={PreWorkout}
            alt=""
          />
          <button className="absolute min-w-[100px] w-fit h-[50px] p-[30px] flex justify-center items-center top-0 bottom-0 left-0 right-0 m-auto bg-[#22C55E] tracking-wide rounded-md text-white text-2xl uppercase cursor-pointer font-semibold">
            <Link to="/products/1">Preworkout</Link>
          </button>
        </div>
        <div className="row relative">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={Protein}
            alt=""
          />
          <button className="absolute min-w-[100px] w-fit h-[50px] p-[30px] flex justify-center items-center top-0 bottom-0 left-0 right-0 m-auto bg-[#22C55E] tracking-wide rounded-md text-white text-2xl uppercase cursor-pointer font-semibold">
            <Link to="/products/1">Protein</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
