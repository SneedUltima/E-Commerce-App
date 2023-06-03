import React, { useEffect, useState } from "react";
import Card from "./Card";
import { client } from "../lib/client";

const FeaturedProjects = ({ type }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "product" && isNew == true]`)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

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
        {products?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
