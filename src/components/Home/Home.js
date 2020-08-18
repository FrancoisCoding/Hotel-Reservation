import React from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
    </div>
  );
};

export default Home;
