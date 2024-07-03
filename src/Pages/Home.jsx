import React from "react";
import Hero from "../Component/Hero";
import { Helmet } from "react-helmet";
const Home = (props) => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Hero />
    </div>
  );
};

export default Home;
