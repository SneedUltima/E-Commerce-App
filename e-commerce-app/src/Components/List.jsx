import React, { useEffect, useState } from "react";
import Card from "./Card";
import { client } from "../lib/client";
import { useParams } from "react-router-dom";

const List = ({ catId }) => {
  const params = useParams();
  const [products, setProducts] = useState(null);

  console.log({ catId });

  useEffect(() => {
    client
      .fetch(`*[_type == "product" && category == "${catId}"]`)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, [params]);

  return (
    <div className="flex justify-between flex-wrap">
      {products?.map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </div>
  );
};

export default List;
