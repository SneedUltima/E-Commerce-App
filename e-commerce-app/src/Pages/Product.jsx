import React, { useEffect, useState } from "react";
import OptimumWhey from "../img/optimumwhey.jpg";
import DymatizeProtein from "../img/DymatizeElite.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaBalanceScale } from "react-icons/fa";
import { client, urlFor } from "../lib/client";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  console.log(params);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `*[slug.current == ${params.id}]{
  //       title,
  //       slug,
  //       mainImage{
  //         asset->{
  //           _id,
  //           url
  //          }
  //        },
  //      body,
  //     "name": name
  //     "image": image
  //    }`,
  //       { params }
  //     )
  //     .then((data) => setProduct(data[0]))
  //     .catch(console.error);
  // }, [params]);

  useEffect(() => {
    client
      .fetch(`*[_type == "product" && slug.current == '${params.id}'][0]`)
      .then((data) => setProduct(data))
      .catch(console.error);
  }, []);

  console.log(product);

  const images = [OptimumWhey, DymatizeProtein];

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product py-[20px] px-[50px] flex gap-[50px]">
      <div className="left flex gap-[20px] basis-3/6">
        <div className="images basis-1/5">
          <img
            className="w-[100%] h-[150px] object-contain cursor-pointer mb-[10px]"
            src={urlFor(product.image[0])}
            alt=""
            onClick={(e) => setSelectedImage(product.image[0])}
          />
          <img
            className="w-[100%] h-[150px] object-contain cursor-pointer"
            src={urlFor(product.image[0])}
            alt=""
            onClick={(e) => setSelectedImage(product.image[0])}
          />
        </div>
        <div className="mainImg basis-4/5">
          <img
            className="w-[100%] max-h-[800px] object-contain cursor-pointer"
            src={
              setSelectedImage === 0
                ? urlFor(product.image[0])
                : urlFor(product.image[0])
            }
            alt=""
          />
        </div>
      </div>
      <div className="right flex flex-col gap-[30px] basis-3/6">
        <h1 className="font-bold text-3xl">{product?.name}</h1>
        <span className="text-[30px] font-semibold">${product?.price}</span>
        <p className="font-[18px] text-justify">{product?.details}</p>
        <div className="quantity flex items-center gap-[10px]">
          <button
            className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none bg-slate-200 hover:bg-slate-300 ease-in-out duration-200"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button
            className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none bg-slate-200 hover:bg-slate-300 ease-in-out duration-200"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div className="add flex flex-col gap-[20px]">
          <button className="bg-[#22C55E] text-white p-[10px] w-[250px] flex items-center justify-center gap-[20px] cursor-pointer border-none font-semibold rounded hover:bg-[#29aa58] ease-in-out duration-300">
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
