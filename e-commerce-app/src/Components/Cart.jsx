import React, { useRef } from "react";
import OptimumWhey from "../img/optimumwhey.jpg";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { Toast } from "react-hot-toast";
import { useStateContext } from "../Context/StateContext";
import { urlFor } from "../lib/client";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    showCart,
    toggleCartItemQuantity,
  } = useStateContext();

  return (
    <div
      className=" w-[100vw] fixed top-0 right-0 z-30 ease-in duration-300 bg-neutral-700 bg-opacity-50"
      ref={cartRef}
      onClick={() => setShowCart(false)}
    >
      <div
        className="relative float-right flex flex-col items-center justify-between w-[600px] h-[100vh] ease-in duration-300 z-50 bg-white py-2 px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="mb-[20px] text-[24px] font-semibold">
          Products in your cart ({totalQuantities}{" "}
          {totalQuantities === 1 ? "item" : "items"})
        </h1>
        {cartItems.length < 1 && (
          <div className="flex flex-col items-center">
            <AiOutlineShoppingCart className="text-[100px]" />
            <h3>Your shopping cart is empty</h3>
            <Link href="/">
              <button
                onClick={() => setShowCart(false)}
                className="text-white p-[10px] w-[250px] flex items-center justify-center gap-[20px] cursor-pointer border-none font-semibold rounded mt-[10px] hover:bg-[#223e85] ease-in-out duration-300"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className=" overflow-auto max-h-[70vh]">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div key={item._id} className="flex mb-10 gap-[30px]">
                <img
                  className="w-[25%] h-[25%]"
                  src={urlFor(item?.image[0])}
                  alt="cart image"
                />
                <div className="flex flex-col justify-between w-full">
                  <div className="flex flex-col">
                    <div>
                      <p className="text-lg  font-semibold">{item.name}</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="quantity flex items-center gap-[10px]">
                      <button
                        className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none bg-slate-200 hover:bg-slate-300 ease-in-out duration-200"
                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none bg-slate-200 hover:bg-slate-300 ease-in-out duration-200"
                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
                      >
                        +
                      </button>
                    </div>
                    <button className="bg-white">
                      <AiOutlineDelete className=" text-red-500 text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="total flex justify-between font-semibold text-[18px] mb-[20px] gap-20">
            <p className="font-bold text-lg">Subtotal: </p>
            <p className="font-bold text-lg">${totalPrice}</p>
          </div>
        )}
        {cartItems.length >= 1 && (
          <button className="text-white p-[10px] w-[250px] flex items-center justify-center gap-[20px] cursor-pointer border-none font-semibold rounded mb-[10px] hover:bg-[#223e85] ease-in-out duration-300">
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
