import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LangPage from "./ContextPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Hook #3 - State Management</h1>
      </header>
      <LangPage />
    </div>
  );
}

export default App;
