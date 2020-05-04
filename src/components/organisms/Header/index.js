import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { withTheme } from 'styled-components';
import Search from '../../molecules/Search';
import Cart from '../../organisms/Cart';
import { redirectSearchResult } from '../../../utils';
import Button from '../../atoms/Button';

import {
  backgroundColorSecondary,
  textColorSecondary,
} from '../../../styles/theme';

import { Container, Title, Bottom } from './styles';

const Header = ({ theme }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleToSearch = value => {
    redirectSearchResult(value, history);
  };

  return (
    <Container>
      <Title>
        <a href="/catalog">{theme.mode}</a>
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
  toggleCart: PropTypes.func,
};

export default withTheme(Header);
