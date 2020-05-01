import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import Search from '../../molecules/Search';

import { Container, Title, Button, Bottom } from './styles';

const Header = ({ title, toggleCart }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log('show: ', show);
  }, [show]);

  return (
    <Container>
      <Title>
        <a href="/category">{title}</a>
      </Title>
      <Button className="button__search" onClick={() => setShow(!show)}>
        <FiSearch />
      </Button>
      <Button className="button__cart" onClick={toggleCart}>
        <FiShoppingCart />
      </Button>
      <Bottom show={show}>
        <Search />
      </Bottom>
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
