import React from "react";
import OptimumWhey from "../img/optimumwhey.jpg";
import DymatizeProtein from "../img/DymatizeElite.jpg";
import Orgain from "../img/orgain.jpg";
import VitalStrength from "../img/VitalStrength.jpg";
import Card from "./Card";

const FeaturedProjects = ({ type }) => {
  const data = [
    {
      id: 1,
      img: OptimumWhey,
      title: "Optimum Nutrition Whey Protein",
      oldPrice: 99,
      price: 90,
    },
    {
      id: 2,
      img: DymatizeProtein,
      title: "Dymatize Elite Protein",
      oldPrice: 110,
      price: 105,
    },
    {
      id: 3,
      img: Orgain,
      title: "Orgain Organic Protein",
      oldPrice: 88,
      price: 87,
    },
    {
      id: 4,
      img: VitalStrength,
      title: "Vital Strength Protein",
      oldPrice: 97,
      price: 93,
    },
  ];

  return (
    <div className="my-[100px] mx-[200px]">
      <div className="top flex items-center justify-between mb-[50px]">
        <h1 className="text-2xl font-bold  basis-2/5">{type} Protein</h1>
        <p className="basis-3/5 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non
          obcaecati dolor suscipit quia cumque ad voluptatibus sed, sit
          provident iusto porro distinctio odio blanditiis dolorum quod maiores
          nisi minima!
        </p>
      </div>
      <div className="bottom flex justify-center gap-[50px]">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
