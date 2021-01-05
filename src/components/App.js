// import logo from './logo.svg';
// import './App.css';
import React from "react";
// import Routes from "../routes";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

export default function App(props) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar history={props.history}/>
        <div style={{maxWidth: '800px'}}>
          <Nav />
          {props.children}
        </div>
      </div>
    </div>
  );
}
