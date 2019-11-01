import React from "react";

// implement routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.scss";

import ThemeContextProvider from "./contexts/ThemeContext";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:alpha" component={CountryDetails} />
        </Switch>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
