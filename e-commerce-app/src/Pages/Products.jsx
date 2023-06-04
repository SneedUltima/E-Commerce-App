import React, { useState } from "react";
import Banner from "../img/banner.jpeg";
import List from "../Components/List";
import { useParams } from "react-router-dom";
import proteinBanner from "../img/protein-banner.jpg";
import accessoriesBanner from "../img/accessories-banner.jpg";
import preworkoutBanner from "../img/preworkout-banner.jpg";

const Products = () => {
  const catId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(120);
  const [sort, setSort] = useState("desc");

  return (
    <div className="px-[50px] py-[30px] flex flex-col md:flex-row">
      <div className="left basis-3/12 sticky h-[100%] top-[50px] flex flex-row md:flex-col justify-between md:justify-normal mb-5 md:mb-0">
        <div className="filterItem mb-[30px]">
          <h2 className="font-bold text-xl mb-[20px]">Filter By Price</h2>
          <div className="inputItem">
            <span className="font-semibold mr-[10px]">$0</span>
            <input
              type="range"
              min={0}
              max={120}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span className="font-semibold ml-[10px]">${maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2 className="font-bold text-xl mb-[20px]">Sort By</h2>
          <div className="inputItem">
            <div>
              <input
                type="radio"
                onChange={(e) => setSort("asc")}
                name="price"
                id="asc"
                value="asc"
              />
              <label className="ml-[10px] font-semibold" htmlFor="asc">
                Price (Lowest first)
              </label>
            </div>
            <div>
              <input
                type="radio"
                onChange={(e) => setSort("desc")}
                name="price"
                id="desc"
                value="desc"
              />
              <label className="ml-[10px] font-semibold" htmlFor="desc">
                Price (Highest first)
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="right basis-9/12">
        {
          {
            "protein": (
              <img
                src={proteinBanner}
                alt="product banner"
                className="w-[100%] h-[300px] object-cover mb-[10px] hidden md:flex"
              />
            ),
            "preworkout": (
              <img
                src={preworkoutBanner}
                alt="product banner"
                className="w-[100%] h-[300px] object-cover mb-[10px] hidden md:flex"
              />
            ),
            "accessories": (
              <img
                src={accessoriesBanner}
                alt="product banner"
                className="w-[100%] h-[300px] object-cover mb-[10px] hidden md:flex"
              />
            ),
          }[catId]
        }
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
