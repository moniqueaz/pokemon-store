import React, { useState, useContext, createContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from './theme';

import { useDispatch, useSelector } from 'react-redux';
import * as MapDispachToActions from '../store/actions/actionCreators';

const ThemeToggleContext = createContext();

export const useTheme = () => useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.type);

  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  const handleToTheme = value => {
    dispatch(MapDispachToActions.mountToTheme(value));
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle: handleToTheme }}>
      <ThemeProvider
        theme={{
          mode: theme,
        }}
      >
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
