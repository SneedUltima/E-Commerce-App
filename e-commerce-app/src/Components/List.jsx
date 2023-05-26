import React, { useEffect, useState } from "react";
import OptimumWhey from "../img/optimumwhey.jpg";
import DymatizeProtein from "../img/DymatizeElite.jpg";
import Orgain from "../img/orgain.jpg";
import VitalStrength from "../img/VitalStrength.jpg";
import Card from "./Card";
import { client } from "../lib/client";

const List = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "product"]`)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex justify-between flex-wrap">
      {products?.map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </div>
  );
};

export default List;
