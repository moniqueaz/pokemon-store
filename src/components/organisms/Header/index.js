import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch, FiX } from 'react-icons/fi';
import { withTheme } from 'styled-components';
import Search from '../../molecules/Search';
import Cart from '../../organisms/Cart';
import {
  backgroundColorSecondary,
  textColorSecondary,
} from '../../../styles/theme';
import Button from '../../atoms/Button';

import * as MapDispachToActions from '../../../store/actions/actionCreators';

import { Container, Title, Bottom } from './styles';

const Header = ({ title }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const handleToSearch = value => {
    // dispatch(MapDispachToActions.mountToSearch(value));
  };

  return (
    <Container>
      <Title>
        <a href="/category">{title}</a>
      </Title>
      <Button
        className="button__search"
        onClick={() => setShow(!show)}
        color={textColorSecondary}
        bgColor={backgroundColorSecondary}
      >
        {!show && <FiSearch />}
        {show && <FiX />}
      </Button>
      <Bottom show={show}>
        <Search onSubmit={handleToSearch} />
      </Bottom>
      <Cart />
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

export default withTheme(Header);
