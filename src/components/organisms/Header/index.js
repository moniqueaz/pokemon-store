import React from 'react';
import PropTypes from 'prop-types';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';

import { Container, Title, Button, Bottom } from './styles';

const Header = ({ title, toggleCart }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Button>
        <FiSearch />
      </Button>
      <Button onClick={toggleCart}>
        <FiShoppingCart />
      </Button>
      <Bottom>Search</Bottom>
    </Container>
  );
};

Header.defaultProps = {
  toggleCart: () => undefined,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  toggleCart: PropTypes.func,
};

export default Header;
