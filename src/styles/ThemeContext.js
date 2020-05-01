import React, { useContext, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeToggleContext = createContext();

export const useTheme = () => useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children, theme }) => {
  const [themeState, setThemeState] = React.useState(theme);
  console.log('themeState: ', themeState);

  return (
    <ThemeToggleContext.Provider value={{ toggle: setThemeState }}>
      <ThemeProvider
        theme={{
          mode: themeState,
        }}
      >
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
