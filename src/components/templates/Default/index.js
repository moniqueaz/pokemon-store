import React from 'react';
import PropTypes from 'prop-types';
// import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { MyThemeProvider } from '../../../styles/ThemeContext';

import { Wrapper, Header, Content, Cart, Title, Button } from './styles';

const Default = ({ children, theme }) => {
  return (
    <MyThemeProvider theme={theme}>
      <Wrapper>
        <Header>
          <Title>{theme}</Title>
          <Button>
            <FiSearch />
          </Button>
          <Button>
            <FiShoppingCart />
          </Button>
        </Header>
        <Content>{children}</Content>
        <Cart display="none">Cart</Cart>
      </Wrapper>
    </MyThemeProvider>
  );
};

Default.defaultProps = {};

Default.propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Default;
