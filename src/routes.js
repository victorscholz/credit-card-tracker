import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";
import MyCards from "./pages/MyCards";
import MyPoints from "./pages/MyPoints";
import BrowseCards from "./pages/BrowseCards";
import Dashboard from "./pages/Dashboard";
import SavedCards from "./pages/SavedCards";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <App {...props}>
            <Switch>
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/my-cards" component={MyCards} />
              <Route path="/my-points" component={MyPoints} />
              <Route path="/browse-cards" component={BrowseCards} />
              <Route path="/saved-cards" component={SavedCards} />
              <Route component={NotFound} />
            </Switch>
          </App>
        )}
      />
    </BrowserRouter>
  );
}
