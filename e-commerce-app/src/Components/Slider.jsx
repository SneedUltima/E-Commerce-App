import React, { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  const data = [
    "https://img.freepik.com/free-vector/protein-supplements-horizontal-banner_23-2150066795.jpg?w=1800&t=st=1684223558~exp=1684224158~hmac=fbe6a2de5c9f43e5cd0a8dea58a156b19700e8c344783585591e5c613d0b6749",
    "https://img.freepik.com/free-photo/happy-young-man-filming-his-video-blog-episode_171337-5505.jpg?w=1480&t=st=1684223626~exp=1684224226~hmac=1717d30ae4e20109b09223f275c916e754366da29e25d8e6fda7420019234346",
    "https://img.freepik.com/premium-vector/banner-template-with-jar-black-protein-sport-3d-container-amino-acids-round-pack-muscle-training-realistic-cylindrical-jar-with-vitamins_162862-1442.jpg?w=2000",
  ];

  return (
    <div className="slider md:h-[calc(100vh-80px)] h-[calc(65vh-80px)] w-[100vw] relative overflow-hidden">
      <div
        className="w-[300vw] h-[100%] flex duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img className=" object-cover w-[100vw] h-full" src={data[0]} alt="" />
        <img className=" object-cover w-[100vw] h-full" src={data[1]} alt="" />
        <img className=" object-cover w-[100vw] h-full" src={data[2]} alt="" />
      </div>
      <div className="icons absolute left-0 right-0 m-auto w-fit flex bottom-[100px] gap-[10px]">
        <div
          onClick={prevSlide}
          className="icon w-[50px] h-[50px] border border-gray-400 flex items-center justify-center cursor-pointer"
        >
          <BiLeftArrowAlt className=" text-white" />
        </div>
        <div
          onClick={nextSlide}
          className="icon w-[50px] h-[50px] border border-gray-400 flex items-center justify-center cursor-pointer"
        >
          <BiRightArrowAlt className=" text-white" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
