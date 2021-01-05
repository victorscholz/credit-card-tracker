import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyCards from "./pages/MyCards";
import MyPoints from "./pages/MyPoints";
import BrowseCards from "./pages/BrowseCards";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/my-cards" component={MyCards} />
        <Route path="/my-points" component={MyPoints} />
        <Route path="/browse-cards" component={BrowseCards} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
