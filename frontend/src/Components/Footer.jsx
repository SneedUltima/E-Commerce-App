import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="my-[50px] mx-[100px] flex flex-col gap-4">
      <div className="top flex justify-between gap-14">
        <div className="left flex gap-10">
          <div className="left-left flex-col">
            <h1 className="text-xl  font-bold text-gray-600">Categories</h1>
            <div>
              <Link className="text-gray-500" to="/products/1">
                Preworkout
              </Link>
            </div>
            <div>
              <Link className="text-gray-500" to="/products/2">
                Protein
              </Link>
            </div>
            <div>
              <Link className="text-gray-500" to="/products/3">
                Accessories
              </Link>
            </div>
          </div>
          <div className="left-right flex flex-col">
            <h1 className="text-xl font-bold text-gray-600">Links</h1>
            <span className="text-gray-500">FAQ</span>
            <span className="text-gray-500">Store</span>
            <span className="text-gray-500">Cookies</span>
          </div>
        </div>
        <div className="right flex gap-10">
          <div className="right-left max-w-[500px]">
            <h1 className="text-xl font-bold text-gray-600">About</h1>
            <span className=" text-center text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nihil
              quidem repellat, eveniet culpa nesciunt debitis eius repudiandae
              inventore animi vero sit impedit nobis repellendus iste, ut ad
              possimus officia.
            </span>
          </div>
          <div className="right-right max-w-[500px]">
            <h1 className="text-xl font-bold text-gray-600">Contact</h1>
            <span className=" text-center text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae, facere pariatur ut esse fugit magnam sapiente alias
              necessitatibus accusantium. Eaque alias culpa amet fugiat
              adipisci?
            </span>
          </div>
        </div>
      </div>

      <div className="bottom flex justify-between">
        <div className="bottom-left flex gap-2 items-center">
          <div className="font-['Kanit'] text-xl">
            <Link to="/">Rush Supplements</Link>
          </div>
          <div>
            <span className="text-gray-500">
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
        </div>
        <div className="bottom-right">
          <img className=" w-60 h-14" src="/img/Stripe.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
