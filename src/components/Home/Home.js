import React from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import Services from "./Services";
import { useSelector } from "react-redux";
import FeaturedRooms from "../Rooms/FeaturedRooms";

const Home = () => {
  const state = useSelector((state) => state);
  const rooms = state.hotel.rooms;
  const sortedRooms = state.hotel.sortedRooms;
  const featuredRooms = state.hotel.featuredRooms;
  console.log(rooms, sortedRooms, featuredRooms);
  return (
    <>
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
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
