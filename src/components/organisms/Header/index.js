import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FiShoppingCart, FiSearch, FiX } from 'react-icons/fi';
import Search from '../../molecules/Search';
import * as MapDispachToActions from '../../../store/actions/actionCreators';

import { Container, Title, Button, Bottom, Count } from './styles';

const Header = ({ title, toggleCart, onSearch }) => {
  const [show, setShow] = useState(false);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleToSearch = value => {
    // dispatch(MapDispachToActions.mountToSearch(value));
  };

  return (
    <Container>
      <Title>
        <a href="/category">{title}</a>
      </Title>
      <Button className="button__search" onClick={() => setShow(!show)}>
        {!show && <FiSearch />}
        {show && <FiX />}
      </Button>
      <Button className="button__cart" onClick={toggleCart}>
        <FiShoppingCart />
        <Count>{cart.length}</Count>
      </Button>
      <Bottom show={show}>
        <Search onSubmit={handleToSearch} />
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
