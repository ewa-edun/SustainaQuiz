import React, { createContext, useState, useContext, useEffect } from 'react';
import { themes } from '../themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    // Apply theme to root element
    const root = document.documentElement;
    Object.entries(themes[currentTheme]).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }, [currentTheme]);

  const toggleTheme = (themeName) => {
    setCurrentTheme(themeName);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
