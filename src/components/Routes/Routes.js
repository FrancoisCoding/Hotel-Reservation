import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Rooms from "../Rooms/Rooms";
import SingleRoom from "../Rooms/SingleRoom";
import Error from "../Error/Error";

const Routes = ({ buttonClick }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route component={Error} />
    </Switch>
  );
};

export default Routes;
