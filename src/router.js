import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Error404 from "src/middlewares/error404";
import DashBoard from "src/pages/dashboard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
