import React from "react";
import "./App.css";
import Routes from "./components/Routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import Client from "./components/Contentful/Contentful";

Client.getEntries().then((res) => console.log(res.items));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
