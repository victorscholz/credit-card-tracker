// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Routes from "../routes";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

export default function App() {
  return (
    <div>
      {/* <p>I am your father</p> */}
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Nav />
          {/* <Routes /> */}
        </div>
      </div>
    </div>
  );
}
