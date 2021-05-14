import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Artist from "./components/Artist";

const Routes = () => {
  return (
    <Switch>
      <Route path="/artist/:id" component={Artist} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
