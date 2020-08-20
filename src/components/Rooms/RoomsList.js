import React from "react";
import { useSelector } from "react-redux";
import Room from "./Room";

const RoomsList = () => {
  const state = useSelector((state) => state);
  const { rooms, sortedRooms, featuredRooms } = state.hotel;

  if (sortedRooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {sortedRooms.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
