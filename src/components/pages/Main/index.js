import React from 'react';
import { useTheme } from '../../../styles/ThemeContext';
import styled, { withTheme } from 'styled-components';
import { buttonBackgroundColor, buttonTextColor } from '../../../styles/theme';

import {} from './style';

const Main = props => {
  const themeToggle = useTheme();
  const Button = styled.button`
    background: ${buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
  `;
  return (
    <>
      <Button onClick={() => themeToggle.toggle('dark')}>
        {props.theme.mode === 'dark'
          ? 'Switch to Light Mode'
          : 'Switch to Dark Mode'}
      </Button>
    </>
  );
};

export default withTheme(Main);
