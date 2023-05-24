import React from "react";
import OptimumWhey from "../img/optimumwhey.jpg";
import DymatizeProtein from "../img/DymatizeElite.jpg";
import Orgain from "../img/orgain.jpg";
import VitalStrength from "../img/VitalStrength.jpg";
import Card from "./Card";

const List = () => {
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
    <div className="flex justify-between flex-wrap">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
