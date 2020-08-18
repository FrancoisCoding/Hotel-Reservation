import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultBcg from "../../images/room-1.jpeg";
import { useSelector } from "react-redux";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import StyledHero from "../Hero/StyledHero";

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
    price,
    capacity,
    size,
    prize,
    extras,
    breakfast,
    pets,
    images,
  } = room.fields;

  return (
    <>
      <StyledHero img={images[0].fields.file.url || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>

      <section className="single-room">
        <div className="single-room-images">
          {images.slice(1).map((image, index) => {
            return <img key={index} src={image.fields.file.url} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
