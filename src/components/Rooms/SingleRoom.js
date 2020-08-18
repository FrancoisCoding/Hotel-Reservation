import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultBcg from "../../images/room-1.jpeg";
import { useSelector } from "react-redux";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";

const SingleRoom = ({ match }) => {
  const state = useSelector((state) => state);
  const rooms = state.hotel.rooms;
  const slug = match.params.slug;

  const getRoom = (slug) => {
    const room = rooms.find((room) => room.fields.slug === slug);
    return room;
  };

  const room = getRoom(slug);
  console.log(room);

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    prize,
    extras,
    breakfast,
    pets,
    images,
  } = room.fields;
  return (
    <Hero hero="roomsHero">
      <Banner title={`${name} room`}>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default SingleRoom;
