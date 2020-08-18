import React from "react";
import Loading from "../Loading/Loading";
import Room from "./Room";
import Title from "../Home/Title";
import { useSelector } from "react-redux";

const FeaturedRooms = () => {
  const state = useSelector((state) => state);
  const loading = state.hotel.isLoading;
  const featuredRooms = state.hotel.featuredRooms;
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? (
          <Loading />
        ) : (
          featuredRooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })
        )}
      </div>
    </section>
  );
};

export default FeaturedRooms;
