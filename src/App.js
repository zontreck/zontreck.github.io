import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Router, Route } from "react-router";
import AppWelcome from "./AppWelcome";

function App() {
  return (
    <Router basename={"/sample_layout_source"}>
      <Route path="/" component={AppWelcome} />
    </Router>
  );
}

export default App;