import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

const RoomsContainer = () => {
  const state = useSelector((state) => state);
  const { isLoading } = state.hotel;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter />
      <RoomsList />
    </div>
  );
};

export default RoomsContainer;
