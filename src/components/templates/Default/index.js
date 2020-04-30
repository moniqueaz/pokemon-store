import React from 'react';
import PropTypes from 'prop-types';
import { MyThemeProvider } from '../../../styles/ThemeContext';

import {} from './styles';

const Default = ({ children, theme }) => {
  return <MyThemeProvider theme={theme}>{children}</MyThemeProvider>;
};

Default.defaultProps = {};

Default.propTypes = {};

export default Default;
