import React from "react";
import Slider from "../../Components/Slider";
import FeaturedProjects from "../../Components/FeaturedProjects";
import Categories from "../../Components/Categories";
import Contact from "../../Components/Contact";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProjects type="Featured" />
      <Categories />
      <FeaturedProjects type="Trending" />
      <Contact />
    </div>
  );
};

export default Home;
