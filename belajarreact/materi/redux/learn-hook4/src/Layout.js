import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Layout = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Hook #4 - Performance Optimization</h1>
      </header>
      <main className="App-body">{props.children}</main>
    </div>
  );
};

export default Layout;
