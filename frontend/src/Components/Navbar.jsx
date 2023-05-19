import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar h-[80px]">
      <div className="wrapper flex justify-between px-3 py-4">
        <div className="left flex gap-5 items-center">
          <div className="flex items-center">
            <span>AUD</span>
            <RiArrowDownSLine className=" w-5" />
          </div>
          <div>
            <Link to="/products/1">Preworkout</Link>
          </div>
          <div>
            <Link to="/products/2">Protein</Link>
          </div>
          <div>
            <Link to="/products/3">Accessories</Link>
          </div>
        </div>
        <div className="center font-['Kanit'] text-2xl">
          <Link to="/">Rush Supplements</Link>
        </div>
        <div className="right flex gap-5 items-center">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/">About</Link>
          </div>
          <div>
            <Link to="/">Contact</Link>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <BsSearch className=" cursor-pointer text-gray-600 h-5 w-5" />
            </div>
            <div>
              <MdPersonOutline className=" cursor-pointer text-gray-600 h-5 w-5" />
            </div>
            <div>
              <AiOutlineHeart className=" cursor-pointer text-gray-600 h-5 w-5" />
            </div>
            <div onClick={() => setOpen(!open)} className="flex items-center ">
              <RiShoppingCartLine className=" cursor-pointer text-gray-600 h-5 w-5 relative" />
              <span
                className=" text-sm bg-green-500 text-white
              h-5 w-5 rounded-full absolute right-[5px] top-[20px] flex items-center justify-center"
              >
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
