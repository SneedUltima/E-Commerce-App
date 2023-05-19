import React from "react";
import Slider from "../../Components/Slider";
import FeaturedProjects from "../../Components/FeaturedProjects";
import Categories from "../../Components/Categories";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProjects type="Featured" />
      <Categories />
      <FeaturedProjects type="Trending" />
    </div>
  );
};

export default Home;
