import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../Context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="min-h-[60vh] mx-auto">
      <div className=" bg-slate-100 w-[400px] md:w-[1000px] mx-auto mt-[100px] p-[50px] rounded-xl flex justify-center items-center flex-col">
        <p>
          <BsBagCheckFill className=" text-[50px]" />
        </p>
        <h1 className="font-bold text-xl mt-5 text-center md:text-left">
          Thank you for your purchase!
        </h1>
        <p className=" text-center md:text-left">
          Check your email for your receipt
        </p>
        <p className="mt-5 text-center md:text-left">
          Please reach out for any questions at
        </p>
        <a className="font-semibold" href="mailto:order@examplemail.com">
          order@examplemail.com
        </a>
        <Link to="/">
          <button className="text-white p-[10px] w-[250px] flex items-center justify-center gap-[20px] cursor-pointer border-none font-semibold rounded mt-[20px] hover:bg-[#223e85] ease-in-out duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
