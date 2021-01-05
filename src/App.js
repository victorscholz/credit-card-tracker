// import logo from './logo.svg';
// import './App.css';
import React from "react";
// import Menu from "./Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-cards">My Cards</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/my-cards">
            <MyCards />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function MyCards() {
  // path builds <Route> paths relative to parent route
  // url builds relative links
  let { path, url } = useRouteMatch();

  // inserting filler card until data can be seeded
  return (
    <div>
      <h2>My Cards</h2>
      <ul>
        <li>
          <Link to={`${url}/Chase Sapphire Reserve`}>
            Chase Sapphire Reserve
          </Link>
        </li>
        <li>
          <Link to={`${url}/American Express Platinum`}>
            American Express Platinum
          </Link>
        </li>
        <li>
          <Link to={`${url}/Chase Ink Business Preferred`}>
            Chase Ink Business Preferred
          </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Select a card.</h3>
        </Route>
        <Route path={`${path}/:cardId`}>
          <CardInfo />
        </Route>
      </Switch>
    </div>
  );
}

function CardInfo() {
  // rendered route has a path of /:cardId
  // `:cardId` is a placeholder that can be pulled from `useParams()`
  let { cardId } = useParams();

  return (
    <div>
      <h3>{cardId}</h3>
    </div>
  );
}
