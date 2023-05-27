import React, { useEffect, useState } from "react";
import Card from "./Card";
import { client } from "../lib/client";

const List = ({ catId, maxPrice }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product" && category == "${catId}" && price <= ${maxPrice}]`
      )
      .then((data) => setProducts(data))
      .catch(console.error);
  }, [catId, maxPrice]);

  return (
    <div className="flex justify-between flex-wrap">
      {products?.map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </div>
  );
};

export default List;
