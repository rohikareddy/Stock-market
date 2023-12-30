import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    background: '#282c34', 
    text: 'white', 
  });

  const toggleTheme = () => {
    // Toggle between light and dark themes as needed
    setTheme((prevTheme) => ({
      ...prevTheme,
      background: prevTheme.background === '#282c34' ? 'white' : '#282c34',
      text: prevTheme.text === 'white' ? 'black' : 'white',
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
