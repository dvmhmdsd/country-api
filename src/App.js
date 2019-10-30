import React from "react";

import "./index.css";

import ThemeContextProvider from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeContextProvider>
      <Navbar />
    </ThemeContextProvider>
  );
}

export default App;
