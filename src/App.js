import React, { useEffect } from "react";
import "./App.css";
import Routes from "./components/Routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  initializeRooms,
  initializeFeaturedRooms,
  initializeMaxPrice,
  initializeMaxSize,
  initializePrice,
} from "./actions";

// Contentful
import Client from "./components/Contentful/Contentful";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(process.env.REACT_APP_API_SPACE);
  console.log(process.env.REACT_APP_PAYPAL_ID);

  useEffect(() => {
    Client.getEntries().then((res) => dispatch(initializeRooms(res.items)));
  }, [dispatch]);

  useEffect(() => {
    dispatch(initializeFeaturedRooms());
    dispatch(initializeMaxPrice());
    dispatch(initializeMaxSize());
    dispatch(initializePrice());
  }, [state.hotel.rooms, dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
