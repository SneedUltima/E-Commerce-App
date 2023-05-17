import React from "react";
import Slider from "../../Components/Slider";
import FeaturedProjects from "../../Components/FeaturedProjects";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProjects type="Featured" />
      <FeaturedProjects type="Trending" />
    </div>
  );
};

export default Home;
