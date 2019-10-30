import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default ({ children }) => {
  // set the default style for every theme
  let themeState = {
    isLight: true,
    light: {
      bg: "hsl(0, 0%, 98%)",
      elBack: "hsl(0, 0%, 100%)",
      txt: "hsl(200, 15%, 8%)"
    },
    dark: {
      bg: "hsl(207, 26%, 17%)",
      elBack: "hsl(209, 23%, 22%)",
      txt: "hsl(0, 0%, 100%)"
    }
  };

  const [theme, setTheme] = useState(themeState);

  // toggle theme by editing the "isLight" property
  let toggleTheme = () => {
    setTheme({ ...theme, isLight: !theme.isLight });
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggle: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
