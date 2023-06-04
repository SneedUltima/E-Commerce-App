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
    <div className="lg:my-[100px] xl:mx-[400px] mx-10 mt-10">
      <div className="top flex flex-col md:flex-row items-center md:justify-between mb-[50px]">
        <h1 className="text-2xl font-bold  md:basis-2/5">{type} Protein</h1>
        <p className="md:basis-3/5 text-gray-500 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non
          obcaecati dolor suscipit quia cumque ad voluptatibus sed, sit
          provident iusto porro distinctio odio blanditiis dolorum quod maiores
          nisi minima!
        </p>
      </div>
      <div className="bottom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 w-full place-items-center">
        {products?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
