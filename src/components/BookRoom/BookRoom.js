import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideModal, showModal } from "../../actions";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Title from "../Home/Title";
import PaymentExample from "../Paypal/PaymentExample";
import Modal from "../Modal/Modal";

const BookRoom = ({ match }) => {
  const [value, onChange] = useState(new Date());
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { rooms } = state.hotel;
  const slug = match.params.slug;

  const getRoom = (slug) => {
    const room = rooms.find((room) => room.fields.slug === slug);
    return room;
  };

  const room = getRoom(slug);

  if (room) {
    console.log("SELECTED ROOM", room.fields.price);
  }

  const modalShow = () => {
    dispatch(showModal());
  };

  const modalHide = () => {
    dispatch(hideModal());
  };

  return (
    <div className="book-container">
      <Title title="book room" />
      <Calendar
        className="calendar"
        onChange={onChange}
        value={value}
        minDate={new Date()}
      />
      <Title title="Online Payment" />
      <PaymentExample
        amount={room ? room.fields.price : null}
        showModal={modalShow}
      />
      <Modal visible={state.hotel.isVisible} hideModal={modalHide} />
    </div>
  );
};

export default BookRoom;
