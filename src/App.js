// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Routes from "../routes";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div>
      <p>I am your father</p>
      <div>
        <Sidebar />
        <Routes />
      </div>
    </div>
  );
}
