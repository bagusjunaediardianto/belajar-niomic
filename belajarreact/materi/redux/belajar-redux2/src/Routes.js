import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import App from "./App";

const Routes = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  );
};

export default Routes;
