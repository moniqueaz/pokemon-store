import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';

import { Container, Title, Button, Bottom, Middle } from './styles';

const Header = ({ title, toggleCart }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log('show: ', show);
  }, [show]);

  return (
    <Container>
      <Middle>
        <Title>
          <a href="/category">{title}</a>
        </Title>
        <Button onClick={() => setShow(!show)}>
          <FiSearch />
        </Button>
        <Button onClick={toggleCart}>
          <FiShoppingCart />
        </Button>
      </Middle>
      <Bottom show={show}>Search</Bottom>
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
