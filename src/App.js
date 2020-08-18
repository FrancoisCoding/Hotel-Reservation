import React from "react";
import "./App.css";
import Routes from "./components/Routes/Routes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
