import React from 'react';
import PropTypes from 'prop-types';
import { MyThemeProvider } from '../../../styles/ThemeContext';

import {} from './styles';

const Default = ({ children }) => {
  return <MyThemeProvider>{children}</MyThemeProvider>;
};

Default.defaultProps = {};

Default.propTypes = {};

export default Default;
