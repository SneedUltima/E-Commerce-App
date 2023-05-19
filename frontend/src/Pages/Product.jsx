import React, { useState } from "react";
import OptimumWhey from "../img/optimumwhey.jpg";
import DymatizeProtein from "../img/DymatizeElite.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaBalanceScale } from "react-icons/fa";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [OptimumWhey, DymatizeProtein];

  return (
    <div className="product py-[20px] px-[50px] flex gap-[50px]">
      <div className="left flex gap-[20px] basis-3/6">
        <div className="images basis-1/5">
          <img
            className="w-[100%] h-[150px] object-contain cursor-pointer mb-[10px]"
            src={images[0]}
            alt=""
            onClick={(e) => setSelectedImage(0)}
          />
          <img
            className="w-[100%] h-[150px] object-contain cursor-pointer"
            src={images[1]}
            alt=""
            onClick={(e) => setSelectedImage(1)}
          />
        </div>
        <div className="mainImg basis-4/5">
          <img
            className="w-[100%] max-h-[800px] object-contain cursor-pointer"
            src={images[selectedImage]}
            alt=""
          />
        </div>
      </div>
      <div className="right flex flex-col gap-[30px] basis-3/6">
        <h1 className="font-bold text-3xl">Title</h1>
        <span className="text-[30px] font-semibold">$199</span>
        <p className="font-[18px] text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          odio mollitia voluptate rem delectus alias incidunt, ipsum corrupti,
          error unde officiis quas nisi itaque obcaecati?
        </p>
        <div className="quantity flex items-center gap-[10px]">
          <button
            className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none bg-slate-200"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button
            className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none bg-slate-200"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div className="add flex flex-col gap-[20px]">
          <button className="bg-[#22C55E] text-white p-[10px] w-[250px] flex items-center justify-center gap-[20px] cursor-pointer border-none font-semibold rounded">
            <RiShoppingCartLine /> Add to Cart
          </button>
          <div className="links flex gap-[20px]">
            <div className="item flex items-center gap-[10px] text-[#22C55E]">
              <AiOutlineHeart /> Add to Wishlist
            </div>
            <div className="item flex items-center gap-[10px] text-[#22C55E]">
              <FaBalanceScale /> Add to Compare
            </div>
          </div>
          <div className="details flex flex-col gap-[10px] text-[16px] text-gray-500 mt-[30px]">
            <span>Description</span>
            <hr className="w-[200px]" />
            <span>Additional Information</span>
            <hr className="w-[200px]" />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
