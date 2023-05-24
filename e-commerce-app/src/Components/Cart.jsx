import React from "react";
import OptimumWhey from "../img/optimumwhey.jpg";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: OptimumWhey,
      title: "Optimum Nutrition Whey Protein",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ipsum iste autem tenetur labore quam modi facilis, quae repellat optio? Fugiat suscipit beatae aperiam, molestiae eligendi magnam, reprehenderit vel alias sapiente labore officiis. Veritatis sequi perspiciatis quaerat. Maiores minus earum itaque, consequatur ad hic accusamus explicabo tempore. Sed, autem eius?",
      oldPrice: 99,
      price: 90,
    },
    {
      id: 2,
      img: OptimumWhey,
      title: "Optimum Nutrition Whey Protein",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ipsum iste autem tenetur labore quam modi facilis, quae repellat optio? Fugiat suscipit beatae aperiam, molestiae eligendi magnam, reprehenderit vel alias sapiente labore officiis. Veritatis sequi perspiciatis quaerat. Maiores minus earum itaque, consequatur ad hic accusamus explicabo tempore. Sed, autem eius?",
      oldPrice: 99,
      price: 90,
    },
  ];
  return (
    <div className="cart absolute right-[20px] top-[80px] z-50 bg-white p-[20px] max-w-[800px]">
      <h1 className="mb-[20px] text-gray-500 text-[24px] font-semibold">
        Products in your cart
      </h1>
      {data?.map((item) => (
        <div
          className="item flex items-center gap-[20px] mb-[30px]"
          key={item.id}
        >
          <img
            className="w-[80px] h-[100px] object-contain"
            src={item.img}
            alt=""
          />
          <div className="details">
            <h1 className="text-[18px] font-semibold">{item.title}</h1>
            <p className=" text-gray-500 mb-[10px] text-[16px]">
              {item.desc?.substring(0, 100)}
            </p>
            <div className="price font-semibold">1 x {item.price}</div>
          </div>
          <AiOutlineDelete className=" text-red-700 text-[30px] cursor-pointer" />
        </div>
      ))}
      <div className="total flex justify-between font-semibold text-[18px] mb-[20px]">
        <span className="font-bold text-lg">SUBTOTAL</span>
        <span className="font-bold text-lg">$100</span>
      </div>
      <button className="bg-[#22C55E] text-white p-[10px] w-[250px] flex items-center justify-center gap-[20px] cursor-pointer border-none font-semibold rounded mb-[10px]">
        Proceed to Checkout
      </button>
      <span className="text-red-500 cursor-pointer text-[16px]">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
