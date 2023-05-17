import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card w-[200px] flex flex-col gap-[10px]">
        <div className="image">
          <img
            className="w-[100%] h-[300px] object-cover hover:scale-105 duration-500"
            src={item.img}
            alt=""
          />
        </div>
        <div>
          <h2 className=" text-lg font-semibold">{item.title}</h2>
        </div>
        <div className="flex gap-[20px]">
          <h3 className=" text-xl font-bold text-slate-400 line-through">
            ${item.oldPrice}
          </h3>
          <h3 className=" text-xl font-bold">${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
