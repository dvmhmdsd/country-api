import React from "react";

import "./index.css";

import ThemeContextProvider from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
      <Home />
    </ThemeContextProvider>
  );
}

export default App;
